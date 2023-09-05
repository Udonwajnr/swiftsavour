import React from "react";
import { Text, View,Image, TouchableOpacity } from "react-native";
import {Clock } from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../../sanity/sanity";

export default function RestaurantCard({restaurant}){
    
    const navigation = useNavigation()
    return(
        <TouchableOpacity onPress={()=>navigation.navigate("Menu",{...restaurant})}>
            <View className="bg-white rounded-lg shadow-2xl mb-3">
                <View className="  h-48 relative">
                    <View className="absolute bottom-0 left-4 z-10">
                        <Image source={{uri:urlFor(restaurant.Logo).url()}} className="w-12 h-12 rounded-full"/>
                    </View>
                <Image  source={{uri:urlFor(restaurant.image).url()}} className="h-48 w-full rounded-t-2xl" />
                </View>

                <View className="p-4">
                    <Text className="text-black font-bold text-xl capitalize">{restaurant?.name}</Text>
                    <View className="flex-row justify-between mt-2">
                        <View className="flex-row items-center gap-x-1">
                            <Image source={require("../../assets/Images/star.png")} className="w-5 h-5"/>
                            <Text className="text-[#caccd1] flex items-center">{restaurant.rating} </Text>
                            <Text className="text-[#caccd1]">&#8226;</Text>
                            <Text className="text-[#caccd1]">{restaurant?.address.slice(0,21)+"..."}</Text>
                        </View>

                        <View className="flex-row items-center gap-x-3">
                            <Clock color={'#c9cbd1'} width={17} height={17}/>
                            <Text className="text-[#caccd1]">{restaurant?.Delivery}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}