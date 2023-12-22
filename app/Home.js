import React, { useState,useEffect } from "react";
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
import { useRouter, router, Link } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";
import { Card, Title, Paragraph } from "react-native-paper";
import { font } from "../font.js";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from '@react-native-async-storage/async-storage';

const DATA = [
  {
    id: "1234",
    title: "Jackie",
    image:
      "https://i.pinimg.com/originals/7e/21/48/7e2148953987ce74723756b779932271.jpg",
    description: "Lamborghini Hurucan,pic by me",
    Category: "Cars",
  },
  {
    id: "12345",
    title: "Jackie",
    image:
      "https://th.bing.com/th/id/R.93394d2f255d75d2907bf2ecebdcef41?rik=OeCRJdYTiMTEiw&pid=ImgRaw&r=0",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    Category: "Food",
  },
  {
    id: "123456",
    title: "Phone",
    image:
      "https://www.xtrafondos.com/wallpapers/vertical/zorro-animal-6528.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    Category: "Animal",
  },
  {
    id: "1234567",
    title: "ls",
    image:
      "https://th.bing.com/th/id/R.c8a8664a2dcb8715500192f5c7af4e11?rik=VmDg%2bXAKwFOHiw&pid=ImgRaw&r=0",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    Category: "Food",
  },
  {
    id: "12345678",
    title: "Ping",
    image:
      "https://th.bing.com/th/id/OIP.YFbVHoivPWLQa98-5wrd6QHaLH?w=615&h=923&rs=1&pid=ImgDetMain",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    Category: "Toys",
  },
  {
    id: "12345679",
    title: "Nslookup",
    image:
      "https://wallpapercrafter.com/th800/331475-Vehicles-McLaren-720S-Phone-Wallpaper.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    Category: "Cars",
  },
  {
    id: "123456790",
    title: "Cd",
    image:
      "https://th.bing.com/th/id/OIP.rmx-HjlnYpCcRZXPPy-DJAHaO0?w=500&h=1000&rs=1&pid=ImgDetMain",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    Category: "Cars",
  },
  {
    id: "1234567901",
    title: "Game",
    image:
      "https://th.bing.com/th/id/R.79c53fcc4bc0fd4a52ef6d4ae2f60fb8?rik=5D8PQJvYqWYaiQ&pid=ImgRaw&r=0",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    Category: "Food",
  },
  {
    id: "12345679012",
    title: "Cat",
    image:
      "https://th.bing.com/th/id/OIP.cTXsRZJOSYS55HqjMSVrUQHaG7?rs=1&pid=ImgDetMain",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    Category: "Toys",
  },
  {
    id: "123456790123",
    title: "Verbose",
    image:
      "https://th.bing.com/th/id/R.f51047710ff2c8dfaa3a53ec46f20cf1?rik=laRdGWsQ7uDWog&pid=ImgRaw&r=0",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    Category: "Animal",
  },
  {
    id: "1234567901234",
    title: "WhatWeb",
    image:
      "https://th.bing.com/th/id/R.8ab586e8dc73a43c11aa16ab66b65009?rik=4G6lCbJbV14sMg&pid=ImgRaw&r=0",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    Category: "Game",
  },
  {
    id: "12345679012345",
    title: "Whois",
    image:
      "https://th.bing.com/th/id/R.6a406c4f27d7efd3d55cdf9cd691f087?rik=CGAfoc7nIp1mWg&pid=ImgRaw&r=0",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    Category: "Animal",
  },
  
  {
    id: "123456790123456",
    title: "Sudo",
    image:
      "https://th.bing.com/th/id/R.7a3cab595d5597122703cacbec789303?rik=4CL8xPaSwd7jZQ&pid=ImgRaw&r=0",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    Category: "Food",
  },
];

const categories = ["Food", "Game", "Animal", "Cars", "Toys"];

// const back = () => {
//   console.log("back");
//   <link href="/Login.js"></link>
// }

const Home = () => {
  // const { user } = useRouter().getCurrentParams();
  const [isFocused, setIsFocused] = useState(false);
  const data = DATA.map(({ id, title, image, description, Category }) => ({
    id,
    title,
    image,
    description,
    Category,
  }));
  const [selectedCategory, setSelectedCategory] = useState(null);
  const filteredData = selectedCategory
    ? DATA.filter((item) => item.Category === selectedCategory)
    : DATA;

  const router = useRouter();

 
  const [photoUrl, setPhotoUrl] = useState(null);

  useEffect(() => {
    const fetchPhotoUrl = async () => {
      const email = await AsyncStorage.getItem('email');

      // Replace this with your actual API call
      const response = await fetch(`http://172.20.10.3:3000/user/login=${email}`);
      const data = await response.json();

      setPhotoUrl(data.photoUrl);
    };

    fetchPhotoUrl();
  }, []);




  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
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
          <View style={{ marginRight: 50, marginTop: 0 }}>
            <TouchableOpacity
              onPress={() => router.push("/Profile")}
              style={{
                width: 50,
                height: 50,
                borderRadius: 35,
                // backgroundColor: "green",
              }}
            >
              <Image
                // key={item.id}
                style={{width: 70,
                  height: 70,borderRadius: 35,}}
                  source={require("../pics/phone.png")}
              />
            </TouchableOpacity>

            {/* <Ionicons name="person-sharp" size={34} color="black" /> */}
          </View>
          {/* <AntDesign name="search1" size={24} color="black" /> */}
        </View>

        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{
            // marginLeft: 40,
            width: "100%",
            // backgroundColor: "blue",
            height: 50,
            borderRadius: 15,
            marginTop: 6,
            paddingTop: 10,
          }}
        >
          {categories.map((category, index) => (
            <View style={{ flexDirection: "row", alignItem: "center" }}>
              <TouchableOpacity
                style={{
                  alignSelf: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                onPress={() => setSelectedCategory(category)}
              >
                <Text
                  key={index}
                  style={{ fontSize: 25, alignSelf: "center", marginLeft: 20 }}
                >
                  {category}
                </Text>
                {selectedCategory === category && (
                  <View
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 50,
                      backgroundColor: "black",
                      position: "absolute",
                      top: 30,
                      right: 20,
                      marginRight:7
                    }}
                  ></View>
                )}
              </TouchableOpacity>

              <View
                style={{
                  width: 3,
                  height: 30,
                  borderRadius: 50,
                  backgroundColor: "black",
                  // position: "absolute",
                  marginLeft: 20,
                }}
              ></View>
            </View>
          ))}
        </ScrollView>

        <View style={{ justifyContent: "center" }}>
          <FlatList
            style={{ height: 400, marginBottom: 0 }}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={filteredData}
            renderItem={({ item, index }) => {
              console.log(item.image);
              return (
                <View style={styles.card}>
                  <Image
                    source={{ uri: item.image }}
                    style={styles.backgroundImage}
                  />
                  <View
                    key={item.id}
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 25,
                      backgroundColor: "grey",
                      position: "absolute",
                      top: 10,
                      right: 4,
                    }}
                  >
                    <Text style={{ position: "absolute", top: 10, right: 14, color:'white' }}>
                      {index + 1}
                    </Text>
                    <Text>{}</Text>
                  </View>
                  <View style={styles.container}>
                    <LinearGradient
                      colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"]}
                      style={styles.gradientBox}
                    />
                  </View>
                  <TouchableOpacity onPress={()=>router.push(`/${item.title}`)}>
                  <View
                    style={{
                      width: 230,
                      height: 100,
                      borderRadius: 30,
                      marginBottom: 20,
                    }}
                  >
                    <Title
                      style={{
                        marginTop: 10,
                        marginLeft: 10,
                        fontSize: 20,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      {item.title}
                    </Title>
                    <Paragraph
                      style={{ color: "white", marginLeft: 10, fontSize: 10 }}
                    >
                      {item.description}
                    </Paragraph>
                  </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
        <TouchableOpacity style={styles.navBar}>
          <View></View>
        </TouchableOpacity>





        <View>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => router.push("/post")}
          >
            <Ionicons name="add-circle-sharp" size={70} color="#282828" />
          </TouchableOpacity>
        </View>


        <ScrollView>
        <View style={{ marginTop: -20, width: "100%", alignItems: "center" }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            vertical
            data={filteredData.slice(9)}
            renderItem={({ item, index }) => {
              console.log(item.image);
              return (
                <View
                  style={{
                    width: 300,
                    height:130,
                    marginTop: 50,
                    backgroundColor: "#F0F0F0",
                  }}
                >
                  <Image
                    source={{ uri: item.image }}
                    style={styles.backgroundImage}
                  />
                  <AntDesign name="heart" size={20} color="black" style={{alignSelf:"flex-end",paddingTop:20,paddingRight:25,position:"absolute",zIndex:10}}/>
                  <View
                    key={item.id}
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 35,
                      backgroundColor: "grey",
                      position: "absolute",
                      alignSelf:"flex-end",
                      right:19,
                      top:12
                      
                    }}
                  >
                  </View>
                    {/* <Text style={{ position: "absolute", top: -10 }}>
                      {index + 1}
                    </Text>
                    <Text>{}</Text> */}

                  <View style={{ width: 300, marginTop: 20 }}>
                    <LinearGradient
                      colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"]}
                      style={styles.gradientBelow}
                    />
                  </View>

                  <View
                    style={{
                      width: 230,
                      height: 100,
                      borderRadius: 30,
                      marginBottom: 20,
                      justifyContent: "flex-end",
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => router.push(`/${item.title}`)}
                    >
                      <Title
                        style={{
                          marginTop: 10,
                          marginLeft: 10,
                          fontSize: 20,
                          color: "white",
                          fontWeight: "bold",
                        }}
                      >
                        {item.title}
                      </Title>
                    </TouchableOpacity>
                    <Paragraph
                      style={{ color: "white", marginLeft: 10, fontSize: 10 }}
                    >
                      {item.description}
                    </Paragraph>
                  </View>
                </View>
              );
            }}
          />
        </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  gradientBox: {
    width: 250,
    height: 250,
    borderRadius: 35,
    position: "absolute",
  },
  navBar: {
    position: "absolute",
    top: 700,
    left: 120,
    right: 120,
    height: 50,
    borderRadius: 35,
    // backgroundColor: 'blue',
    zIndex: 30,
  },
  gradientBelow: {
    width: 300,
    height: 150,
    borderRadius: 35,
    position: "absolute",
  },
  container: {
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 250,
    height: 350,
    justifyContent: "flex-end",
    // backgroundColor: "grey",
    marginLeft: 20,
    alignItems: "center",
    // alignSelf: "center",
    margiRight: 20,
    marginTop: 30,
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
    // fontFamily: "Montserrat",
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
    // backgroundColor: "blue",
    flexDirection: "row",
    // margin:20
  },
  button2: {
    marginLeft: 22,
    marginTop: 22,
    backgroundColor: "transparent", // Set the button background color to transparent
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#3CF1ED",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default Home;
