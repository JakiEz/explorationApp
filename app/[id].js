import React from 'react'
import {View, Text} from 'react-native'
import {Stack, useSearchParams} from 'expo-router'

const profile = () => {
    const {id} = useSearchParams();
  return (
    <View>
        <Text>Hello {id}</Text>
    </View>
  )
}

export default profile;
