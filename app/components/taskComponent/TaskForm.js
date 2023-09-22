import React, { useState } from 'react';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { addDoc, collection } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../../config/firebase';

import AppTextInput from '../AppTextInput';
import AppButton from '../AppButton';

export default function TaskForm({ open, setOpen, path }) {
    if (!open) return null;
    
    const [task, setTask] = useState('');

    const handleSubmit = async (evt) => {
        if (task === '') return setOpen(false);
        evt.preventDefault();
        const docRef = collection(FIRESTORE_DB, path);
        
        setOpen(false);
        await addDoc(docRef, {task: task, completed: false});
    }

    return (
        <View className='flex-row items-center justify-center'>
            <AppTextInput
                value={task}
                icon2='add-task'
                placeholder='Add Task'
                onChangeText={(text) => setTask(text)}
            />
            <AppButton title={<MaterialIcons name="send" size={18} color="white" />}  onPress={handleSubmit} styles='justify-center items-center w-8 h-8 bg-blue-400 border-sky-100 border-2 rounded-full m-2 shadow-md'/>

        </View>
    );
}