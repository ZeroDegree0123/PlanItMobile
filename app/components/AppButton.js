import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default function AppButton({ title, onPress, styles, textStyles }) {
    return (
        <TouchableOpacity onPress={onPress} className={styles}>
            <Text className={textStyles}>{title}</Text>
        </TouchableOpacity>
    );
}

{/* <View className='w-8 h-8 bg-red-400 rounded-full mr-2'></View> */ }
