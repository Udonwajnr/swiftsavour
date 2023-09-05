import React, { useContext, useEffect,useState } from "react";
import { View,Text,Image, Touchable, TouchableOpacity } from "react-native";
import RestaurantCard from "./RestaurantCard";
import axios from "axios";
import { getRestaurant } from "../../sanity/api";
import { AuthContext } from "../contextApi/context";

export default function Restaurant({navigation}){
    const {restaurant}= useContext(AuthContext)
    
    return(
        <View className="px-4 mt-4 ">
            {/* restaurant header */}
            <View className="flex flex-row justify-between items-center mb-4">
                <View className="flex-row items-center">
                <Text className="text-2xl font-bold text-black">Restaurants</Text>
                <Image source={require('../../assets/Images/fire.png')} className="h-8 w-8"/>
                </View>

                <TouchableOpacity>
                    <Text className="text-[#b4d261] ">View all</Text>
                </TouchableOpacity>
            </View>
            {/*Restaurant card  */}
            <View className="">
                {
                    restaurant.map((restaurant,index)=>{
                        return(
                            <RestaurantCard key={index} navigation={navigation} restaurant={restaurant}/>
                        )
                    })
                }
            </View>
        </View>
    )
}