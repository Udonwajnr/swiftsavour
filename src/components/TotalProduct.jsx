import { TouchableOpacity,View,Text,StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function TotalProduct(){
    const navigation = useNavigation()

    return(
        <View className="absolute bottom-3 w-full px-3 ">
            <View className="bg-[#312525] z-30 w-full p-2.5 rounded-lg">
                <View className="flex-row justify-between">
                        <Text>Subtotal</Text>
                        <Text>$18.00</Text>
                </View>
                <View className="flex-row justify-between mt-2">
                        <Text>Delivery Fee</Text>
                        <Text>$2.00</Text>
                </View>
                <View
                    className="border my-3  border-[#caccd1]"    
                />
                <View className="flex-row justify-between">
                        <Text className="font-bold text-xl">Total</Text>
                        <Text   className="font-bold text-xl">$20.00</Text>
                </View>
                <TouchableOpacity className="items-center bg-white p-3 rounded-xl mt-4" onPress={()=>navigation.navigate("Checkout")}>
                        <Text className="text-black font-bold">Proceed To Checkout</Text>
                </TouchableOpacity>
                </View>
        </View>
    )
}