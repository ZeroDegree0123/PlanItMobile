import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";

export default function AppButton({ onPress, styles, image }) {

    return (
        <TouchableOpacity onPress={onPress} className={styles}>
            <Image className='w-20 h-20 rounded-full' source={{ url: image }} />
        </TouchableOpacity>
    );
}
