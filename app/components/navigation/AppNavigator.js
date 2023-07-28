import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


import HomeScreen from '../../screens/HomeScreen';
import CalendarScreen from '../../screens/CalendarScreen';
import AccountScreen from '../../screens/AccountScreen';
import TabBarButton from './TabBarButton';

const Tab = createBottomTabNavigator();


export default function AppNavigator() {
  return (
    <Tab.Navigator>
        <Tab.Screen 
          name='Tasks'
          component={HomeScreen}
          options={({ navigation }) => ({
            tabBarIcon: ({color, size}) => (
              <FontAwesome5 name="tasks" size={28} color="black" />
            ),
            headerShown: false
          })}
        />
        <Tab.Screen
          name='Calendar'
          component={CalendarScreen}
          options={{
            tabBarIcon: () => (
              <Ionicons name="ios-calendar" size={28} color="black" />
            )
          }}
        />
        <Tab.Screen
          name='Account'
          component={AccountScreen}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons name="account" size={28} color="black" />            )
          }}
        />
    </Tab.Navigator>
  )
}
