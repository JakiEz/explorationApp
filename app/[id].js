import React from 'react'
import {View, Text, SafeAreaView} from 'react-native'
import {Stack, useSearchParams} from 'expo-router'

const profile = () => {
    const {id} = useSearchParams();
  return (
    <SafeAreaView>
        <Text>Hello {id}</Text>
    </SafeAreaView>
  )
}

export default profile;
