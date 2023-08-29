import { ScrollView, Text,SafeAreaView, View, Image,TouchableOpacity } from "react-native";
import { Clock,Plus,Minus } from "react-native-feather";
import Cart from "../components/Cart";
import BackArrow from "../components/BackArrow";

export default function MealDetailScreen(){
    return(
        <SafeAreaView className="flex-1">
            
            <ScrollView >
                <View className="h-96 relative">
                    <BackArrow/>
                    <Image source={require('../../assets/Images/h.jpg')} className="w-full h-full"/>
                </View>

            {/* text */}
                {/* Meal title */}
                <View className=" mx-3">
                    <View className="mt-2 ">
                                <Text className="text-2xl  text-black">Vegan Burger</Text>

                                <View className="flex-row mt-1 items-center">
                                    <Image source={require("../../assets/Images/star.png")} className="w-5 h-5"/>
                                    <Text className="text-[#c0bfbe] flex items-center"> 4.5(1.5k) </Text>
                                    <Text className="text-[#c0bfbe]"> &#8226;</Text>
                                    <Text className="text-[#c0bfbe]"> 885 Ave </Text>
                                    <Clock color={'#c9cbd1'} width={17} height={17}/>
                                    <Text className="text-[#c0bfbe]"> 25-35 min</Text>
                                </View>
                    </View>

                 
                </View>
                {/* Meal title ending */}

                {/* meal Description */}
                <View className="mx-3 mt-3">
                    <Text className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas facere porro necessitatibus? Harum in quo voluptatum quia excepturi voluptate. Saepe qui, mollitia in laudantium magnam est vitae velit facere dolorem. Aliquid aspernatur, praesentium impedit quidem fugiat ducimus quia voluptatum illum reprehenderit fuga aliquam. Suscipit nemo excepturi soluta possimus? Aut, deleniti.</Text>
                </View>
                <View className="mt-4 flex-row justify-between mx-3 ">
                    <View className="flex-row justify-between items-center bg-[#e7eaef] p-2">
                            <TouchableOpacity className=" rounded-full mr-4" >
                                <Plus color={"black"} width={20} height={20}/>
                            </TouchableOpacity>
                                <Text className="text-black text-center text-xl font-bold">1</Text>
                            <TouchableOpacity className="rounded-full ml-4">
                                <Minus color={"black"} width={20} height={20}/>
                            </TouchableOpacity>
                        </View>

                        {/* add to cart button */}
                    <TouchableOpacity className="bg-black flex-row items-center justify-between  px-2 py-2 rounded-lg">
                      <Text className="text-white mr-5 font-bold" >Add to Cart</Text>
                      <Text className="text-white font-bold" > $9.80</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <Cart/>
        </SafeAreaView>
    )
}