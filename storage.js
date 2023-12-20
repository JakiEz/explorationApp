import { AsyncStorage } from 'react-native';


export const saveUserData = async (userData) => {
  try {
    await AsyncStorage.setItem('userData', JSON.stringify(userData));
  } catch (error) {
    console.log(error);
  }
};


export const getUserData = async  () => {
  try {
    const userData = await AsyncStorage.getItem('userData');
    return JSON.parse(userData);
  } catch (error) {
    console.log(error);
  }
}; 