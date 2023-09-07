import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


import HomeScreen from '../../screens/HomeScreen';
import CalendarScreen from '../../screens/CalendarScreen';
import AccountScreen from '../../screens/AccountScreen';
import ListScreen from '../../screens/Tests/ListScreen';
import Subcollections from '../../screens/Tests/Subcollections';

const Tab = createBottomTabNavigator();

export default function AppNavigator({user}) {
  // console.log(user)
  return (
    <Tab.Navigator user={user}>
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
          user={user}
          component={AccountScreen}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons name="account" size={28} color="black" />            )
          }}
        />
        <Tab.Screen
          name='List'
          children={() => <ListScreen user={user}/>}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons name="lock" size={28} color="black" />            )
          }}
        />
        <Tab.Screen
          name='Subcollection'
          children={() => <Subcollections user={user}/>}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons name="plus" size={28} color="black" />            )
          }}
        />
    </Tab.Navigator>
  )
}
