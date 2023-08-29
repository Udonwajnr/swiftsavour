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
       name='Menu'
       component={MenuScreen}
      
       options={{
         headerShown:false,
        //  headerLeft:()=><BackArrow/>,
        //  headerTitle:''
        }}
      />

  <Stack.Screen
       name='Detail'
       component={MealDetailScreen}
       options={{
         headerShown:false,
        //  headerTitleAlign:'center',
        //  headerLeft:()=><BackArrow/>,
        //  headerTitle:''
        }}
      />


    <Stack.Screen
       name='Cart'
       component={CartScreen}
       options={{
         headerShown:true,
         headerTitleAlign:'center',
        //  headerLeft:()=><BackArrow/>,
        //  headerTitle:''
        }}
      />

  <Stack.Screen
       name='Checkout'
       component={CheckoutScreen}
       options={{
         headerShown:true,
         headerTitleAlign:'center',
        //  headerLeft:()=><BackArrow/>,
        //  headerTitle:''
        }}
      />

<Stack.Screen
       name='Map'
       component={MapScreen}
       options={{
         headerShown:true,
         headerTitleAlign:'center',
        //  headerLeft:()=><BackArrow/>,
        //  headerTitle:''
        }}
      />

    </Stack.Navigator>
  )
}

export default AppAuth