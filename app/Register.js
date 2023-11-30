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
import Buttonn from "../../Components/Buttonn";
import { Pressable } from "react-native";
import { Link,router } from "expo-router";

export default function Register() {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
       <Pressable style={{marginLeft:15,marginTop:15,width:30}}onPress={()=> router.replace("/Login")}>
        <Ionicons name="chevron-back" size={30} color="black" />
      </Pressable>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVerticalP: 22 }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              marginVertical: 12,
              color: Colors.black,
            }}
          >
            Create Account
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: Colors.black,
            }}
          >
            Connect with your friend today!
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
            }}
          >
            Email address
          </Text>

          <View
            style={{
              width: "100%",
              height: 62,
              borderColor: Colors.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              padding: 22,
            }}
          >
            <TextInput
              placeholder="Enter your email address"
              placeholderTextColor={Colors.black}
              keyboardType="email-address"
              style={{
                width: "100%",
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
            }}
          >
            Mobile Number
          </Text>

          <View
            style={{
              width: "100%",
              height: 62,
              borderColor: Colors.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 22,
            }}
          >
            <TextInput
              placeholder="+66"
              placeholderTextColor={Colors.black}
              keyboardType="numeric"
              style={{
                width: "15%",
                borderRightWidth: 1,
                borderLeftColor: Colors.grey,
                height: "385%",
              }}
            />
            <TextInput
              placeholder="Enter your phone number"
              placeholderTextColor={Colors.black}
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
            }}
          >
            Password
          </Text>

          <View
            style={{
              width: "100%",
              height: 62,
              borderColor: Colors.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              padding: 22,
            }}
          >
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor={Colors.black}
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
                <Ionicons name="eye-off" size={24} color={Colors.black} />
              ) : (
                <Ionicons name="eye" size={24} color={Colors.black} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginVertical: 6,
          }}
        >
          <CheckBox
            style={{ marginRight: 8 }}
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? Colors.prinary : undefined}
          />

          <Text>I agree to the terms and conditions</Text>
        </View>
        <Buttonn
          title="Sign Up"
          filled
          style={{
            marginTop: 18,
            marginBottom: 4,
          }}
        />

        {/* signup */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 20,
          }}
        >
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: "#B0B0B0",
              marginHorizontal: 10,
            }}
          />
          <Text style={{ fontSize: 14 }}>Or Sign up with</Text>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: "#B0B0B0",
              marginHorizontal: 10,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => console.log("Pressed")}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              height: 52,
              borderWidth: 1,
              borderColor: "#B0B0B0",
              marginRight: 4,
              borderRadius: 10,
            }}
          >
            <Image
              source={require("../assets/facebook.png")}
              style={{
                height: 36,
                width: 36,
                marginRight: 8,
              }}
              resizeMode="contain"
            />

            <Text>Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => console.log("Pressed")}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              height: 52,
              borderWidth: 1,
              borderColor: "#B0B0B0",
              marginRight: 4,
              borderRadius: 10,
            }}
          >
            <Image
              source={require("../assets/google.png")}
              style={{
                height: 36,
                width: 36,
                marginRight: 8,
              }}
              resizeMode="contain"
            />

            <Text>Google</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 22,
          }}
        >
          <Text style={{ fontSize: 16, color: Colors.black }}>
            Already have an account
          </Text>
          <Link href="/index.js">
            <Text
              style={{
                fontSize: 16,
                color: Colors.primary,
                fontWeight: "bold",
                marginLeft: 6,
              }}
            >
              {" "}
              Login
            </Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
