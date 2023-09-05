import { View,Image,Text, TouchableOpacity } from "react-native"
import { Plus,Minus } from "react-native-feather"
import { AuthContext } from "../contextApi/context"
import { useContext } from "react"
import { urlFor } from "../../sanity/sanity"

export default function CartCard(){
    const {cartItems,addToCart,removeFromCart,selectCartItemById} = useContext(AuthContext)
    console.log(cartItems)
    
    return(
        <>
        {
            cartItems.map((cartItem, index)=>{
                return(
                    <View key={index} className=" h-24 flex-row bg-white my-3 rounded-xl">
                        <View className="w-3/12">
                            <Image source={{uri:urlFor(cartItem?.image)?.url()}} className="w-full h-full rounded-2xl"/>
                        </View>
                        {/*  */}
                        <View className="w-9/12">
                            <View className=" p-2 flex-row items-center justify-between">
                                <View>
                                    <Text className="text-black text-base">{cartItem.name}</Text>
                                    <Text className="text-[#caccd1]">{cartItem?.restaurant?.name}</Text>
                                </View>
                                <View className="mr-">
                                    <Text className="text-black font-bold">x{cartItem.quantity}</Text>
                                </View>
                            </View>
                            <View className="flex-row justify-between px-3">
                                <Text className="text-black text-base font-bold">&#8358; {cartItem.price}</Text>
                                <View className="flex-row items-center gap-x-2" >
                                    <TouchableOpacity className=" rounded-full" onPress={()=>addToCart(cartItem)}>
                                        <Plus color={"black"} width={19} height={19}/>
                                    </TouchableOpacity>
                                        <Text className="text-black text-center text-base font-bold">{cartItem.quantity}</Text>
                                    <TouchableOpacity className="rounded-full" onPress={()=>removeFromCart(cartItem)}>
                                        <Minus color={"black"} width={19} height={19}/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                )
            })
        }
        
        </>
    )
}