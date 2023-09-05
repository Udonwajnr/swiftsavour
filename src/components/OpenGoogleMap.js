import { Text,View,Platform,Linking, Button } from "react-native"

 export const openGoogleMap = (latitude,longitude) => {
    const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
    const latLng = `${latitude},${ longitude}`;
    const label = 'Palkeper';
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });
    Linking.openURL(url);
  };