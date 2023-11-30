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
import {useFonts} from 'expo-font';


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
        <Text style={{fontFamily:"Montserrat"}}>See what</Text>
        <Text>your friends are doing</Text>
      </View>

      <FlatList
        //  style={{flex:1}}
        horizontal
        data={DATA}
        renderItem={({ item }) => {
          return (
            <View style={styles.friends}>
              <Text>{item.title}</Text>
            </View>
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
    backgroundColor: "blue",
  },

  friends: {
    borderRadius: 15,
    marginBottom: 10,
    marginRight:30,
    alignSelf: "center",
    height: 200,
    width: 300,
    backgroundColor: "green",
  },
});

export default Home;
