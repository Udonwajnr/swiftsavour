import { Text,View,Platform,Linking, Button } from "react-native"

export default function MapScreen(){
    const openGoogleMap = () => {
        const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
        const latLng = `${4.868680631309251},${ 6.989942368161841}`;
        const label = 'Palkeper';
        const url = Platform.select({
          ios: `${scheme}${label}@${latLng}`,
          android: `${scheme}${latLng}(${label})`,
        });
        Linking.openURL(url);
      };
    return(
        <Button title="View Map" onPress={()=>openGoogleMap()}/>
    )
}