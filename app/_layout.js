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
        </Stack>
    )
}

const styles = StyleSheet.create({
   
})

export default layout;