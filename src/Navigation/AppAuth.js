import React from 'react'
import { Text } from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from '../screen/HomeScreen'
import CartScreen from '../screen/CartScreen'
import MenuScreen from '../screen/MenuScreen'
import BackArrow from '../components/BackArrow'
import MealDetailScreen from '../screen/MealDetailScreen'
import CheckoutScreen from '../screen/CheckoutScreen'
import MapScreen from '../screen/MapScreen'
import SuccessfulScreen from '../screen/SucessfullScreen'
import RegisterScreen from '../screen/RegisterScreen'
import LoginScreen from '../screen/LoginScreen'

const Stack = createNativeStackNavigator()
const AppAuth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Register'
         component={RegisterScreen}
         options={{
          headerShown:false
         }}
         />

      <Stack.Screen name='Login'
         component={LoginScreen}
         options={{
          headerShown:false
         }}
         />

        <Stack.Screen name='Home'
         component={HomeScreen}
         options={{
          headerShown:false
         }}
         />

      <Stack.Screen
        name='Menu'
        component={MenuScreen}
        
        options={{
          headerShown:false,
          }}
        />



    <Stack.Screen
        name='Detail'
        component={MealDetailScreen}
        options={{
          headerShown:false,
          }}
        />



    <Stack.Screen
       name='Cart'
       component={CartScreen}
       options={{
         headerShown:true,
         headerTitleAlign:'center',
        }}
      />

    <Stack.Screen
        name='Checkout'
        component={CheckoutScreen}
        options={{
          headerShown:false,
          }}
        />

    <Stack.Screen
          name='Map'
          component={MapScreen}
          options={{
            headerShown:true,
            headerTitleAlign:'center',
            }}
          />
          
    </Stack.Navigator>
  )
}

export default AppAuth