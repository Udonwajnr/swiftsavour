import React from 'react'
import { Text,SafeAreaView,Alert, View,TextInput,Button,KeyboardAvoidingView,TouchableOpacity } from "react-native"
import { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../contextApi/context'

const LoginScreen = ({navigation}) => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [loading,setLoading] = useState(false)
    const [data,setData] = useState()
    const [success,setSuccess] = useState(false)

    const {login} = useContext(AuthContext)

    return (
        <SafeAreaView style={{flex:1}}>
        <View style={{flexDirection:"col",flex:1, justifyContent:'center', alignItems:"center",padding:30 ,width:"100%",}}>
            <View className=" w-full">
                <Text style={{color:'black'}} >Email</Text>
                <TextInput autoCapitalize="none"    placeholder="johndoe@gmail.com" value={email} inputMode="email" onChangeText={(email)=>setEmail(email)} placeholderTextColor={"#a3a3a3"} autoComplete="email" style={{height:40,borderWidth:1,marginVertical:6,color:'black',paddingHorizontal:10}} />
            </View>

            <View style={{marginTop:15}} className=" w-full">
                <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                    <Text style={{color:'black'}} >Password</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('ForgotPassword')}><Text style={{color:'black'}} className="underline">Forgot Password</Text></TouchableOpacity>
                </View>
                <TextInput autoCapitalize="none" placeholder="Password" value={password} onChangeText={(password)=>setPassword(password)} placeholderTextColor={"#a3a3a3"} secureTextEntry={true} style={{height:40,borderWidth:1,marginVertical:6 ,color:'black',paddingHorizontal:10}} />
            </View>
            <TouchableOpacity  style={{backgroundColor:'black',width:"100%",paddingHorizontal:5,paddingVertical:7}} onPress={()=>login(email,password)}>
                <Text style={{color:"white",textAlign:'center',fontSize:16}}>Login</Text>
            </TouchableOpacity>
            <View style={{marginTop:14}}>
                <Text style={{color:"black"}}>
                    Don't have an Account?
                    <Text onPress={()=>navigation.navigate("Register")} style={{color:"black"}} className="underline"> Sign up</Text>
                 </Text>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default LoginScreen