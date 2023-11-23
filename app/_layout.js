import {Stack} from "expo-router";
import Header from "../App";

const layout = ()=>{
    return (
        <Stack>
            <Stack.Screen name="Register" options={{headerShown:false}}/>
            <Stack.Screen name="Login" options={{headerShown:false}}/>
            <Stack.Screen name="Home" options={{headerShown:false}}/>
        </Stack>
    )
}

export default layout;