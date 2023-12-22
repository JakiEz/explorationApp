import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Button,
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Ionicons } from "@expo/vector-icons";
import CheckBox from "expo-checkbox";
import Buttonn from "../Buttonn";
import { Pressable } from "react-native";
import { Link, router,Redirect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function Register() {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const apiUrl = "http://172.20.10.3:3000/user/create";

  const handleRegister = async() => {
    const data = {
      email: email,
      username: username,
      password: password,
      phone: phone,
    };

    console.log(data.email, data.username, data.password, data.phone);

    try {
      const response = await axios.post(apiUrl, data);
      if(response.status === 201 || response.status === 200){
        // response.send(data);
        console.log(data);
        router.replace('/Login');
      }
      else{
        console.warn(response.status);
        alert("Registration failed with status code: " + response.status);
      }
      
    } catch (error){
      console.log(error);
      alert("An error occurred during registration: " + error.message);
    }
};

  return (
    <KeyboardAvoidingView
      style={{ flex: 1,
        backgroundColor:'#282828'}}
      enabled
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
    <SafeAreaView style={{ flex: 1, backgroundColor: "#282828" }}>
      <ScrollView>
        <Pressable
          style={{ marginLeft: 15, marginTop: 15, width: 30 }}
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back" size={30} color="white" />
        </Pressable>
        <View style={{ flex: 1, marginHorizontal: 22 }}>
          <View style={{ margin: 30, marginBottom: 20 }}>
            <Text
              style={{
                fontSize: 28,
                fontWeight: "bold",
                marginVertical: 12,
                color: "white",
              }}
            >
              Create Account
            </Text>
          </View>

          {/*email */}
          <View style={{ marginBottom: 0 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "400",
                marginVertical: 15,
                marginTop: 30,
                marginLeft: 35,
                color: "white",
              }}
            >
              Email address
            </Text>

            <View
              style={{
                width: "80%",
                height: 62,
                borderColor: "#3CF1ED",
                borderWidth: 1,
                borderRadius: 15,
                alignItems: "center",
                alignSelf: "center",
                justifyContent: "center",
                padding: 22,
                backgroundColor: "#282828",
              }}
            >
              <TextInput
                placeholder="Enter your email address"
                placeholderTextColor={"grey"}
                keyboardType="email-address"
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={{
                  width: "100%",
                  color: "white",
                }}
              />
            </View>
          </View>

          <View style={{ marginBottom: 12 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "400",
                marginVertical: 15,
                marginTop: 30,
                marginLeft: 35,
                color: "white",
              }}
            >
              Username
            </Text>

            <View
              style={{
                width: "80%",
                height: 62,
                borderColor: "#3CF1ED",
                borderWidth: 1,
                borderRadius: 15,
                alignItems: "center",
                alignSelf: "center",
                justifyContent: "center",
                padding: 22,
                backgroundColor: "#282828",
              }}
            >
              <TextInput
                placeholder="Enter your username"
                placeholderTextColor={"grey"}
                // keyboardType="email-address"
                value={username}
                onChangeText={(text) => setUsername(text)}
                style={{
                  width: "100%",
                  color: "white",
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
                color: "white",
                marginLeft: 38,
              }}
            >
              Mobile Number
            </Text>

            <View
              style={{
                width: "80%",
                height: 62,
                borderColor: "#3CF1ED",
                borderWidth: 1,
                borderRadius: 8,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                borderRadius: 15,
                alignSelf: "center",
                padding: 22,
              
                backgroundColor: "#282828",
              }}
            >
              <TextInput
                placeholder="+66"
                placeholderTextColor={"grey"}
                keyboardType="numeric"
                style={{
                  color:'white',
                  width: "15%",
                  borderRightWidth: 1,
                  borderLeftColor: "#282828",
                  paddingRight: 10,
                  height: "385%",
                  borderColor: "#3CF1ED ",
                }}
              />
              <TextInput
                placeholder="Enter your phone number"
                placeholderTextColor={"grey"}
                value={phone}
                onChangeText={(text) => setPhone(text)}
                keyboardType="numeric"
                style={{
                  width: "80%",
                  color:"white"
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
                color: "white",
                marginLeft: 40,
              }}
            >
              Password
            </Text>

            <View
              style={{
                width: "80%",
                height: 62,
                borderColor: "#3CF1ED",
                borderWidth: 1,
                borderRadius: 18,
                alignSelf: "center",
                justifyContent: "center",
                padding: 22,
                color:"white"
              }}
            >
              <TextInput
                placeholder="Enter your password"
                placeholderTextColor={"grey"}
                secureTextEntry={isPasswordShown}
                value={password}
                onChangeText={(text) => setPassword(text)}
                style={{
                  color:"white",
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
                  <Ionicons name="eye-off" size={24} color={"white"} />
                ) : (
                  <Ionicons name="eye" size={24} color={"white"} />
                )}
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginVertical: 6,
              justifyContent: "center",
              marginTop: 30,
              // color:'white',
              marginBottom: 30,
            }}
          >
            <CheckBox
              style={{ marginRight: 8 }}
              value={isChecked}
              onValueChange={setIsChecked}
              color={isChecked ? Colors.prinary : undefined}
            />

            <Text style={{ color: "white" }}>
              I agree to the terms and conditions
            </Text>
          </View>
          <Buttonn
            title="Sign Up"
            onPress={handleRegister}
            style={{
              paddingBottom: 10,
              width: 90,
              height: 50,
              marginBottom:50,
              alignSelf: "center",
              borderRadius: 35,
              borderWidth: 0,
              backgroundColor: "#3CF1ED",
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
