import React from 'react'
import { Text, View } from 'react-native'
import { Calendar } from 'react-native-calendars'

export default function CalendarScreen() {
  const handlePress = () => {
    
  }
  return (
    <View>
      <Calendar onDayPress={handlePress}/>
    </View>
  )
}
