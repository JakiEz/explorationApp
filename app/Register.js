import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Ionicons } from "@expo/vector-icons";
import CheckBox from "expo-checkbox";
import Buttonn from "../Buttonn";
import { Pressable } from "react-native";
import { Link,router } from "expo-router";

export default function Register() {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
       <Pressable style={{marginLeft:15,marginTop:15,width:30}}onPress={()=> router.back()}>
        <Ionicons name="chevron-back" size={30} color="white" />
      </Pressable>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVerticalP: 22 }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              marginVertical: 12,
              color: "white",
              marginLeft:35,
              marginTop:50
            }}
          >
            Create Account
          </Text>
          
        </View>

        {/*email */}
        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              marginVertical: 15,
              marginTop: 30,
              alignSelf:"center",
              marginRight:180,
              color: "white"
            }}
          >
            Email address
          </Text>

          <View
            style={{
              width: "80%",
              height: 62,
              borderColor: '#3CF1ED',
              borderWidth: 1,
              borderRadius: 15,
              alignItems: "center",
              alignSelf:"center",
              justifyContent: "center",
              padding: 22,
            }}
          >
            <TextInput
              placeholder="Enter your email address"
              placeholderTextColor='grey'
              keyboardType="email-address"
              style={{
                width: "100%",
                color:'white'
              }}
            />
          </View>
        </View>

        {/* phonenum */}

        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              marginVertical: 15,
              marginTop: 20,
              alignSelf:"center",
              marginRight:180,
              color: "white"
            }}
          >
            Mobile Number
          </Text>

          <View
            style={{
              width: "80%",
              height: 62,
              borderColor: '#3CF1ED',
              borderWidth: 1,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
              borderRadius: 15,
              alignSelf:"center",
              padding: 22,
            }}
          >
            <TextInput
              placeholder="+66"
              placeholderTextColor={"grey"}
              keyboardType="numeric"
              style={{
                width: "15%",
                borderRightWidth: 1,
                borderLeftColor: Colors.grey,
                height: "385%",
                borderColor:'#3CF1ED '
              }}
            />
            <TextInput
              placeholder="Enter your phone number"
              placeholderTextColor={"grey"}
              keyboardType="numeric"
              style={{
                width: "80%",
              }}
            />
          </View>
        </View>

        {/* Password */}
        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              marginVertical: 15,
              marginTop: 20,
              alignSelf:"center",
              marginRight:210,
              color:'white'
            }}
          >
            Password
          </Text>

          <View
            style={{
              width: "80%",
              height: 62,
              borderColor: '#3CF1ED',
              borderWidth: 1,
              borderRadius: 15,
              alignItems: "center",
              justifyContent: "center",
              padding: 22,
              alignSelf:"center",
            }}
          >
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor='grey'
              secureTextEntry={isPasswordShown}
              style={{
                width: "100%",
              }}
            />
            <TouchableOpacity
              onPress={() => setIsPasswordShown(!isPasswordShown)}
              style={{
                position: "absolute",
                right: 12,
              }}
            >
              {isPasswordShown == true ? (
                <Ionicons name="eye-off" size={24} color={'white'} />
              ) : (
                <Ionicons name="eye" size={24} color={'white'} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginVertical: 6,
            justifyContent:"center",
            marginTop:30,
            // color:'white',
            marginBottom:30
          }}
        >
          <CheckBox
            style={{ marginRight: 8 }}
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? Colors.prinary : undefined}
          />

          <Text style={{color:'grey',alignSelf:"center",justifyContent:"center"}}>I agree to the terms and conditions</Text>
        </View>
        <Buttonn
          title="Sign Up"
          style={{paddingBottom:10,
            width:90,
            height:50,
            alignSelf:"center",
            borderRadius:35
            

          }}
        />

        
       
       
        
      </View>
    </SafeAreaView>
  );
}
