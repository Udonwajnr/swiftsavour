import { Text, View ,SafeAreaView, ScrollView, Image,Button, Touchable, TouchableOpacity} from "react-native";
import { AuthContext } from "../contextApi/context";
import { useContext } from "react";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";


export default function SuccessFullPage(){
    const {cartItems,getCartTotal,deliveryFee} = useContext(AuthContext)
    const navigation = useNavigation()
    return(
        <SafeAreaView className=" relative  h-screen w-full z-30  top-0">
                <View className=" bg-[#f5f7fb] h-full ">
                    <View className="flex-col items-center bg-white h-96 w-[80%] m-auto p">
                        <View className="w-[90%]">
                                <View className="bg-[#afea0d] justify-center items-center rounded-full h-40 w-40 relative m-auto bottom-20 border-8 border-black">
                                    <Image source={require("../../assets/Images/200.png")} className="w-28 h-28 "/>
                                </View>
                            <Text className="text-xs font-bold text-center text-[#afea0d]">Great!</Text>
                            <Text className="font-bold text-center text-black">Payment Successful</Text>
                            <View className="">
                                <View className="justify-between flex-row">
                                    <Text className="text-base text-[#959493]">Meal</Text>
                                    <Text className="text-base font-bold text-black">&#8358; {getCartTotal()}</Text>
                                </View>
                                <View className="justify-between flex-row">
                                    <Text className="text-base text-[#959493]">Delivery</Text>
                                    <Text className="text-base font-bold text-black">&#8358; {deliveryFee}</Text>
                                </View>
                                <View className="justify-between flex-row">
                                    <Text className="text-base text-[#959493]">Pay Date</Text>
                                    <Text className="text-base font-bold text-black">{moment().format('MMMM Do YYYY')}</Text>
                                </View>
                                
                            </View>
                           
                        </View>
                        <View className="justify-between items-center flex-col absolute bottom-3">
                                    <Text className="text-base text-[#959493]">Total Pay</Text>
                                    <Text className="font-bold text-black text-2xl">&#8358; {getCartTotal() + deliveryFee}</Text>
                          </View>
                    </View>
                </View>
            <View className=" absolute bottom-3 w-full">
                    <TouchableOpacity className="bg-[#AFEA0D] px-4 py-2 mx-3 rounded-xl" onPress={()=>navigation.navigate('Map')}>
                            <Text className="text-center text-white font-bold text-lg">View Map</Text>
                    </TouchableOpacity>
                </View>
        </SafeAreaView>
    )
}
