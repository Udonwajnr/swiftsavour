import React from 'react'
import { Text,SafeAreaView,View, ScrollView,TouchableOpacity } from 'react-native'
import { Bell } from 'react-native-feather'
import SearchInputBar from '../components/SearchInputBar'
import ScrollMenu from '../components/ScrollMenu'
import Restaurant from '../components/Restaurant'
import { useContext } from 'react'
import { AuthContext } from '../contextApi/context'

const HomeScreen = ({navigation}) => {
  const {logout} = useContext(AuthContext)
  return (
    <SafeAreaView className="flex-1 bg-[#f7f7f7]">
      <ScrollView className="relative">
        {/* <SuccessFullPage/> */}
        <View className="bg-[#312525] h-32 px-4">
            <View className="flex-row justify-between mt-5">
                <View className="">
                  <Text className="text-[#9d9fa6]">Deliver to</Text>
                  <Text className="text-white font-bold text-xl">Surakarat,ID</Text>
                </View>
                
                <View className="">
                  <TouchableOpacity onPress={()=>logout()}>
                   <Bell color={"white"}/>
                  </TouchableOpacity>
                </View>        
            </View>
        </View>
        {/*search bar  */}      
          <SearchInputBar />

        {/* scroll menu */}
        <ScrollMenu/>

        {/* restaurant */}
        <Restaurant navigation={navigation}/>

      </ScrollView>

    </SafeAreaView>
  )
}

export default HomeScreen