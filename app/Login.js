import React, { useState } from 'react';
import logo from '../pics/logo.png';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useRouter,Link } from 'expo-router';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Ionicons } from '@expo/vector-icons';
import {saveUserData} from '../storage.js';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const router = useRouter();

  // const handleLogin = () => {
  //   axios.post('http://localhost:3000/api/authenticate', {
  //     username,
  //     password
  //   })
  //   .then((response) => {
  //     router.replace('/Home', { user: response.data });
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  // };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
          <TouchableOpacity style={styles.button}>
            <Link
              href="/post"
              style={{
                textAlign: 'center',
                justifyContent: 'center',
                fontSize: 18,
                color: Colors.white,
                fontWeight: 'bold',
              }}
            >
              go post
            </Link>
          </TouchableOpacity>
          <Link
              href="/Home"
              style={{
                textAlign: 'center',
                justifyContent: 'center',
                fontSize: 18,
                color: Colors.white,
                fontWeight: 'bold',
              }}
            >
              go home
            </Link>
        <KeyboardAvoidingView
          style={styles.flexStyle}
          enabled
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <View style={styles.top}>
            <Image source={logo} style={styles.img} />
          </View>
          <Text style={styles.heading}>Login</Text>
          <Text style={styles.label}>Email address</Text>
          <View style={styles.form}>
            <TextInput
              placeholder="Enter your email address"
              placeholderTextColor={'grey'}
              keyboardType="email-address"
              style={styles.input}
            />
          </View>

          <Text style={styles.label}>Password</Text>

          <View style={styles.form}>
            <TextInput
              
              placeholder="Enter your password"
              placeholderTextColor={'grey'}
              secureTextEntry={isPasswordShown}
              style={styles.input}
            />
            <TouchableOpacity
              onPress={() => setIsPasswordShown(!isPasswordShown)}
              style={styles.eyeIcon}
            >
              {isPasswordShown == true ? (
                <Ionicons name="eye-off" size={24} color={'white'} />
              ) : (
                <Ionicons name="eye" size={24} color={'white'} />
              )}
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={()=>{router.push("/Home")}}style={styles.button}>
            <Text
              style={{
                textAlign: 'center',
                justifyContent: 'center',
                fontSize: 18,
                color: Colors.white,
                fontWeight: 'bold',
              }}
            >
              LogIn
            </Text>
          </TouchableOpacity>

          <View style={styles.signup}>
            <Text style={{ fontSize: 16,color:'white' }}>Don't have an account? </Text>
            <Link
              style={{
                fontSize: 16,
                color: Colors.primary,
                fontWeight: 'bold',
              }}
              href="/Register"
            >
                       Sign up
            </Link>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"black"
  },
  flexStyle: {
    flex: 1,
  },
  top: {
    alignItems: 'center',
  },
  img: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginTop: 40,
  },
  heading: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color:'white'
  },
  label: {
    fontSize: 16,
    fontWeight: '400',
    marginVertical: 7,
    marginTop: 30,
    marginLeft: 60,
    color:'white'
  },
  form: {
    width: '70%',
    color:'white',
    height: 62,
    borderColor: '#3CF1ED',
    borderWidth: 1,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 22,
    marginBottom: 10,
    flexDirection: 'row',
    position: 'relative',
    marginLeft:55
  },
  input: {
    flex: 1,
    borderColor: "#3CF1ED "
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 20,

  },
  button: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 30,
    width: 80,
    height: 40,
    borderRadius: 35,
    backgroundColor: 'green',
  },
  signup: {
    marginTop: 30,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
});

export default Login;
