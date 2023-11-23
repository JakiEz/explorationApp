import React, {useState} from 'react';
import logo from '../pics/logo.png';
import {StyleSheet , TouchableOpacity , View, Text, Image, SafeAreaView, TextInput} from 'react-native';
import {Link} from 'expo-router';


const Login = ()=> {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView style={styles.container} options={{headerShown:false}}>
            <View style={styles.top}>
                <Image source={logo} style={styles.img}/>
            </View>
            <Text style={{marginTop:70,textAlign:"center",fontSize:30,fontWeight:'bold',fontSize:40}}>Login</Text>

            <View style={styles.formbig}>
                <TextInput style={styles.form}/>
                <TextInput style={styles.form2}/>
            </View>
            
            <TouchableOpacity > 
                <View style={styles.button}>
                    <Text style={{textAlign:"center",justifyContent:"center"}}>LogIn</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.signup}>
                <Text>Dont have an account </Text>
                <Link href="/Register">signup</Link>

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
        backgroundColor:"green",
        marginTop:40,
        padding:10,
        width:200,
    },
    form2:{
        backgroundColor:"green",
        marginTop:40,
        padding:10,
        width:200,
        
    },
    button:{
        alignSelf:"center",
        marginTop:50,
        width:150,
        height:30,
        borderRadius:15,
        backgroundColor:"blue"
    },
    formbig:{
        alignItems:"center"
    },
    signup:{
        
        flexDirection:"row"
    }
    


})

export default Login;
