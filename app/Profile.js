import { View, Text, StatusBar, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'


export default function Profile() {

    const {params} = useRoute();
    let item = params;
    //console.log('profile:',item);

    return(
        <View>
           <ScrollView>
                <View className='relative'>
                    
                </View>
          </ScrollView>
        </View>
    )
} 
