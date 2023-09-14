import React, { useState } from 'react';
import { KeyboardAvoidingView, Button, View } from 'react-native';
import { addDoc, collection } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../../config/firebase';

import AppTextInput from '../AppTextInput';

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
            <Button title='+' onPress={handleSubmit}/>
        </View>
    );
}