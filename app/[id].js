import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {Stack, useSearchParams} from 'expo-router'



const Profile = () => {
  const {id} = useSearchParams();
  const handleLogin = async () => {
    const apiUrl = "http://172.20.10.3:3000/user/login";

    const data = {
      email: email,
      password: password,
    };

    if (!email || !password) {
      Alert.alert("Missing Fields", "Please fill out all fields");
      return;
    }

    try {
      const response = await axios.post(apiUrl, data);

      console.log("data :", response.data);
      if(response.status == 200 || 201){
        try {
          
          router.replace("/Home");

        } catch (error) {
          console.log("Error getting data", error);
        }
      }
      else{
        console.warn(response.status);    
      }
      
    } catch (error){
      console.log(error);
    }

   
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.profileImage}
        source={{uri: 'https://example.com/path-to-your-image.jpg'}}
      />
      <Text style={styles.name}>Your Name</Text>
      <Text style={styles.email}>your-email@example.com</Text>
      <Text style={styles.phone}>+1 234 567 890</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    marginBottom: 10,
  },
  email: {
    fontSize: 18,
    marginBottom: 10,
  },
  phone: {
    fontSize: 18,
  },
});

export default Profile;
