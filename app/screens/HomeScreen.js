import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


export default function HomeScreen(props) {
    return (
        <SafeAreaView className='bg-blue-100 flex-1'>
            <View className='mx-4'>
                <View className='flex-row items-center my-4'>
                    <Image className='w-20 h-20 rounded-full' source={{ uri: 'https://imgur.com/QhmOeZG.png' }}/>
                    <View className='p-4'>
                        <Text className='font-bold text-lg'>Zachary Vasquez</Text>
                        <Text>July 26th, 2023</Text>
                    </View>
                </View>

                <View className='flex-row p-2 rounded items-center'>
                    <Text className='text-base pr-2'>Filter</Text>
                    <AntDesign name='downcircle' size={16} color='black' />
                </View>

                <View className='flex-row items-center justify-between p-2 bg-slate-300 rounded'>
                    <View className='flex-row items-center'>
                        <View className='w-8 h-8 bg-red-400 rounded-full mr-2'></View>
                        <Text>Task Name</Text>
                    </View>
                    <AntDesign name='star' size={20} color='gold' />
                    {/* <AntDesign name='staro' size={20} color='black' /> */}
                </View>

            </View>

        </SafeAreaView>
    );
}

