import { Text, View,Image, TouchableOpacity } from "react-native"
import { Plus } from "react-native-feather"
import { useNavigation } from "@react-navigation/native"
export default function MealCard(){
    const navigation = useNavigation()
    return(
        <TouchableOpacity onPress={()=>navigation.navigate('Detail')}>
            <View className="rounded-lg w-40 mb-3 ">
                {/* Meal image */}
                <View className="h-40 rounded-lg relative">
                    <Image source={require("../../assets/Images/ham.jpg")} className=" rounded-lg w-full h-full"/>
                </View>
                {/* meal text */}
                {/* change the dollars to naira */}
                <View className="flex-row justify-between items-center p-1">
                    <View>
                        <Text className="capitalize text-black font-semibold">Vegan Burger</Text>
                        <Text className="capitalize text-black font-semibold mt-1">$ 1.40</Text>
                    </View>

                    <View >
                        <TouchableOpacity className=" border-[#afea0d] border-2 rounded-full ">
                            <Plus color={'black'} width={19} height={19}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}