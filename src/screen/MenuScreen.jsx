import { Text, View,SafeAreaView, Image, ScrollView, TouchableOpacity } from "react-native";
import { Clock } from "react-native-feather";
import MealCard from "../components/MealCard";
import Cart from "../components/Cart";
import BackArrow from "../components/BackArrow";
import {useRoute} from "@react-navigation/native";
import {useContext} from "react";
import { AuthContext } from "../contextApi/context";
import { urlFor } from "../../sanity/sanity";
import { openGoogleMap } from "../components/OpenGoogleMap";
import { useState } from "react";

export default function MenuScreen(){
    const {params} = useRoute()
    const {restaurant}= useContext(AuthContext)
    let items = params
    const [filterItems,setFilter] = useState('All')

    return(
        <SafeAreaView className="flex-1 bg-[#f7f7f7] relative">
            <ScrollView>
                <View className="relative">
                    <BackArrow/>
                    <Image source={{uri:urlFor(items?.image)?.url()}} className="h-72 w-full"/>
                </View>

            {/*text  */}
                <View className=" rounded-3xl relative bottom-20 bg-white"> 
                    {/* title with image */}
                    <View className=" p-4">
                        <View>
                            <Text className="text-black font-bold text-xl capitalize">{items.name}</Text>
                            <View className="flex-row items-center justify-between  ">
                                <View className="flex-row">
                                    <Image source={require("../../assets/Images/star.png")} className="w-5 h-5"/>
                                    <Text className="text-[#caccd1] flex items-center">{items.rating.toFixed(1)} </Text>
                                    <Text className="text-[#caccd1]">&#8226;</Text>
                                    <TouchableOpacity onPress={()=>openGoogleMap(items?.latitude,items?.longitude)}>
                                        <Text className="text-[#caccd1] underline ">{items?.address.slice(0,32)+"..."}</Text>
                                    </TouchableOpacity>
                                </View>

                                <View className="flex-row">
                                    <Clock color={'#c9cbd1'} width={17} height={17}/>
                                    <Text className="text-[#caccd1]">{items?.Delivery}</Text>
                                </View>

                            </View>

                        </View>
                        
                        <View className="absolute right-3 w-10 h-10 rounded-full top-1">
                            <Image source={{uri:urlFor(items?.Logo)?.url()}} className="w-10 h-10 rounded-full "/>
                        </View>
                    </View>
                    
                    {/* tabs category*/}
                    <View className="mx-4">
                        <ScrollView
                        horizontal={true}
                        className="flex gap-x-1.5 "
                        >
                            <TouchableOpacity className="border border-[#cdf268] rounded-2xl px-3 py-1" onPress={()=>setFilter("All")}>
                                <Text className="text-black text-center" >All</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="border border-[#cdf268] rounded-2xl px-3 py-1" onPress={()=>setFilter("Rice")}>
                                <Text className="text-black text-center">Rice</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="border border-[#cdf268] rounded-2xl px-3 py-1" onPress={()=>setFilter("Pizza")}>
                                <Text className="text-black">Pizza</Text>
                            </TouchableOpacity>
                           
                            <TouchableOpacity className="border border-[#cdf268] rounded-2xl px-3 py-1" onPress={()=>setFilter("Noodles")}>
                                <Text className="text-black">Noodles</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="border border-[#cdf268] rounded-2xl px-3 py-1" onPress={()=>setFilter("Burger")}>
                                <Text className="text-black">Burger</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="border border-[#cdf268] rounded-2xl px-3 py-1" onPress={()=>setFilter("Bread")}>
                                <Text className="text-black">Bread</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="border border-[#cdf268] rounded-2xl px-3 py-1" onPress={()=>setFilter("Salad")}>
                                <Text className="text-black">Salad</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="border border-[#cdf268] rounded-2xl px-3 py-1" onPress={()=>setFilter("Drinks")}>
                                <Text className="text-black">Drinks</Text>
                            </TouchableOpacity> 
                        </ScrollView>
                    </View>

                    {/* meals */}
                    <View className=" mx-4 my-4 flex-row flex-wrap justify-between">
                        {items.dishes?.filter((items)=>{
                          if(filterItems ==="All"){
                            return items
                          }  
                          else{
                           return items.type.title == filterItems
                          }
                        })?.map((items,index)=>{
                            return(
                                <MealCard key={index} items={items}/>
                            )
                        })}
                    </View>
                </View>

            </ScrollView>

            <Cart/>

        </SafeAreaView>
    )
}