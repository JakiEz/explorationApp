import React, { useState } from 'react';
import logo from '../pics/logon.png';
import logo2 from '../pics/more.png';
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
import { Link } from 'expo-router';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Ionicons } from '@expo/vector-icons';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  return (
    
      <ScrollView contentContainerStyle={styles.scrollContainer}>
     
        <KeyboardAvoidingView
          style={styles.flexStyle}
          enabled
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <View style={styles.top2}>
            <Image source={logo2} style={styles.img2} />
          </View>
          <View style={styles.top}>
            <Image source={logo} style={styles.img} />
          </View>
          <Text style={styles.heading}>Login</Text>
          <Text style={styles.label}>Email address</Text>
          <View style={styles.form}>
            <TextInput
              placeholder="Enter your email address"
              placeholderTextColor='#585858'
              keyboardType="email-address"
              style={styles.input}
            />
          </View>

          <Text style={styles.label}>Password</Text>

          <View style={styles.form}>
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor='#585858'
              secureTextEntry={isPasswordShown}
              style={styles.input}
            />
            <TouchableOpacity
              onPress={() => setIsPasswordShown(!isPasswordShown)}
              style={styles.eyeIcon}
            >
              {isPasswordShown == true ? (
                <Ionicons name="eye-off" size={24} color='#585858' />
              ) : (
                <Ionicons name="eye" size={24} color='#585858' />
              )}
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button}>
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
              LogIn
            </Link>
          </TouchableOpacity>

          <View style={styles.signup}>
            <Text style={{ fontSize: 16,color:'#585858' }}>Don't have an account?</Text>
            <Link
              style={{
                fontSize: 16,
                color: Colors.primary,
                fontWeight: 'bold',
                marginHorizontal:6
              }}
              href="/Register"
            >
              Sign up
            </Link>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  flexStyle: {
    flex: 1,
  },
  top: {
    alignItems: 'center',
    marginTop:-200
  },
  img: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    
  },
  heading: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 37,
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
    height: 62,
    borderColor: '#282828',
    borderWidth: 1,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 22,
    marginBottom: -10,
    flexDirection: 'row',
    position: 'relative',
    marginLeft:55,
    backgroundColor:'#282828'
  },
  input: {
    flex: 1,
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
    width: 100,
    height: 45,
    borderRadius: 30,
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
    backgroundColor:'#181818'
  },
  img2: {
    height: 400,
    width: 650,
    marginLeft:106,
  
    
  },
  top2: {
    alignItems: 'center',
    marginTop :-73
    
  },
});

export default Login;
