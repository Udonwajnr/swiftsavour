import { View,Text, TouchableOpacity } from "react-native"
import { ShoppingBag,ShoppingCart, } from "react-native-feather"
import { useNavigation } from "@react-navigation/native"
import { AuthContext } from "../contextApi/context"
import { useContext } from "react"
export default function Cart(){
    const navigation = useNavigation()
    const {cartItems,getCartItemsTotal} = useContext(AuthContext)
    return(
        <>
        {
            cartItems.length >0 &&
            <View className="absolute bottom-0 bg-[#1f1f1f] w-full flex-row p-4 justify-between">
                <ShoppingCart color={'white'} width={40} height={40}/>
                <View>
                    <Text className="text-white font-bold">
                        {getCartItemsTotal()} Items
                    </Text>
                    <Text>Delivery order</Text>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
                    <Text className="font-bold text-black bg-[#afea0d] rounded-lg px-4 py-2">Proceed to Cart</Text>
                </TouchableOpacity>
            </View>
        }
        </>
    )
}