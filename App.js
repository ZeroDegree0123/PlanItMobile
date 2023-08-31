import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { collection, onSnapshot } from 'firebase/firestore';


import AppNavigator from './app/components/navigation/AppNavigator';
import AuthScreen from './app/screens/AuthScreen';
import AppTextInput from './app/components/AppTextInput';


export default function App() {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(false)

  return (
    <NavigationContainer>
    
      {/* <AppNavigator/> */}
      <AuthScreen/> 
      {/* <AppTextInput placeholder="Username" icon="email"/> */}
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
