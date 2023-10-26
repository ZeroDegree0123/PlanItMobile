import React from 'react';
import { Text, View, ScrollView, Button, SafeAreaView } from 'react-native';
import { FIREBASE_AUTH } from '../../config/firebase';

export default function AccountScreen({ user }) {
    // console.log(user)
    return (
        <SafeAreaView className='flex-1  bg-sky-100'>
            <ScrollView className='flex-1 p-5 '>

                <Text className='text-lg'>Account Info</Text>
                <View className='p-10 my-2 bg-blue-200'>
                    <Text className='text-base'>Email: {user.email}</Text>
                </View>

                <Text className='text-lg'>Tasks OverView</Text>
                <View className='flex-row my-2 w-max'>
                    <View className='bg-blue-200 border-sky-100 border-2 rounded py-10 w-1/2 items-center'>
                        <Text className='text-base'>0</Text>
                        <Text className='text-base'>Completed</Text>
                    </View>
                    <View className='bg-blue-200 border-sky-100 border-2 rounded py-10 w-1/2 items-center'>
                        <Text className='text-base'>0</Text>
                        <Text className='text-base'>UnCompleted</Text>
                    </View>
                </View>

                <View>
                    <Text className='text-lg'>Tasks in the next 7 days</Text>
                </View>

                <Button title="Logout" onPress={() => FIREBASE_AUTH.signOut()} />
            </ScrollView>
        </SafeAreaView>
    );
}

