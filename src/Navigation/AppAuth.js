import React from 'react'
import { Text } from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from '../screen/HomeScreen'
import DetailScreen from '../screen/DetailScreen'
import CartScreen from '../screen/CartScreen'

const Stack = createNativeStackNavigator()

const AppAuth = () => {
  return (
    <Stack.Navigator>
      
        <Stack.Screen name='Home'
         component={HomeScreen}
         options={{
          headerShown:false
         }}
         />

    <Stack.Screen
       name='Details'
       component={DetailScreen}
      
       options={{
         headerShown:false,
        //  headerLeft:()=><BackArrow/>,
        //  headerTitle:''
        }}
      />

    <Stack.Screen
       name='Cart'
       component={CartScreen}
       options={{
         headerShown:true,
        //  headerLeft:()=><BackArrow/>,
        //  headerTitle:''
        }}
      />

    </Stack.Navigator>
  )
}

export default AppAuth