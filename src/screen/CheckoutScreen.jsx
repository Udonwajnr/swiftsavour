import { Text, TextInput, View, ScrollView,SafeAreaView,Button } from "react-native"
import { useNavigation } from "@react-navigation/native"

export default function CheckoutScreen(){
    const navigation = useNavigation()
    return(
        <SafeAreaView className="flex-1">
            <ScrollView>
                <View className="flex-col mx-3 mt-3">
                    <View>
                        <Text className="text-black text-lg">Name</Text>
                        <TextInput placeholder="John Doe"  onChangeText={''} placeholderTextColor={"#a3a3a3"} inputMode="text" autoComplete="name" style={{height:40,borderWidth:1,marginVertical:6,color:'black',paddingHorizontal:10}}/>
                    </View>

                    <View>
                        <Text className="text-black text-lg">Email</Text>
                        <TextInput autoCapitalize="none"  placeholder="johndoe@gmail.com" value={''} inputMode="email" onChangeText={''} placeholderTextColor={"#a3a3a3"} autoComplete="email" style={{height:40,borderWidth:1,marginVertical:6,color:'black',paddingHorizontal:10}} />
                    </View>

                    <View>
                        <Text className="text-black text-lg">Address</Text>
                        <Text className="text-[10px] italic text-black">Location Within Uyo</Text>
                        <TextInput autoCapitalize="none"  placeholder="52 Osong Ama Estate Road" inputMode="text"  onChangeText={''} placeholderTextColor={"#a3a3a3"} autoComplete="address-line1" style={{height:40,borderWidth:1,marginVertical:6,color:'black',paddingHorizontal:10}}/>
                    </View>
                    <View>
                        <Text className="text-black text-lg">Amount</Text>
                        <TextInput autoCapitalize="none"  placeholder="1000" inputMode="text"  onChangeText={''} placeholderTextColor={"#a3a3a3"} style={{height:40,borderWidth:1,marginVertical:6,color:'black',paddingHorizontal:10}}/>
                    </View>

                    <Button title="Pay Now" onPress={()=>navigation.navigate('Map')}/>
                </View>
                {/* <Button title="Get Current location" /> */}
                
                
            </ScrollView>
        </SafeAreaView>
        )
}