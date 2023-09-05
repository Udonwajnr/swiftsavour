import { ScrollView, Text,SafeAreaView, View, Image,TouchableOpacity } from "react-native";
import { Clock,Plus,Minus } from "react-native-feather";
import Cart from "../components/Cart";
import BackArrow from "../components/BackArrow";
import { AuthContext } from "../contextApi/context";
import { urlFor } from "../../sanity/sanity";
import { useContext } from "react";
import { useRoute } from "@react-navigation/native";



export default function MealDetailScreen(){
    const {params} = useRoute()
    const {restaurant,addToCart,removeFromCart,cartItems,selectCartItemById}= useContext(AuthContext)
    let items = params
    let totalItem = selectCartItemById(items._id)
    return(
        <SafeAreaView className="flex-1">
            <ScrollView >
                <View className="h-96 relative">
                    <BackArrow/>
                    <Image source={{uri:urlFor(items?.image)?.url()}} className="w-full h-full"/>
                </View>

            {/* text */}
                {/* Meal title */}
                <View className=" mx-3">
                    <View className="mt-2 ">
                                <Text className="text-2xl  text-black">{items.name}</Text>
                                <View className="flex-row mt-1 items-center">
                                    {/* <Image source={require("../../assets/Images/star.png")} className="w-5 h-5"/> */}
                                    {/* <Text className="text-[#c0bfbe] flex items-center"> 4.5(1.5k) </Text>
                                    <Text className="text-[#c0bfbe]"> &#8226;</Text>
                                    <Text className="text-[#c0bfbe]"> 885 Ave </Text>
                                    <Clock color={'#c9cbd1'} width={17} height={17}/>
                                    <Text className="text-[#c0bfbe]"> 25-35 min</Text> */}
                                </View>
                    </View>

                 
                </View>
                {/* Meal title ending */}

                {/* meal Description */}
                <View className="mx-3 mt-3">
                    <Text className="text-gray-500">{items.description}</Text>
                </View>
                <View className="mt-4 flex-row justify-between mx-3 ">
                    <View className="flex-row justify-between items-center bg-[#e7eaef] p-2">
                            <TouchableOpacity className=" rounded-full mr-4" onPress={()=>addToCart(items)}>
                                <Plus color={"black"} width={20} height={20}/>
                            </TouchableOpacity>
                                <Text className="text-black text-center text-xl font-bold">{totalItem[0]?.quantity || 0}</Text>
                            <TouchableOpacity className="rounded-full ml-4" onPress={()=>removeFromCart(items)}>
                                <Minus color={"black"} width={20} height={20}/>
                            </TouchableOpacity>
                        </View>

                        {/* add to cart button */}
                    <TouchableOpacity className="bg-black flex-row items-center justify-between  px-2 py-2 rounded-lg" onPress={()=>addToCart(items)}>
                      <Text className="text-white mr-5 font-bold" >Add to Cart</Text>
                      <Text className="text-white font-bold">&#8358; {items.price}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <Cart/>
        </SafeAreaView>
    )
}