import { TouchableOpacity,View,Text } from "react-native";

export default function TotalProduct(){
    return(
        <View className="absolute bottom-3 w-full px-3 ">
            <View className="bg-black z-30 w-full p-2.5 rounded-lg">
                <View className="flex-row justify-between">
                        <Text>Subtotal</Text>
                        <Text>$18.00</Text>
                </View>
                <View className="flex-row justify-between mt-2">
                        <Text>Delivery Fee</Text>
                        <Text>$2.00</Text>
                </View>
                <View className="flex-row justify-between mt-2">
                        <Text className="font-bold text-xl">Total</Text>
                        <Text   className="font-bold text-xl">$20.00</Text>
                </View>
                <TouchableOpacity className="items-center bg-white p-3 rounded-xl mt-4">
                        <Text className="text-black">Place Order</Text>
                </TouchableOpacity>
                </View>
        </View>
    )
}