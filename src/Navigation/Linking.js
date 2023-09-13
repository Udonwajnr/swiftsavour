const config={
    screens:{
        Home:{
            path:'home'   
        },
        ForgotPassword:{
            path:'forgetpassword/:id',
            parse:{
                id:(id)=>`${id}`
            }
        },
        SetNewPassword:{
            path:'setnewpassword/:id',
            parse:{
                id:(id)=>`${id}`
            }
        },
        Signup:{
            path:'signup'
        }
    }
}
const linking = {
    prefixes: ['swiftsavor://app'],
    config

}

export default linking