import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import EventList from '../components/eventComponent/EventList';
import { collection, getDocs } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../config/firebase';

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

    console.log(currentUser)
    
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
                    <ScrollView className="divide-y divide-gray-200" >

                        <View className='flex-row p-2 rounded items-center'>
                            <Text className='text-base pr-2'>Filter</Text>
                            <AntDesign name='downcircle' size={16} color='black' />
                        </View>
                        
                        {/* EVENT CARDS */}
                        <View className='flex-row items-center justify-between p-2 my-1 bg-slate-300 rounded'>
                            <View className='flex-row items-center'>
                                <View className='w-8 h-8 bg-red-400 rounded-full mr-2'></View>
                                <Text>Task Name</Text>
                            </View>
                            <AntDesign name='star' size={20} color='gold' />
                            {/* <AntDesign name='staro' size={20} color='black' /> */}
                        </View>
                       
                        { loading ? 
                            <Text>Loading</Text>
                            :
                            <EventList currentUser={currentUser}/>
                        }

                    </ScrollView>
            </View>
        </SafeAreaView>
    );
}

