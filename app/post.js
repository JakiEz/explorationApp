import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  Alert,

} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { Ionicons } from "@expo/vector-icons";
import { Picker} from '@react-native-picker/picker';
import { ScrollView as GestureScrollView } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import { getUserData } from "../storage";


export default function Post() {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  const [category, setCategory] = useState("Uncategorized");

  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
    
    if (status !== "granted") {
      console.log("Permission to access media library denied");
    }
  };

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      
      if (!result.cancelled) {
        setImage(result.uri);
      } else {
        // User canceled the image selection
        console.log("Image selection canceled");
      }
    } catch (error) {
      // Handle errors here
      console.error("Error picking image:", error);
    }
  };

  const retrieveId = async () => {
    try {
      const userData = await AsyncStorage.getItem('userData');
      if (userData !== null) {
        const parsedData = JSON.parse(userData);
        return parsedData.id; // assuming the id property exists on your user data
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handlePost = async () => {
    if (image && caption.trim() !== "") {
      const id = retrieveId(); 
      if (!id) {
        console.error('User id not found');
        return;
      }
      const apiUrl = `http://172.20.10.3:3000/updateProfile/${id}`;
      
      const data = {
        profileImage: image,
      };
      console.log(apiUrl)
      try {
        const response = await axios.put(apiUrl, data);
  
        if (response.status === 200) {
          Alert.alert("Post Successful", "Your post has been uploaded!");
          setImage(null);
          setCaption("");
          setCategory("Uncategorized");
        } else {
          Alert.alert("Error", "Failed to update the photo.");
        }
      } catch (error) {
        console.error(error);
        Alert.alert("Error", "An error occurred while updating the photo.");
      }
    } else {
      Alert.alert("Error", "Please select an image, add a caption, and choose a category.");
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity onPress={pickImage}>
          {image ? (
            <Image source={{ uri: image }} style={styles.image} />
          ) : (
            <View style={styles.placeholder}>
              <Text>Select an Image</Text>
            </View>
          )}
        </TouchableOpacity>
        <TextInput
          style={styles.captionInput}
          placeholder="Write a caption..."
          multiline
          value={caption}
          onChangeText={(text) => setCaption(text)}
        />
        <Picker
          selectedValue={category}
          onValueChange={(itemValue) => setCategory(itemValue)}
          style={styles.categoryPicker}
        >
          <Picker.Item label="Food" value="Food" />
          <Picker.Item label="Game" value="Game" />
          <Picker.Item label="Animal" value="Animal" />
          <Picker.Item label="Cars" value="Cars" />
          <Picker.Item label="Toys" value="Toys" />
          {/* Add more categories as needed */}
        </Picker>
        <TouchableOpacity style={styles.postButton} onPress={handlePost}>
          <Ionicons name="checkmark-circle" size={80} color="green" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 400,
    height: 300,
    resizeMode: "cover",
    marginBottom: 20,
  },
  placeholder: {
    width: 400,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderStyle: "dashed",
    marginBottom: 20,
  },
  captionInput: {
    width: 300,
    height: 100,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  categoryPicker: {
    width: 200,
    height: 150,
    borderColor: "gray",
    borderRadius: 5,
    marginBottom: 20,
    marginVertical:-20,
  },
  postButton: {
    padding: 10,
    borderRadius: 5,
    marginLeft: 20,
    marginVertical:20
  },
});
