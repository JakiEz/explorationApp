import React from 'react'
import {View,Text, SafeAreaView, ScrollView, StyleSheet, FlatList, Image, Pressable} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import {router} from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler'
const DATA = [
  {
    id:'1234',
    title:'Jackie'
  },
  {
    id:'12345',
    title:'Game'
  },
  {
    id:'123456',
    title:'Phone'
  },
  {
    id:'123467',
    title:'Pro'
  },
]

const back = () => {
  console.log("back");
  <link href="/Login.js"></link>
}

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FlatList
         data={DATA}
         renderItem={({item})=>{
          return(<View style={{width:300,backgroundColor:"green"}}><Text>{item.title}</Text></View>)
         }}
         >
        </FlatList>
         
     
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  top:{
    backgroundColor:"blue",
    flexDirection:"row",
    height:100,
    width:100,
    marginLeft:10
  }
})

export default Home