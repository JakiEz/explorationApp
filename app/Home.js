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
import { router, Link } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { Card, Title, Paragraph } from "react-native-paper";

const DATA = [
  {
    id: "1234",
    title: "Jackie",
    image: "https://www.dochord.com/wp-content/uploads/2022/01/tinn-150x150.jpg",
  },
  {
    id: "12345",
    title: "Game",
    image: "https://www.dochord.com/wp-content/uploads/2022/01/tinn-150x150.jpg",
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
      {/* <TouchableOpacity style={styles.button}>
            <Link
              href="./Profile"
              style={{
                textAlign: 'center',
                justifyContent: 'center',
                fontSize: 18,
                color: "white",
                fontWeight: 'bold',
              }}
            >
              go profile
            </Link>
          </TouchableOpacity> */}
      <View style={styles.p}>
        <Text style={{ fontSize: 30 }}>See what</Text>
        <Text style={{ fontSize: 30 }}>your friends are doing</Text>
      </View>

      <ScrollView
        horizontal
        style={{
          marginLeft: 40,
          width: "80%",
          backgroundColor: "black",
          height: 30,
          borderRadius: 15,
        }}
      >
        {DATA.map((item, index) => (
          <Text
            key={index}
            style={{ alignSelf: "center", marginLeft: 50, color: "white" }}
          >
            {item.id}
          </Text>
        ))}
      </ScrollView>

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

      <View style={{ justifyContent: "center",backgroundColor:"green" }}>
        <FlatList
          style={{ height: 600,  marginTop: 30 }}
          showsHorizontalScrollIndicator={false}
          vertical
          data={DATA}
          renderItem={({ item }) => {
            console.log(item.image);
            return (
              <View style={styles.card}>
                <Image
                  source={{ uri: item.image }}
                  style={{ width: 300, height: 100 }}
                />
                <View>
                  <Title>{item.title}</Title>
                  <Paragraph>Your card content goes here.</Paragraph>
                </View>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "60%",
    height: 200,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    alignSelf:"center"
  },
  p: {
    width: 500,
    height: 100,
    // backgroundColor: "blue",
    margin: 30,
  },
  button: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 30,
    width: 150,
    height: 30,
    borderRadius: 15,
    backgroundColor: "green",
  },
  friends: {
    marginLeft: 0,
    borderRadius: 15,
    marginBottom: 10,

    alignSelf: "flex-start",
    height: 50,
    width: 50,
    backgroundColor: "green",
  },

  cat: {
    width: "100%",
    height: 20,
    backgroundColor: "blue",
    flexDirection: "row",
    // margin:20
  },
});

export default Home;
