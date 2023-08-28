import { Text, View,SafeAreaView, Image, ScrollView, TouchableOpacity } from "react-native";
import { Clock } from "react-native-feather";
import MealCard from "../components/MealCard";
import Cart from "../components/Cart";
import BackArrow from "../components/BackArrow";
export default function DetailScreen(){
    return(
        <SafeAreaView className="flex-1 bg-[#f7f7f7] relative">
            <ScrollView>
                <View className="relative">
                    <BackArrow/>
                    <Image source={require('../../assets/Images/pizza.jpg')} className="h-72 w-full"/>
                </View>

            {/*text  */}
                <View className=" rounded-3xl relative bottom-20 bg-white"> 
                    {/* title with image */}
                    <View className="flex-row justify-between items-center p-4">
                        <View>
                            <Text className="text-black font-bold text-xl capitalize">Crunchies Sharwama</Text>
                            <View className="flex-row items-center gap-x-1 mt-2">
                                <Image source={require("../../assets/Images/star.png")} className="w-5 h-5"/>
                                <Text className="text-[#caccd1] flex items-center">4.5(1.5k) </Text>
                                <Text className="text-[#caccd1]">&#8226;</Text>
                                <Text className="text-[#caccd1]">885 Ave</Text>
                                <Clock color={'#c9cbd1'} width={17} height={17}/>
                                <Text className="text-[#caccd1]">25-35 min</Text>
                            </View>

                        </View>
                        
                        <View className="">
                            <Image source={require('../../assets/Images/download.png')} className="w-12 h-12 rounded-full"/>
                        </View>
                    </View>
                    
                    {/* tabs category*/}
                    <View className="mx-4">
                        <ScrollView
                        horizontal={true}
                        className="flex gap-x-1.5 "
                        >
                            <TouchableOpacity className="border border-[#cdf268] rounded-2xl px-3 py-1">
                                <Text className="text-black text-center">Rice</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="border border-[#cdf268] rounded-2xl px-3 py-1">
                                <Text className="text-black">Pizza</Text>
                            </TouchableOpacity>
                           
                            <TouchableOpacity className="border border-[#cdf268] rounded-2xl px-3 py-1">
                                <Text className="text-black">Noodels</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="border border-[#cdf268] rounded-2xl px-3 py-1">
                                <Text className="text-black">Burger</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="border border-[#cdf268] rounded-2xl px-3 py-1">
                                <Text className="text-black">Bread</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="border border-[#cdf268] rounded-2xl px-3 py-1">
                                <Text className="text-black">Salad</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="border border-[#cdf268] rounded-2xl px-3 py-1">
                                <Text className="text-black">Drinks</Text>
                            </TouchableOpacity> 
                        </ScrollView>
                    </View>

                    {/* meals */}
                    <View className=" mx-4 my-4 flex-row flex-wrap justify-between">
                        <MealCard/>
                        <MealCard/>
                        <MealCard/>
                        <MealCard/>
                        <MealCard/>
                    </View>
                </View>

            </ScrollView>

            <Cart/>

        </SafeAreaView>
    )
}