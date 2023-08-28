import {Image,Text, View,SafeAreaView, ScrollView } from "react-native";
import CartCard from "../components/CartCard";
import Cart from "../components/Cart";
import TotalProduct from "../components/TotalProduct";

export default function(){
    return(
        <SafeAreaView className="relative flex-1">
                <TotalProduct/>
            <ScrollView >
                <View className="mx-3 relative">
                    <CartCard/>   
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}