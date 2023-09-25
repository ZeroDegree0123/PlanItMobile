import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { Agenda, Calendar } from 'react-native-calendars'

export default function CalendarScreen() {
  const handlePress = () => {
    
  }
  return (
    <SafeAreaView className='flex-1 bg-sky-100'>
      <Calendar 
        className='bg-sky-100'
        onDayPress={handlePress} 
        theme={{
          textSectionTitleColor: '#b6c1cd',
          textSectionTitleDisabledColor: '#d9e1e8',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#f542b9',
          todayTextColor: '#00adf5',
          dayTextColor: '#f542b9'
        }}
      />
    </SafeAreaView>
  )
}
