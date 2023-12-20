import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router, Link } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";
import { Card, Title, Paragraph } from "react-native-paper";
import { font } from "../font.js";

const DATA = [
  {
    id: "1234",
    title: "Jackie",
    image:
      "https://www.dochord.com/wp-content/uploads/2022/01/tinn-150x150.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    Catetgory: "Food",
  },
  {
    id: "12345",
    title: "Game",
    image:
      "https://www.dochord.com/wp-content/uploads/2022/01/tinn-150x150.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    Catetgory: "Game",
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
  const [isFocused, setIsFocused] = useState(false);
  const data = DATA.map(({ id, title, image, description, Category }) => ({
    id,
    title,
    image,
    description,
    Category,
  }));
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
        <View>
          <Text
            style={{ fontSize: 30, fontWeight: "bold" }}
            font={font.customText}
          >
            Explore
          </Text>
          <Text style={{ fontSize: 30 }} font={font.customText}>
            photos
          </Text>
        </View>
        <View style={{ marginRight: 30, marginTop: 10 }}>
          
            <Image
              // key={item.id}
              style={{ width: 50, height: 50, borderRadius: 35 }}
              source={{uri:data.image}}
            />
          
          {/* <Ionicons name="person-sharp" size={34} color="black" /> */}
        </View>
        {/* <AntDesign name="search1" size={24} color="black" /> */}
      </View>

      <ScrollView
        horizontal
        style={{
          // marginLeft: 40,
          width: "100%",
          // backgroundColor: "blue",
          height: 50,
          borderRadius: 15,
          marginTop: 40,
        }}
      >
        {DATA.map((item, index) => (
          <TouchableOpacity style={{ alignSelf: "center" }}>
            <Text
              key={index}
              style={{ fontSize: 25, alignSelf: "center", marginLeft: 30 }}
            >
              {item.Catetgory}      |
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={{ justifyContent: "center", backgroundColor: "green" }}>
        <FlatList
          style={{ height: 400, marginTop: 0 }}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={DATA}
          renderItem={({ item }) => {
            console.log(item.image);
            return (
              <View style={styles.card}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.backgroundImage}
                />
                <View
                  style={{
                    width: 230,
                    height: 100,
                    backgroundColor: "white",
                    borderRadius: 30,
                    marginBottom: 20,
                  }}
                >
                  <Title
                    style={{
                      marginTop: 10,
                      marginLeft: 10,
                      fontSize: 20,
                      fontWeight: "bold",
                    }}
                  >
                    {item.title}
                  </Title>
                  <Paragraph style={{ marginLeft: 10, fontSize: 10 }}>
                    {item.description}
                  </Paragraph>
                </View>
                <View></View>
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
    width: 250,
    height: 350,
    justifyContent: "flex-end",
    // backgroundColor: "grey",
    marginLeft: 20,
    alignItems: "center",
    alignSelf: "center",
    margiRight: 20,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
    borderRadius: 30,
    overflow: "hidden",
  },
  p: {
    width: "auto",
    fontFamily: "Montserrat",
    // height: 100,
    // backgroundColor: "blue",
    justifyContent: "space-between",
    flexDirection: "row",
    marginLeft: 40,
    marginTop: 30,
    marginBottom: 30,
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
