import { TextInput,Text,View } from "react-native"
import { Search } from "react-native-feather"
export default function SearchInputBar(){
    return (
        <View className="flex justify-center items-center relative bottom-7 flex-row">
            <View className="h-16 flex-row justify-center  bg-white mx-4 rounded-xl p-2">
                <View className="bg-white px-2 justify-center  items-center h-full w-1/12 rounded-l-sm">
                 <Search color={'#bbbec5'}/>
                </View>
                <View className=" w-11/12">
                    <TextInput className="border h-full  px-4 border-white" placeholder="What are you craving?" placeholderTextColor={"#bbbec5"}/>
                </View>
            </View>
        </View>
    )
}