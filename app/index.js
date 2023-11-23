import React, {useState} from 'react';
import logo from '../pics/logo.png';
import {StyleSheet , TouchableOpacity , View, Text, Image, SafeAreaView, TextInput, TouchableWithoutFeedback,
Keyboard,} from 'react-native';
import {Link} from 'expo-router';


const Login = ()=> {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    return (
        <SafeAreaView style={styles.container} options={{headerShown:false}}>

           
                <View style={styles.top}>
                    <Image source={logo} style={styles.img}/>
                </View>
                <Text style={{marginTop:10,textAlign:"center",fontSize:30,fontWeight:'bold',fontSize:40}}>Login</Text>

                <View style={styles.formbig}>
                    <TextInput style={styles.form}/>
                    <TextInput secureTextEntry={true} style={styles.form2}/>
                </View>
                
                <TouchableOpacity style={styles.button}> 
                    <View >
                        <Link href="/Home" style={{textAlign:"center",justifyContent:"center"}}>LogIn</Link>
                    </View>
                </TouchableOpacity>

                <View style={styles.signup}>
                    <Text>Dont have an account </Text>
                    <Link style={{fontSize:20}}href="/Register">Signup</Link>
                </View>

      

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    logo:{
        flex:1,
        alignItems:"center",
    },
    
    img:{
        height:150,
        width:150,
        alignSelf:"center",
        marginTop:100
    },
    form:{
        // backgroundColor:"green",
        marginTop:40,
        padding:10,
        width:200,
        borderWidth: 1,
    },
    form2:{
        // backgroundColor:"green",
        marginTop:40,
        padding:10,
        width:200,
        borderWidth: 1,
        
    },
    button:{
        alignSelf:"center",
        justifyContent:"center",
        marginTop:30,
        width:150,
        height:30,
        borderRadius:15,
        backgroundColor:"green"
    },
    formbig:{
        alignItems:"center"
    },
    signup:{
        marginTop:30,
        alignSelf:"center",
        flexDirection:"row"
    }
    


})

export default Login;
