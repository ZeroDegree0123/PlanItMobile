import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons';

import HomeScreen from '../../screens/HomeScreen';
import AccountScreen from '../../screens/AccountScreen';
import { collection, getDocs } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../../config/firebase';

const Tab = createBottomTabNavigator();

export default function AppNavigator({ user }) {
  const [currentUser, setCurrentUser] = useState()
  const [profileImageList, setProfileImageList] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCurrentUser = async () => {
      const userData = await getDocs(collection(FIRESTORE_DB, 'users'));
      userData.forEach((doc) => {
        const userEmail = doc.data().email;
        if (userEmail === user.email) {
          setCurrentUser(doc);
          setLoading(false);
        }
      })
    }
    getCurrentUser()

    const getImages = async () => {
      const imageData = await getDocs(collection(FIRESTORE_DB, 'images'));
      const imageUrls = []
      imageData.forEach((doc) => {
        imageUrls.push(doc.data().url)
      });
      setProfileImageList(imageUrls);
    }
    getImages();
  }, [])


  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Tasks'
        children={() => <HomeScreen currentUser={currentUser} profileImageList={profileImageList} loading={loading} />}
        options={({ navigation }) => ({
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="tasks" size={28} color="black" />
          ),
          headerShown: false
        })}
      />
      <Tab.Screen
        name='Account'
        user={user}
        children={() => <AccountScreen user={user} currentUser={currentUser} loading={loading} />}
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
