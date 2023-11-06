import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './config/firebase';
import { Text } from 'react-native';


import AppNavigator from './app/components/navigation/AppNavigator';
import AuthScreen from './app/screens/AuthScreen';


export default function App() {
  const [user, setUser] = useState(null);

  onAuthStateChanged(FIREBASE_AUTH, (user) => {
    setUser(user)
  });

  return (
    <NavigationContainer>
      {user ?
        <AppNavigator user={user} />
        :
        <AuthScreen />
      }
    </NavigationContainer>
  );
}
