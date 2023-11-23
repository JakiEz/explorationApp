import React from 'react'
import {View,Text, SafeAreaView, ScrollView, StyleSheet, FlatList} from 'react-native'
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