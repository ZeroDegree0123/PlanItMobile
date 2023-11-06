import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import AppButton from './AppButton';

export default function AppModal({ openModal, setOpenModal, profileImageList, setProfileImage }) {
    if (!openModal) return;

    const handleSelectImage = (url) => {
        setProfileImage(url)
    }

    const imageList = profileImageList.map((url, key) => (
        <TouchableOpacity key={key} onPress={() => handleSelectImage(url)} className='w-1/4 h-1/6 rounded-full m-2'>
            <Image source={{ url: `${url}` }} className='w-full h-full rounded-full' />
        </TouchableOpacity>
    ))
    return (
        <View className='absolute items-end bg-sky-100 w-2/3 h-1/2 rounded shadow-lg'>
            <AppButton title='X' onPress={() => setOpenModal(false)} styles="p-3 py-2" textStyles="text-red-500 text-lg" />
            <View className='flex-row flex-wrap justify-start w-full h-full'>
                {imageList}
            </View>
        </View>
    );
}
