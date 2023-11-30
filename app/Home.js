import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useFonts } from "expo-font";

const DATA = [
  {
    id: "1234",
    title: "Jackie",
  },
  {
    id: "12345",
    title: "Game",
  },
  {
    id: "123456",
    title: "Phone",
  },
  {
    id: "123467",
    title: "Pro",
  },
];

// const back = () => {
//   console.log("back");
//   <link href="/Login.js"></link>
// }

const Home = () => {
  // const [fontsLoaded] = useFonts({
  //   'Montserrat-Bold': require('../asset/fonts/Montserrat-Bold.ttf'),
  //   'Montserrat-Regular': require('../asset/fonts/Montserrat-Regular.ttf'),
  // })

  return (
    <SafeAreaView>
      <View style={styles.p}>
        <Text style={{ fontSize: 30, fontFamily: "Montserrat" }}>See what</Text>
        <Text style={{ fontSize: 30 }}>your friends are doing</Text>
      </View>

      {/* <View style={{width:"100%", marginBottom:20}}>
        <FlatList
          horizontal
          data={DATA}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={styles.cat}>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text style={{ textAlign: "center" }}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View> */}

      <FlatList
        style={{height:600}}
        showsHorizontalScrollIndicator={false}
        vertical
        data={DATA}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.friends}>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={{ textAlign: "center" }}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  p: {
    width: 500,
    height: 100,
    // backgroundColor: "blue",
    margin: 30,
    
  },

  friends: {
    marginLeft:0,
    borderRadius: 15,
    marginBottom: 10,
    
    alignSelf: "center",
    height: 200,
    width: 380,
    backgroundColor: "green",
  },

  cat: {
    width:8,                                                                                                              
    height:20,
    backgroundColor:"blue",
    margin:20
  },
});

export default Home;
