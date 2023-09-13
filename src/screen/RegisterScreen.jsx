import React,{useContext, useEffect, useState} from 'react'
import { Text,View,SafeAreaView,TextInput,TouchableOpacity, ScrollView } from 'react-native'
import { AuthContext } from '../contextApi/context'

const RegisterScreen = ({navigation}) => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    
    console.log(email,password)
    const {signUp} = useContext(AuthContext)

    return (
        <SafeAreaView style={{flex:1}}>
                <View className="flex-1" style={{flexDirection:"col",flex:1, justifyContent:'center', alignItems:"center",padding:30 ,width:"100%",height:"100%"}}>
                    <TextInput autoCapitalize="none" className="w-full"  placeholder="Email" value={email} inputMode="email" onChangeText={(email)=>setEmail(email)} placeholderTextColor={"black"} autoComplete="email" style={{height:40,borderWidth:1,marginVertical:6,color:'black',paddingHorizontal:10}} />
                    <TextInput autoCapitalize="none" className="w-full" placeholder="Password" value={password} onChangeText={(password)=>setPassword(password)} placeholderTextColor={"black"} secureTextEntry={true} style={{height:40,borderWidth:1,marginVertical:6 ,color:'black',paddingHorizontal:10}} />
                    <TouchableOpacity  style={{backgroundColor:'black',width:"100%",paddingHorizontal:5,paddingVertical:7}} onPress={()=>signUp(email,password)}>
                        <Text style={{color:"white",textAlign:'center',fontSize:16}}>Sign up</Text>
                    </TouchableOpacity>
                    <View style={{marginTop:14}}>
                        <Text style={{color:"black"}}>
                            Already have an Account?
                            <Text className="underline" onPress={()=>navigation.push("Login")} style={{color:"black"}}> Login</Text>
                        </Text>
                    </View>
                </View>
    </SafeAreaView>
  )
}

export default RegisterScreen