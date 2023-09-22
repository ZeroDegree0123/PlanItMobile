import React from 'react';
import { Text, View } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { doc, deleteDoc } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../../config/firebase';


import AppButton from '../AppButton';
import colors from '../../../config/colors';

export default function TaskCard({ taskData, id, currentUser }) {
    const handleDelete = async () => {
        await deleteDoc(doc(FIRESTORE_DB, `users/${currentUser.id}/tasks/${id}`));  
    }

    return (
         <>
            <View className='flex-row items-center justify-between p-2 my-1 bg-blue-100 rounded'>
                <View className='flex-row items-center'>
                    {/* <View className='w-8 h-8 bg-red-400 rounded-full mr-2'></View> */}
                    <AppButton id="app-button" title={<Feather name="check-circle" size={24} color="gray"/>} styles='justify-center items-center mr-2'/>
                    <Text className='text-gray-500 line-through'>{taskData.task}</Text>
                </View>
                <MaterialIcons name="delete-outline" size={24} color={colors.delete} onPress={handleDelete}/>
            </View> 
        </>
    );
}