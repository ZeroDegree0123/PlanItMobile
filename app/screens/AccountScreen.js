import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, Button, SafeAreaView } from 'react-native';
import { FIREBASE_AUTH, FIRESTORE_DB } from '../../config/firebase';
import { collection, onSnapshot } from 'firebase/firestore';

import AppButton from '../components/AppButton';

export default function AccountScreen({ user, currentUser }) {
    const [tasks, setTasks] = useState([])
    const path = `users/${currentUser.id}/tasks`;

    useEffect(() => {
        onSnapshot(collection(FIRESTORE_DB, path), (snapshot) => {
            setTasks(snapshot.docs.map((doc) => doc))
        })
    }, [])

    const incompleteTasks = tasks?.filter((doc) => {
        if (doc.data().completed === false) return doc;
    })

    const completedTasks = tasks?.filter((doc) => {
        if (doc.data().completed === true) return doc;
    })

    return (
        <SafeAreaView className='flex-1 bg-sky-100'>
            <ScrollView className='p-5 mt-6'>

                <Text className='text-lg'>Account Info</Text>

                <View className='p-10 my-2 bg-blue-200'>
                    <Text className='text-base'>Email: {user.email}</Text>
                </View>

                <Text className='text-lg'>Tasks OverView</Text>

                <View className='flex-row my-2 w-max'>
                    <View className='bg-blue-200 border-sky-100 border-2 rounded py-10 w-1/2 items-center'>
                        <Text className='text-base'>{completedTasks.length}</Text>
                        <Text className='text-base'>Completed</Text>
                    </View>
                    <View className='bg-blue-200 border-sky-100 border-2 rounded py-10 w-1/2 items-center mt'>
                        <Text className='text-base'>{incompleteTasks.length}</Text>
                        <Text className='text-base'>UnCompleted</Text>
                    </View>
                </View>

                <View className="">
                    {/* <Text className='text-lg'>Tasks in the next 7 days</Text>
                    <Text className='text-sm'>coming soon...</Text> */}
                </View>

            </ScrollView>
            <AppButton title="Logout" onPress={() => FIREBASE_AUTH.signOut()} styles="justify-center items-center m-4" textStyles="text-lg text-blue-500" />
        </SafeAreaView>
    );
}

