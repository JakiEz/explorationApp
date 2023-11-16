import React from 'react';
import logo from '../pics/logo.png';
import {StyleSheet, TouchableOpacity,View, Text, Image, SafeAreaView,TextInput} from 'react-native';

function Home() {
  return (
    <SafeAreaView style={styles.container} options={{headerShown:false}}>
        <View style={styles.top}>
            <Image source={logo} style={styles.img}/>
        </View>
        <Text style={{marginTop:70,textAlign:"center",fontSize:30,fontWeight:'bold',fontSize:40}}>Login</Text>

        <TextInput style={styles.form}/>
        <TextInput style={styles.form2}/>
        
        <TouchableOpacity onPress={()}> 
            <View style={styles.button}>
                <Text style={{textAlign:"center",justifyContent:"center"}}>LogIn</Text>
            </View>
        </TouchableOpacity>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    top:{
        
    },   

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
        width:400,
        height:30
    },
    form2:{
        backgroundColor:"green",
        marginTop:40,
        width:400,
        height:30
    },
    button:{
        
        alignSelf:"center",
        width:300,
        height:300,
        backgroundColor:"blue"
    }
})

export default Home