import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Firestore, addDoc, collection, onSnapshot } from 'firebase/firestore';


import AppNavigator from './app/components/navigation/AppNavigator';
import AuthScreen from './app/screens/AuthScreen';
import AppTextInput from './app/components/AppTextInput';
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH, FIRESTORE_DB } from './config/firebase';
import ListScreen from './app/screens/Tests/ListScreen';


export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      // console.log(user)
      setUser(user)
    })
  }, [])

  return (
    <NavigationContainer>
      { user ? 
        <AppNavigator user={user}/>
        // <ListScreen user={user}/>
      :
        <AuthScreen/> 
      }
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
