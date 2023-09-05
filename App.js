import React from "react";
import { Text } from "react-native";
import Navigation from "./src/Navigation";
import { AuthProvider } from "./src/contextApi/context";

export default function App(){
  return(
    <AuthProvider>
      <Navigation/>
    </AuthProvider>
  )
}
