import React, { useRef, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../../config/firebase';

export default function AddNew({ path }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const docRef = collection(FIRESTORE_DB, path)
        await addDoc(docRef, {name: name, email: email})
        console.log(name, email)
        console.log("submit")
    }
    
    console.log(path)
    return (
        <View className="flex-row justify-center items-center">
            <View className='flex-column my-5'>
                <TextInput 
                    name="name"
                    value={name}
                    icon="plus" 
                    className='bg-gray-200 rounded-2xl text-md my-1 p-2'
                    placeholder='Name Input'
                    onChangeText={(text) => setName(text)}
                />
                
                <TextInput 
                    name="email"
                    value={email}
                    icon="plus" 
                    className='bg-gray-200 rounded-2xl text-md my-1 p-2'                    placeholder='Email Input'
                    onChangeText={(text) => setEmail(text)}
                />
            </View>
            <Button title='Submit' onPress={handleSubmit}/>
        </View>
    );
}

