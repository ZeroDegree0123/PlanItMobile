import React, { useRef, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { doc, setDoc } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../../config/firebase';

export default function AddNew({ path }) {
    const name = useRef()

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        const docRef = doc(FIRESTORE_DB, path, name.current.value)
        await setDoc(docRef, {name: name.current.value})

        console.log("submit")
    }

    return (
        <View className="flex-row justify-center items-center">
            <View className='bg-gray-200 rounded-2xl flex-row my-5 p-3'>
                <TextInput 
                    ref={name}
                    icon="plus" 
                    className='text-md mx-2 w-1/2'
                    placeholder='Input field'
                    // onChangeText={handleChange()} 
                    />
            </View>
            <Button title='Submit' onPress={handleSubmit}/>
        </View>
    );
}
