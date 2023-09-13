import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { collection, getDocs } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../config/firebase';

import TaskForm from '../components/taskComponent/TaskForm';
import TaskList from '../components/taskComponent/TaskList';

export default function HomeScreen({ user }) {
    const [currentUser, setCurrentUser] = useState()
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
                                currentUser.data().name.toUpperCase()
                            }
                        </Text>
                        <Text>July 26th, 2023</Text>
                    </View>
                </View>
                    <ScrollView className="divide-y divide-gray-200" >

                        <View className='flex-row p-2 rounded items-center'>
                            <Text className='text-base pr-2'>Filter</Text>
                            <AntDesign name='downcircle' size={16} color='black' />
                        </View>
                        
                        {/* EVENT CARDS */}
                       
                        { loading ? 
                            <Text>loading...</Text>
                            :
                            <TaskList currentUser={currentUser}/>
                        }

                    </ScrollView>
                    
                    <TaskForm/>

            </View>
        </SafeAreaView>
    );
}

