import { View,Image,Text, TouchableOpacity } from "react-native"
import { Plus,Minus } from "react-native-feather"

export default function CartCard(){
    return(
        <View className=" h-28 flex-row bg-white my-3 rounded-xl">
            <View className="w-3/12">
                <Image source={require('../../assets/Images/pizza.jpg')} className="w-full h-full rounded-2xl"/>
            </View>
            {/*  */}
            <View className="w-9/12">
                <View className="p-2">
                    <Text className="text-black text-xl">Vegan Burger</Text>
                    <Text className="text-[#caccd1]">Crunchies</Text>
                </View>
                <View className="flex-row justify-between px-3">
                    <Text className="text-black text-xl font-bold">$9.50</Text>
                    <View className="flex-row items-center gap-x-2">
                        <TouchableOpacity className=" rounded-full" >
                            <Plus color={"black"} width={20} height={20}/>
                        </TouchableOpacity>
                            <Text className="text-black text-center text-xl font-bold">1</Text>
                        <TouchableOpacity className="rounded-full">
                            <Minus color={"black"} width={20} height={20}/>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </View>
    )
}