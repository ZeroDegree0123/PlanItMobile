import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeWindStyleSheet } from 'nativewind';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './app/screens/HomeScreen';
import AccountScreen from './app/screens/AccountScreen';
import EventDetailScreen from './app/screens/EventDetailScreen';
import AppNavigator from './app/components/navigation/AppNavigator';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
  //  <NavigationContainer>
  //     <Stack.Navigator>
  //       <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false}}/>
  //       <Stack.Screen name='Account' component={AccountScreen} />
  //       <Stack.Screen name='EventDetail' component={EventDetailScreen}/>
  //     </Stack.Navigator>
  //  </NavigationContainer>
  );
}
