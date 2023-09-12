import { Text, TextInput, View, ScrollView,SafeAreaView,Button, Alert, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import client from "../../sanity/sanity"
import { useRoute } from "@react-navigation/native"
import { AuthContext } from "../contextApi/context"
import { useContext } from "react"
import PayWithFlutterwave from "flutterwave-react-native"
import SuccessfulScreen from "./SucessfullScreen"
import SuccessFullPage from "../components/Successful"

export default function CheckoutScreen(){
    const [fullName,setFullName] = useState('')
    const [location,setLocation] = useState('')
    const [email,setEmail] = useState('')
    const [phoneNumber,setPhoneNumber] = useState('')
    const {cartItems,getCartTotal,deliveryFee,setPaymentBoolean,paymentBoolean} = useContext(AuthContext)
    const [payment,setPayment] = useState({})
    const [active,setActive] = useState(1)
    const total = getCartTotal() + deliveryFee
   

   let RedirectParams= {
    status: 'successful' || 'cancelled',
    transaction_id: '',
    tx_ref: '',
  }
  const generateRef = (length) => {
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
    var b = [];  
    for (var i=0; i<length; i++) {
        var j = (Math.random() * (a.length-1)).toFixed(0);
        b[i] = a[j];
    }
    return b.join("");
}


const formHandler =()=>{
    if(fullName == ''|| location == '' || email== '' || phoneNumber== ''){
        setActive(1)
        Alert.alert("fill form input")
    }
    else{
      setActive(active+1)
    } 
}

const handleOnRedirect = async (RedirectParams) => {
        setPayment(RedirectParams)     
    }

    const test =async()=>{
        const mutations = [{
            create:{
              _type: 'order',
              fullName:fullName,
              location:location,
              phone:phoneNumber,
              email:email,
              dishes:cartItems,
              status:true
            }
        }]
        await  fetch(`https://${"i0yfg9os"}.api.sanity.io/v2021-06-07/data/mutate/${"production"}`, {
          method: 'post',
          headers: {
              'Content-type': 'application/json',
              Authorization: `Bearer ${"skjmUNrgRTebayY73CTllJTQeMxp9u7UEmbeMmwxPv3xdBR1bme9egeGXjOCXSOQa9xtiGr3XSCFKDa3k3aloUJvGVkgX1yJpYUdY2pY4Nqj5KwtHaImvOgtPfA9XSOAKWOY8ZMxc2TyYX2DXpR1uUvxvuGkaJvUnWYUM3phshWVbkQz59Lw"}`
          },
          body: JSON.stringify({mutations})
      })
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.error(error))
    setPaymentBoolean(true)
    setPayment('')
    }

    if(payment.status === "successful"){
        test()
    }

    if(paymentBoolean){
        return <SuccessFullPage/>
    }

    return(
        <SafeAreaView className="flex-1">
            <ScrollView className="relative flex-1">
                {
                    active ===1?
                    <View className="flex-col mx-3 mt-3">
                        <View>
                            <Text className="text-black text-lg">FullName</Text>
                            <TextInput placeholder="John Doe" value={fullName}  onChangeText={(e)=>setFullName(e)} placeholderTextColor={"#a3a3a3"} inputMode="text" autoComplete="name" style={{height:40,borderWidth:1,marginVertical:6,color:'black',paddingHorizontal:10}}/>
                        </View>

                        <View>
                            <Text className="text-black text-lg">Email</Text>
                            <TextInput autoCapitalize="none" value={email} onChangeText={(e)=>setEmail(e)}  placeholder="johndoe@gmail.com"  inputMode="email" placeholderTextColor={"#a3a3a3"} autoComplete="email" style={{height:40,borderWidth:1,marginVertical:6,color:'black',paddingHorizontal:10}} />
                        </View>

                        <View>
                            <Text className="text-black text-lg">Address</Text>
                            <Text className="text-[10px] italic text-black">Location Within Uyo</Text>
                            <TextInput autoCapitalize="none" value={location} onChangeText={(e)=>setLocation(e)}  placeholder="52 Osong Ama Estate Road" inputMode="text"   placeholderTextColor={"#a3a3a3"} autoComplete="address-line1" style={{height:40,borderWidth:1,marginVertical:6,color:'black',paddingHorizontal:10}}/>
                        </View>
                        <View>
                            <Text className="text-black text-lg">Phone Number</Text>
                            <TextInput autoCapitalize="none" value={phoneNumber} onChangeText={(e)=>setPhoneNumber(e)}  placeholder="0800000000" inputMode="text"  placeholderTextColor={"#a3a3a3"} autoComplete="address-line1" style={{height:40,borderWidth:1,marginVertical:6,color:'black',paddingHorizontal:10}}/>
                        </View>
                        {/* <View>
                            <Text className="text-black text-lg">Amount</Text>
                            <TextInput autoCapitalize="none"  placeholder="1000" inputMode="text"  onChangeText={''} placeholderTextColor={"#a3a3a3"} style={{height:40,borderWidth:1,marginVertical:6,color:'black',paddingHorizontal:10}}/>
                        </View> */}

                        {/* <Button title="Pay Now" onPress={()=>secondFunction()}/> */}
                    </View>
                    :
                    <PayWithFlutterwave
                        onRedirect={handleOnRedirect} 
                        options={{
                            tx_ref: generateRef(11),
                            authorization:'FLWPUBK_TEST-39c40e452700c976b52c1140dd888f54-X',
                            customer: {
                                email: email
                            },
                            amount: total,
                            currency: 'NGN',
                            payment_options: 'card'
                        }}
                    />
                }

                <View className="flex-row mx-3 justify-between">
                    <TouchableOpacity title="previous" className="bg-black px-4 py-2 text-white" onPress={()=>setActive(1)}>
                        <Text>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-black px-4 py-2 text-white" title="previous" onPress={()=>formHandler()}>
                        <Text>Next</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
        )
}