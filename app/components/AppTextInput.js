import React from 'react';
import { StyleSheet, Platform, Text, TextInput, View, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function AppTextInput({ icon, ...otherProps }) {
    return (
        <View className='bg-gray-200 rounded-2xl flex-row my-5 p-3'>
            {icon && <MaterialCommunityIcons name={icon} size={20} />}           
            <TextInput style={styles.input} className='text-md mx-2 w-1/2   ' {...otherProps}/>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    }
})