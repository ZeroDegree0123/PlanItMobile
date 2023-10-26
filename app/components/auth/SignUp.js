import React, { useState } from 'react';
import { Button, View, ActivityIndicator, KeyboardAvoidingView } from 'react-native';
import { FIREBASE_AUTH, FIRESTORE_DB } from '../../../config/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection, getDocs, onSnapshot } from 'firebase/firestore';


import AppTextInput from '../AppTextInput';


export default function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newUser, setNewUser] = useState('')
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH


    const addUser = async (newUser) => {
        const doc = addDoc(collection(FIRESTORE_DB, 'users'), {email: email, name: name});
        setNewUser(doc);
    }

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response.user.uid)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response)
            alert('Check your emails!')
            addUser(response.user);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }


    return (
        <View className="justify-center items-center w-max">
            <KeyboardAvoidingView behavior='padding'>
                <AppTextInput
                    value={name}
                    icon='account'
                    placeholder='Username'
                    onChangeText={(text) => setName(text)}
                    />
                <AppTextInput
                    value={email}
                    icon='email'
                    placeholder='Email'
                    onChangeText={(text) => setEmail(text.toLowerCase())}
                    />
                <AppTextInput
                    value={password}
                    icon='lock'
                    placeholder='Password'
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                    />

                {loading ? 
                    <ActivityIndicator size='large' color='#0000ff'/>
                    : 
                    <>
                    <Button title='Login' onPress={signIn}/>
                    <Button title='SignUp' onPress={signUp}/>
                    </>
                }

            </KeyboardAvoidingView>
        </View>
    );
}
