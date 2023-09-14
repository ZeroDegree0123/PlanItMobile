import React from 'react';
import { Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import AppButton from '../AppButton';


export default function TaskCard({ doc, id }) {
    const handleCompleteTask = async () => {
        
    } 

    return (
         <>
            <View className='flex-row items-center justify-between p-2 my-1 bg-blue-100 rounded'>
                <View className='flex-row items-center'>
                    <AppButton title='+' onPress={handleCompleteTask} styles='justify-center items-center w-8 h-8 border-red-400 border-2 rounded-full mr-2'/>
                    {/* <View className='w-8 h-8 bg-red-400 rounded-full mr-2'></View> */}
                    <Text>{doc.task}</Text>
                </View>
                { doc.completed ? 
                    <AntDesign name='star' size={20} color='gold' />
                    :
                    <AntDesign name='staro' size={20} color='black' />
                }
            </View> 
        </>
    );
}
