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

export default function Post() {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");

  useEffect(() => {
    // Ask for permission when the component mounts
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

  const handlePost = () => {
    if (image && caption.trim() !== "") {
      // TODO: Implement logic to post the image and caption
      Alert.alert("Post Successful", "Your post has been uploaded!");
      // Clear the state after posting
      setImage(null);
      setCaption("");
    } else {
      Alert.alert("Error", "Please select an image and add a caption.");
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
  postButton: {
    padding: 10,
    borderRadius: 5,
    marginLeft:20
  },
});
