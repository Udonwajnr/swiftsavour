import { TouchableOpacity,Text } from "react-native"
import { ChevronLeft } from "react-native-feather"
import { useNavigation } from "@react-navigation/native"

export default function BackArrow(){
 const navigation = useNavigation()
    return(
        <TouchableOpacity className="absolute z-40 bg-opacity-rgba p-2 rounded-full top-7 left-3" onPress={()=>navigation.goBack()}>
            <ChevronLeft color={"black"} width={27} height={27}/>
        </TouchableOpacity>
    )
}