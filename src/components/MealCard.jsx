import { Text, View,Image, TouchableOpacity } from "react-native"
import { Plus } from "react-native-feather"
import { useNavigation } from "@react-navigation/native"
import { urlFor } from "../../sanity/sanity";
import { AuthContext } from "../contextApi/context";
import { useContext, useState } from "react";

export default function MealCard({items}){
    const navigation = useNavigation()
    const {cartItems,addToCart} = useContext(AuthContext)

    return(
        <TouchableOpacity onPress={()=>navigation.navigate('Detail',{...items})}>
            <View className="rounded-lg w-40 mb-3 ">
                {/* Meal image */}
                <View className="h-40 rounded-lg relative">
                    <Image source={{uri:urlFor(items?.image)?.url()}} className=" rounded-lg w-full h-full"/>
                </View>
                {/* meal text */}
                {/* change the dollars to naira */}
                <View className="flex-row justify-between items-center p-1">
                    <View>
                        <Text className="capitalize text-black font-semibold">{items.name}</Text>
                        <Text className="capitalize text-black font-semibold mt-1">&#8358; {items.price}</Text>
                    </View>

                    <View >
                        <TouchableOpacity className=" border-[#afea0d] border-2 rounded-full " onPress={()=>addToCart(items)}>
                            <Plus color={'black'} width={19} height={19}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}