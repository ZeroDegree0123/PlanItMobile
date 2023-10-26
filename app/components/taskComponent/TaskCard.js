import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { collection, setDoc, doc } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../../config/firebase';

import AppButton from '../AppButton';

export default function TaskCard({ taskData, id, currentUser }) {

    const handleCompleteTask = async () => {
        await setDoc(doc(FIRESTORE_DB, `users/${currentUser.id}/tasks/${id}`), {task: taskData.task, completed: true});  
    } 

    return (
         <>
            <View className='flex-row items-center justify-between p-2 my-1 bg-blue-100 rounded'>
                <View className='flex-row items-center'>
                    {/* <View className='w-8 h-8 bg-red-400 rounded-full mr-2'></View> */}
                    <AppButton id="app-button" title={<Feather name="plus-circle" size={28} color="salmon" />} onPress={handleCompleteTask} styles='justify-center items-center mr-2'/>
                    <Text>{taskData.task}</Text>
                </View>
                {/* { taskData.completed ? 
                    <AntDesign name='star' size={20} color='gold' />
                    :
                    <AntDesign name='staro' size={20} color='black' />
                } */}
            </View> 
        </>
    );
}