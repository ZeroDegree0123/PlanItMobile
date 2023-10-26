import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../../screens/HomeScreen';
import CalendarScreen from '../../screens/CalendarScreen';
import AccountScreen from '../../screens/AccountScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator({ user }) {
  // console.log(user)
  return (
    <Tab.Navigator user={user}>
        <Tab.Screen 
          name='Tasks'
          children={() => <HomeScreen user={user}/>}
          options={({ navigation }) => ({
            tabBarIcon: ({color, size}) => (
              <FontAwesome5 name="tasks" size={28} color="black" />
            ),
            headerShown: false
          })}
        />
        {/* <Tab.Screen
          name='Calendar'
          component={CalendarScreen}
          options={{
            tabBarIcon: () => (
              <Ionicons name="ios-calendar" size={28} color="black" />
            ),
            headerShown: false
          }}
        /> */}
        <Tab.Screen
          name='Account'
          user={user}
          children={() => <AccountScreen user={user}/>}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons name="account" size={28} color="black" />
              ),
              headerShown: false,
          }}
        />
    </Tab.Navigator>
  )
}
