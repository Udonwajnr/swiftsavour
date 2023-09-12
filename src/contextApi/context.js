import React,{createContext,useEffect,useState} from "react";
import {Alert} from "react-native"
import { getRestaurant } from "../../sanity/api";

export const AuthContext = createContext();

export const AuthProvider =({children})=>{
    const [restaurant,setRestaurant] = useState([])
    const [cartItems,setCartItems] = useState([])
    const [total,setTotal] = useState(0)
    const [cartItemsTotal,setCartItemsTotal] = useState(0)
    const [paymentBoolean,setPaymentBoolean] = useState(false)
    const deliveryFee = 1000
    const cartTotal=0

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

    useEffect(()=>{
        getRestaurant().then((data)=>{
            setRestaurant(data)
        })
    },[])


    return(
        <AuthContext.Provider value={{restaurant,cartItems,addToCart,removeFromCart,clearCart,getCartTotal,total,deliveryFee,getCartItemsTotal,selectCartItemById,setPaymentBoolean,paymentBoolean}}>
            {children}
        </AuthContext.Provider>
    )
}