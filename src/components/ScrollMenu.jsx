import React from 'react'
import { Text,View,ScrollView,Image, TouchableOpacity } from 'react-native'

const ScrollMenu = () => {
  return (
    <View className="mx-4 ">
    <ScrollView
    horizontal={true}
    className="flex gap-x-1.5">
        <TouchableOpacity>
            <View className="flex-col gap-y-3 justify-center items-center  bg-white rounded-xl p-4 ">
                <Image className="w-7 h-7" source={require('../../assets/Images/soup.png')}/>
                <Text className="text-[#c1c4ca]">Soup</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity>
            <View className="flex-col gap-y-3 justify-center items-center  bg-white rounded-xl p-4 ">
                <Image className="w-7 h-7" source={require('../../assets/Images/rice.png')}/>
                <Text className="text-[#c1c4ca]">Rice</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity>
            <View className="flex-col gap-y-3 justify-center items-center  bg-white rounded-xl p-4 ">
                <Image className="w-7 h-7" source={require('../../assets/Images/pizza.png')}/>
                <Text className="text-[#c1c4ca]">Pizza</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity>
            <View className="flex-col gap-y-3 justify-center items-center  bg-white rounded-xl p-4 ">
                <Image className="w-7 h-7" source={require('../../assets/Images/noodles.png')}/>
                <Text className="text-[#c1c4ca]">Noodels</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View className="flex-col gap-y-3 justify-center items-center  bg-white rounded-xl p-4 ">
                <Image className="w-7 h-7" source={require('../../assets/Images/burger.png')}/>
                <Text className="text-[#c1c4ca]">Burger</Text>
            </View>
        </TouchableOpacity>
       
       <TouchableOpacity>
            <View className="flex-col gap-y-3 justify-center items-center  bg-white rounded-xl p-4 ">
                <Image className="w-7 h-7" source={require('../../assets/Images/bread.png')}/>
                <Text className="text-[#c1c4ca]">Bread</Text>
            </View>
       </TouchableOpacity>

        <TouchableOpacity>
            <View className="flex-col gap-y-3 justify-center items-center  bg-white rounded-xl p-4 ">
                <Image className="w-7 h-7" source={require('../../assets/Images/coke.png')}/>
                <Text className="text-[#c1c4ca]">Drinks</Text>
            </View>    
        </TouchableOpacity>
        
    </ScrollView>

    </View>
  )
}

export default ScrollMenu