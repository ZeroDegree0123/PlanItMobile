import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, View, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { collection, getDocs } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../config/firebase';

import TaskForm from '../components/taskComponent/TaskForm';
import TaskList from '../components/taskComponent/TaskList';
import AppButton from '../components/AppButton';

export default function HomeScreen({ user }) {
    const [currentUser, setCurrentUser] = useState()
    const [tasksList, setTasksList] = useState()
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getCurrentUser = async () => {
            const userData = await getDocs(collection(FIRESTORE_DB, 'users'));
            userData.forEach((doc) => {
                const userEmail = doc.data().email
                if (userEmail === user.email) {
                    setCurrentUser(doc);
                    setLoading(false);
                }    
            })
        }
        getCurrentUser();

    }, [])

    return (
        <SafeAreaView className='bg-sky-100 flex-1'>
            <View className='mx-4'>
                <View className='flex-row items-center my-4'>
                    <Image className='w-20 h-20 rounded-full' source={{ uri: 'https://imgur.com/QhmOeZG.png' }}/>
                    <View className='p-4'>
                        <Text className='font-bold text-lg'>
                            { loading ?
                                <Text>loading...</Text>
                                :
                                <Text>Welcome {currentUser.data().name.toUpperCase()}</Text>
                            }
                        </Text>
                        <Text>July 26th, 2023</Text>
                    </View>
                </View>
                <View className='flex-row p-2 rounded items-center'>
                    <Text className='text-base pr-2'>Filter</Text>
                    <AntDesign name='downcircle' size={16} color='black' />
                </View>
                <ScrollView className="h-max divide-y divide-gray-200" >
                    
                    {/* EVENT CARDS */}
                    
                    { loading ? 
                        <Text>loading...</Text>
                        :
                        <TaskList currentUser={currentUser}/>
                    }
                </ScrollView>
                <View className="flex-1 flex-row justify-center p-4">
                    { open ? 
                        
                        <View className='absolute w-2/3'>
                            <TaskForm open={open} setOpen={setOpen} path={`users/${currentUser.id}/tasks`}/>
                        </View>
                        :
                        <AppButton title={<AntDesign name="plus" size={24} color="white" />} onPress={() => setOpen(true)} styles='justify-center items-center w-12 h-12 bg-blue-400 border-sky-100 border-2 rounded-full mr-2 shadow-md'/>
                    }
                </View>
            </View>
        </SafeAreaView>
    );
}

