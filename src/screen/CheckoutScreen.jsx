import { Text, TextInput, View, ScrollView,SafeAreaView,Button, Alert } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import client from "../../sanity/sanity"
import { useRoute } from "@react-navigation/native"
import { AuthContext } from "../contextApi/context"
import { useContext } from "react"

export default function CheckoutScreen(){
    const navigation = useNavigation()
    const [fullName,setFullName] = useState('')
    const [location,setLocation] = useState('')
    const [email,setEmail] = useState('')
    const [phoneNumber,setPhoneNumber] = useState('')
    const {cartItems} = useContext(AuthContext)

    const postUser =async()=>{
        if(fullName == ''||location== ''||email== ''||phoneNumber== ''){
            Alert.alert("Please fill the inputs")
        }
        else{
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
        }


    }

    console.log(fullName)


    return(
        <SafeAreaView className="flex-1">
            <ScrollView>
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
                        <TextInput autoCapitalize="none" value={phoneNumber} onChangeText={(e)=>setPhoneNumber(e)}  placeholder="52 Osong Ama Estate Road" inputMode="text"  placeholderTextColor={"#a3a3a3"} autoComplete="address-line1" style={{height:40,borderWidth:1,marginVertical:6,color:'black',paddingHorizontal:10}}/>
                    </View>
                    {/* <View>
                        <Text className="text-black text-lg">Amount</Text>
                        <TextInput autoCapitalize="none"  placeholder="1000" inputMode="text"  onChangeText={''} placeholderTextColor={"#a3a3a3"} style={{height:40,borderWidth:1,marginVertical:6,color:'black',paddingHorizontal:10}}/>
                    </View> */}

                    {/* <Button title="Pay Now" onPress={()=>navigation.navigate('Map')}/> */}
                    <Button title="Pay Now" onPress={()=>postUser()}/>
                </View>
                {/* <Button title="Get Current location" /> */}
                
                
            </ScrollView>
        </SafeAreaView>
        )
}