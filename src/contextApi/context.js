import React,{createContext,useEffect,useState} from "react";
import {Alert} from "react-native"
import { getRestaurant } from "../../sanity/api";
import {Linking } from "react-native";
import { supabase } from "../../lib/supabase";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider =({children})=>{
    // authentication
    const [isLoading,setIsLoading] = useState(false)
    const [userToken,setUserToken] = useState(null)
    const [forgetToken,setForgetToken] = useState(false)
    const [changedPassword,setChangedPassword] = useState(false)
    const [userInfo,setUserInfo] = useState([])
    // authentication ending

    // Restaurant variable
    const [restaurant,setRestaurant] = useState([])
    const [cartItems,setCartItems] = useState([])
    const [total,setTotal] = useState(0)
    const [cartItemsTotal,setCartItemsTotal] = useState(0)
    const [paymentBoolean,setPaymentBoolean] = useState(false)
    const deliveryFee = 1000
    const cartTotal=0

    // Restaurant variable ending

    // authentication function
        const signUp=async(email,password)=>{
        let { data,error} = await supabase.auth.signUp({
            email:email,
            password:password
        })
        
        if(data.user){
        const jsonValue = JSON.stringify(data.user)
        let userToken = await AsyncStorage.setItem("data",jsonValue);
        setUserToken(userToken)       
     }else{
            Alert.alert(error.message)
     }
    }
    // login 
    const login=async(email,password)=>{
        let { data,error} = await supabase.auth.signInWithPassword({
            email:email,
            password:password
        })
        
        if(data.user){
        const jsonValue = JSON.stringify(data.user)
        let userToken = await AsyncStorage.setItem("data",jsonValue);
        setUserToken(userToken)       
     }else{
            Alert.alert(error.message)
     }

    }

    // isLogged in
    const isLoggedIn =async()=>{
        try{
            setIsLoading(true)
            let userToken = await AsyncStorage.getItem("data")
           const value = userToken != null ? JSON.parse(userToken) : null;
            setUserToken(userToken)
            setUserInfo(value)
            setIsLoading(false)
        }catch(e){
            console.log(`isLogged in error ${e}`)
        }
        
        }


        const logout=()=>{
            setUserToken(null)
            AsyncStorage.removeItem("data")
            setIsLoading(false)
        }

        const forgetPassword=async(email)=>{
            await supabase.auth.resetPasswordForEmail(
             email,{redirectTo:"swiftsavor://app/setnewpassword/hello"}
             )
             setForgetToken(true)
         }

        const updatePassword=async(new_password)=>{
            await supabase.auth.updateUser({ password: new_password })
            // setUserToken('done')
            setChangedPassword(true)
        }
    // authentication function ends

    

    // restaurant functions
    const addToCart = (items)=>{
        const isItemInCart = cartItems.find((cartItems)=>cartItems._id===items._id);

        if(isItemInCart){
            setCartItems(
                cartItems.map((cartItem)=>
                cartItem._id===items._id
                ?{...cartItem,quantity:cartItem.quantity + 1}
                :cartItem
                )
            )
        }
        else{
            setCartItems([...cartItems,{...items,quantity:1}])
        }
    }

    const removeFromCart =(item)=>{
        const isItemInCart =  cartItems.find((cartItem)=>cartItem._id === item._id);

        if(isItemInCart?.quantity === 1){
            setCartItems(cartItems.filter((cartItem)=>cartItem._id !== item._id));
        }
        else{ 
            setCartItems(
                cartItems.map((cartItem)=>
                cartItem._id === item._id
                ?{...cartItem, quantity:cartItem.quantity - 1}
                :cartItem
                )
            )
        }
    }

    const clearCart=()=>{
        setCartItems([])
    }

    const selectCartItemById =(id)=> cartItems.filter(item=>item._id==id)

    const getCartTotal=()=>{
        return cartItems.reduce((total,item)=>total + item.price * item.quantity,0)
    }

    const getCartItemsTotal=()=>{
        return cartItems.reduce((total,item)=>total + item.quantity,0)
    }

    // restaurant functions ending


    useEffect(()=>{
        getRestaurant().then((data)=>{
            setRestaurant(data)
        })
        isLoggedIn()
    },[])

    return(
        <AuthContext.Provider value={{
            restaurant,
            cartItems,
            addToCart,
            removeFromCart,
            clearCart,
            getCartTotal,
            total,
            deliveryFee,
            getCartItemsTotal,
            selectCartItemById,
            setPaymentBoolean,
            paymentBoolean,
            login,
            logout,
            isLoading,
            userToken,
            signUp,
            forgetPassword,
            forgetToken,
            updatePassword,
            changedPassword,
            userInfo
            }}>
            {children}
        </AuthContext.Provider>
    )
}