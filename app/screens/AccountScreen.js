import React from 'react';
import { Text, View, Button } from 'react-native';
import { FIREBASE_AUTH } from '../../config/firebase';

export default function AccountScreen({user}) {
    // console.log(user)
    return (
        <View>
            <Text>Hello Account Page</Text>
            <Button title="Logout" onPress={() => FIREBASE_AUTH.signOut()} />
        </View>
    );
}

