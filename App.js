import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeWindStyleSheet } from 'nativewind';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './app/screens/HomeScreen';
import AccountScreen from './app/screens/AccountScreen';
import EventDetailScreen from './app/screens/EventDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false}}/>
        <Stack.Screen name='Account' component={AccountScreen} />
        <Stack.Screen name='EventDetail' component={EventDetailScreen}/>
      </Stack.Navigator>
   </NavigationContainer>
  );
}
