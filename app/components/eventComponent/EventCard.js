import React from 'react';
import { Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


export default function EventCard({ doc }) {
    return (
         <>
            <View className='flex-row items-center justify-between p-2 my-1 bg-slate-300 rounded'>
                <View className='flex-row items-center'>
                    <View className='w-8 h-8 bg-red-400 rounded-full mr-2'></View>
                    <Text>{doc.task}</Text>
                </View>
                <AntDesign name='star' size={20} color='gold' />
                {/* <AntDesign name='staro' size={20} color='black' /> */}
            </View> 
        </>
    );
}
