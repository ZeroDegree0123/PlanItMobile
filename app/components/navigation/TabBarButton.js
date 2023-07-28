import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';


export default function TabBarButton({ onPress, icon }) {
  return (
    <TouchableOpacity>
        <View className="justify-center items-center">
            <FontAwesome5 name="tasks" size={28} color="black" />
        </View>
    </TouchableOpacity>
  )
}
