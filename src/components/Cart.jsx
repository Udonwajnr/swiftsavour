import { View,Text, TouchableOpacity } from "react-native"
import { ShoppingBag,ShoppingCart, } from "react-native-feather"
import { useNavigation } from "@react-navigation/native"
export default function Cart(){
    const navigation = useNavigation()
    return(
        <View className="absolute bottom-0 bg-[#1f1f1f] w-full flex-row p-4 justify-between">
            <ShoppingCart color={'white'} width={40} height={40}/>
            <View>
                <Text className="text-white font-bold">
                    2 Items
                </Text>
                <Text>Delivery order</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
                <Text className="font-bold text-xl text-black bg-[#afea0d] rounded-lg px-4 py-2">Checkout</Text>
            </TouchableOpacity>
        </View>
    )
}