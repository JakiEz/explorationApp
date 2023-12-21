import {Stack} from "expo-router";
import Header from "../App";
import {StyleSheet, View} from  'react-native';

const layout = ()=>{
    return (
      
        
            <Stack>
                <Stack.Screen name="Register" options={{headerShown:false}}/>
                <Stack.Screen name="Login" options={{headerShown:false}}/>
                <Stack.Screen name="Home" options={{headerShown:false}}/>
                <Stack.Screen name="Profile" options={{headerShown:false}}/>
                <Stack.Screen name="[id]" options={{headerShown:false}}/>
            </Stack>

        
    )
}

const styles = StyleSheet.create({
    navBar: {
        position: 'absolute',
        top: 20,
        left: 0,
        right: 0,
        height: 50,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
    },
    container: {
        flex: 1,
    },
})

export default layout;