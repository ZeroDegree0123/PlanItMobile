import React, { useState } from 'react';
import { KeyboardAvoidingView, Button, View } from 'react-native';

import AppTextInput from '../AppTextInput';

export default function TaskForm(props) {
    const [task, setTask] = useState('');

    const addTask = async (prop) => {
        console.log('hit add task')
    }

    return (
        <View className='flex-row items-center justify-center'>
            <AppTextInput
                value={task}
                icon2='add-task'
                placeholder='Add Task'
                onChangeText={(text) => setTask(text)}
            />
            <Button title='+' onPress={addTask}/>
        </View>
    );
}