import React from "react";
import { Text, View,Image, TouchableOpacity } from "react-native";
import {Clock } from "react-native-feather";
import { useNavigation } from "@react-navigation/native";

export default function RestaurantCard(){
    const navigation = useNavigation()
    return(
        <TouchableOpacity onPress={()=>navigation.navigate("Details")}>
            <View className="bg-white rounded-lg shadow-2xl mb-3">
                <View className="  h-48 relative">
                    <View className="absolute bottom-0 left-4 z-10">
                        <Image source={require('../../assets/Images/download.png')} className="w-12 h-12 rounded-full"/>
                    </View>
                <Image  source={require('../../assets/Images/Sharwama.jpeg')} className="h-48 w-full rounded-t-2xl" />
                </View>

                <View className="p-4">
                    <Text className="text-black font-bold text-xl capitalize">Crunchies Sharwama</Text>
                    <View className="flex-row justify-between mt-2">
                        <View className="flex-row items-center gap-x-1">
                            <Image source={require("../../assets/Images/star.png")} className="w-5 h-5"/>
                            <Text className="text-[#caccd1] flex items-center">4.5(1.5k) </Text>
                            <Text className="text-[#caccd1]">&#8226;</Text>
                            <Text className="text-[#caccd1]">885 Ave</Text>
                        </View>

                        <View className="flex-row items-center gap-x-3">
                            <Clock color={'#c9cbd1'} width={17} height={17}/>
                            <Text className="text-[#caccd1]">25-35 min</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}