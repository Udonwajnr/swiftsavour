import { Text,SafeAreaView,ScrollView } from "react-native"
import PayWithFlutterwave from "flutterwave-react-native"
import { AuthContext } from "../contextApi/context"
import { useContext } from "react"

export default function Payments({data}){    
    const {cartItems,getCartTotal,deliveryFee} = useContext(AuthContext)
    let total = getCartTotal()+ deliveryFee
    const generateRef = (length) => {
        var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
        var b = [];  
        for (var i=0; i<length; i++) {
            var j = (Math.random() * (a.length-1)).toFixed(0);
            b[i] = a[j];
        }
        return b.join("");
    }
     let RedirectParams= {
        status: 'successful' || 'cancelled',
        transaction_id: '',
        tx_ref: '',
      }

    const handleOnRedirect = async (RedirectParams) => {
        const [payment,setPayment] = useState({})

        // console.log(RedirectParams)
        setPayment(RedirectParams)    
            const mutations = [{
                create:{
                  _type: 'order',
                  fullName:data.fullName,
                  location:data.location,
                  phone:data.phoneNumber,
                  email:data.email,
                  dishes:cartItems,
                  status:true
                }
            }]
            await  fetch(`https://${"i0yfg9os"}.api.sanity.io/v2021-06-07/data/mutate/${"production"}`, {
              method: 'post',
              headers: {
                  'Content-type': 'application/json',
                  Authorization: `Bearer ${"skjmUNrgRTebayY73CTllJTQeMxp9u7UEmbeMmwxPv3xdBR1bme9egeGXjOCXSOQa9xtiGr3XSCFKDa3k3aloUJvGVkgX1yJpYUdY2pY4Nqj5KwtHaImvOgtPfA9XSOAKWOY8ZMxc2TyYX2DXpR1uUvxvuGkaJvUnWYUM3phshWVbkQz59Lw"}`
              },
              body: JSON.stringify({mutations})
          })
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.error(error))
        
    }

    return(
        <SafeAreaView>
            <ScrollView>

            <PayWithFlutterwave
                            onRedirect={handleOnRedirect} 
                            options={{
                                tx_ref: generateRef(11),
                                authorization:'FLWPUBK_TEST-39c40e452700c976b52c1140dd888f54-X',
                                customer: {
                                    email: email
                                },
                                amount: total,
                                currency: 'NGN',
                                payment_options: 'card'
                            }}
                        />
            </ScrollView>
         </SafeAreaView>
    )
}