import React,{ useContext, useEffect, useState }  from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ActivityIndicator, View ,Text} from "react-native"
import Auth from "./Navigation/Auth";
import AppAuth from "./Navigation/AppAuth";
import { AuthContext } from "./contextApi/context";
import linking from "./Navigation/Linking";

export default function Navigation(){
    const {isLoading,userToken,userInfo} = useContext(AuthContext)
        console.log(userInfo)
    return(
        <NavigationContainer  linking={linking} fallback={<Text>Loading...</Text>}>
               { 
               userToken !== null?
               <AppAuth/>
               :
               <Auth/> 
            }
        </NavigationContainer>
    )
}