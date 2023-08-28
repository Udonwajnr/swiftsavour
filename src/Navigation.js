import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ActivityIndicator } from "react-native";
import Auth from "./Navigation/Auth";
import AppAuth from "./Navigation/AppAuth";


export default function Navigation(){

    return(
        <NavigationContainer>
            <AppAuth/>
        </NavigationContainer>
    )
}