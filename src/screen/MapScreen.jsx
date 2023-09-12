import { Text,View,Platform,Linking, Button,SafeAreaView,StyleSheet,PermissionsAndroid } from "react-native"
import MapView,{Marker} from "react-native-maps"
import {} from "react-native-maps"
import { AuthContext } from "../contextApi/context"
import { useContext } from "react"
import Geolocation from "react-native-geolocation-service"
import { useState } from "react"
import MapViewDirections from "react-native-maps-directions"

export default function MapScreen(){
    const {cartItems,getCartTotal,deliveryFee,setPaymentBoolean,paymentBoolean} = useContext(AuthContext)
    const [location, setLocation] = useState(false);

    const requestLocationPermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Geolocation Permission',
              message: 'Can we access your location?',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          console.log('granted', granted);
          if (granted === 'granted') {
            console.log('You can use Geolocation');
            return true;
          } else {
            console.log('You cannot use Geolocation');
            return false;
          }
        } catch (err) {
          return false;
        }
      };
    
      const getLocation = () => {
        const result = requestLocationPermission();
        result.then(res => {
          console.log('res is:', res);
          if (res) {
            Geolocation.getCurrentPosition(
              position => {
                console.log(position);
                setLocation(position);
              },
              error => {
                // See error code charts below.
                console.log(error.code, error.message);
                setLocation(false);
              },
              {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
            );
          }
        });
        console.log(location);
      };

    return(
        <SafeAreaView className="flex-1">
            <View style={styles.container}>
            <MapView
                style={styles.map}
                //specify our coordinates.
                initialRegion={{
                    latitude: 5.0377,
                    longitude: 7.9128,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
        }}
      >
        {
            cartItems.map((items,index)=>{
                return(
                    <View key={index}>
                        <Marker
                        coordinate={{
                            latitude:items?.restaurant?.latitude,
                            longitude: items?.restaurant?.longitude,
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01,
                                    }}
                        title={items?.restaurant?.name}
                        description={items.name}
                                />
                    
                    <MapViewDirections
                            origin={items?.restaurant?.address}
                            destination={'Ikot akpan abia'}
                            apikey={"AIzaSyDrC9M7xXlMLV4w1VEdGHRGJFnVoGA4FK0"}
                            strokeWidth={3}
                            strokeColor="hotpink"
                        />
                    </View>
                )
            })
        }      
                 
      </MapView>
            </View>
            <Button title="Get Location" onPress={getLocation} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      flex: 1, //the container will fill the whole screen.
      justifyContent: "flex-end",
      alignItems: "center",
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });