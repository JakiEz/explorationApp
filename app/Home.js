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
          <FlatList
          style={{height:150}}
          horizontal
          data={DATA}
          renderItem={({item})=>{
            return(<View style={styles.friends}><Text>{item.id}</Text></View>)
          }}
          />
       
        <FlatList
        //  style={{flex:1}}
          
         data={DATA}
         renderItem={({item})=>{
          return(<View style={{borderRadius:15,marginBottom:10,alignSelf:"center",height:200,width:"90%",backgroundColor:"green"}}><Text>{item.title}</Text></View>)
         }}
         />
      
         
     
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
  },
  friends:{
    height:100,
    width:100,
    backgroundColor:"blue",
    marginLeft:30,
    borderRadius:100,
    

  }
})

export default Home