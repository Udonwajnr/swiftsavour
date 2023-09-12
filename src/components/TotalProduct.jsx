import { TouchableOpacity,View,Text,StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { AuthContext } from "../contextApi/context";

export default function TotalProduct(){
    const navigation = useNavigation()
    const {getCartTotal,deliveryFee,cartItems} = useContext(AuthContext)
    

    return(
        <View className=" w-full px-3 ">
            <View className="bg-[#312525] z-30 w-full p-2.5 rounded-lg">
                <View className="flex-row justify-between">
                        <Text>Subtotal</Text>
                        <Text>&#8358; {getCartTotal()}</Text>
                </View>
                
                <View className="flex-row justify-between mt-2">
                        <Text>Delivery Fee</Text>
                        <Text>&#8358; {deliveryFee}</Text>
                </View>
                
                <View
                    className="border my-3  border-[#caccd1]"    
                />

                <View className="flex-row justify-between">
                        <Text className="font-bold text-xl">Total</Text>
                        <Text  className="font-bold text-xl">&#8358; {getCartTotal() + deliveryFee}</Text>
                </View>
                <TouchableOpacity className="items-center bg-white p-3 rounded-xl mt-4" onPress={()=>navigation.navigate("Checkout")}>
                        <Text className="text-black font-bold">Proceed To Checkout</Text>
                </TouchableOpacity>
                <TouchableOpacity className="items-center bg-white p-3 rounded-xl mt-4" onPress={()=>navigation.navigate("Map")}>
                        <Text className="text-black font-bold">Proceed To Checkout</Text>
                </TouchableOpacity>
                </View>
        </View>
    )
}