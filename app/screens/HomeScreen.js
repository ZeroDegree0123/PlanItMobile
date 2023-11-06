import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, View, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../config/firebase';

import TaskForm from '../components/taskComponent/TaskForm';
import TaskList from '../components/taskComponent/TaskList';
import AppButton from '../components/AppButton';
import ImagePicker from '../components/ImagePicker';
import AppModal from '../components/AppModal';

export default function HomeScreen({ currentUser, profileImageList, loading }) {
    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false)
    const [profileImage, setProfileImage] = useState('https://imgur.com/mmwcBbh.png')

    const handleModal = () => {
        setOpenModal(true);
    }

    // 4 renders, 3 undefined
    console.log(profileImageList[1])

    return (
        (loading ?
            <Text>loading</Text>
            :
            <>
                <SafeAreaView className='bg-sky-100 flex-1 justify-center items-center'>
                    <View className='mx-4 w-full'>

                        <View className='flex-row items-center m-2 '>
                            <ImagePicker image={profileImage} onPress={handleModal} />
                            <View className='p-4'>
                                <Text className='font-bold text-lg'>
                                    <Text>Welcome {currentUser.data().name.toUpperCase()}</Text>
                                </Text>
                                <Text>July 26th, 2023</Text>
                            </View>
                        </View>

                        <View className='flex-row p-2 mx-2 rounded items-center'>
                            <Text className='text-base pr-2'>Filter</Text>
                            <AntDesign name='downcircle' size={16} color='black' />
                        </View>

                        <ScrollView className="divide-y divide-gray-200 mb-auto h-full">
                            <TaskList currentUser={currentUser} />
                        </ScrollView>

                    </View>

                    <View className="absolute flex-row justify-end w-full bottom-0 p-2">
                        {open ?
                            <View className='w-2/3'>
                                <TaskForm open={open} setOpen={setOpen} path={`users/${currentUser.id}/tasks`} />
                            </View>
                            :
                            <AppButton title={<AntDesign name="plus" size={24} color="white" />} onPress={() => setOpen(true)} styles='justify-center items-center w-12 h-12 bg-blue-400 border-sky-100 border-2 rounded-full mr-2 shadow-md' />
                        }
                    </View>

                    <AppModal openModal={openModal} setOpenModal={setOpenModal} profileImageList={profileImageList} setProfileImage={setProfileImage} />
                </SafeAreaView>
            </>

        )
    );
}

