import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

export default function Profile() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(0); 

  const handlePress = () => {
    // Toggle the following state
    setIsFollowing((prev) => !prev);

    // Update the follower count based on the current following state
    setFollowerCount((prevCount) => (isFollowing ? prevCount - 1 : prevCount + 1));
  };

  return (
    <View style={{ flex: 1 }}>
      <View>
        <ImageBackground
          source={require("../pics/phone.png")}
          style={{
            height: 470,
            width: 470,
          }}
        />
      </View>
      <View>
      <Text style={{ fontWeight: "bold", color: '#989898', marginTop: -80,marginLeft:160,fontSize:15 }}>
            followers
          </Text>
          <Text style={{ fontWeight: "bold", color: "white", marginTop: -50,marginLeft:184,fontSize:23 }}>
          {followerCount}
          </Text>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          marginTop: -36,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
      >
        {/* profile */}
        <View style={{ marginHorizontal: 30, marginVertical: 20 }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "700",
              marginTop: 12,
            }}
          >
            Narupon
          </Text>
          <Text
            style={{
              fontWeight: 600,
              color: "gray",
              marginTop: 2,
            }}
          >
            Thailand
          </Text>
        </View>

        {/* ABOUT */}
        <View style={{ marginHorizontal: 30, marginVertical: 20 }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "800",
              marginTop: -19,
            }}
          >
            About
          </Text>
          <Text
            style={{
              fontWeight: 600,
              color: "gray",
              marginTop: 2,
            }}
          >
            CPE KMUTT.My name is NARUPON but you can call me Pro.
          </Text>
        </View>

        {/* PHOTO */}
        <View style={{ marginHorizontal: 30, marginVertical: 20 }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "800",
              marginTop: -20,
            }}
          >
            Photos
          </Text>
        </View>
        <View style={{ marginTop: 0 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.mediaImageContainer}>
              <Image
                source={require("../pics/phone.png")}
                style={styles.Image}
                resizeMode="cover"
              />
            </View>

            <View style={styles.mediaImageContainer}>
              <Image
                source={require("../pics/phone.png")}
                style={styles.Image}
                resizeMode="cover"
              />
            </View>

            <View style={styles.mediaImageContainer}>
              <Image
                source={require("../pics/phone.png")}
                style={styles.Image}
                resizeMode="cover"
              />
            </View>

            <View style={styles.mediaImageContainer}>
              <Image
                source={require("../pics/phone.png")}
                style={styles.Image}
                resizeMode="cover"
              />
            </View>
          </ScrollView>
        </View>
          
        {/* Follow button */}
        <View
          style={{
            paddingHorizontal: 120,
            marginVertical: -330,
            marginLeft: 80,
            marginRight: -80,
          }}
        >
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: isFollowing ? "#F5E8B7" : "white" },
            ]}
            onPress={handlePress}
          >
            <Text style={styles.buttonText}>
              {isFollowing ? "FOLLOWING" : "+ FOLLOW"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 40,
    paddingVertical: 12,
  },
  buttonText: {
    color: "black",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "800",
  },
  mediaImageContainer: {
    width: 150,
    height: 150,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10,
  },
});
