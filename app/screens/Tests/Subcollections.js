import React from 'react';
import { Text, View, SafeAreaView, ScrollView } from 'react-native';
import { FIRESTORE_DB } from '../../../config/firebase';
import { collection } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore'

import ChildrenList from './ChildrenList';
import AddNew from './AddNew';

export default function Subcollections() {
    const query = collection(FIRESTORE_DB, 'users')
    const [docs, loading, error] = useCollectionData(query)

    const docList = docs?.map((doc) => (
        <View key={Math.random()} >
            <Text>User: {doc.name}</Text>
            <ChildrenList path={`users/${doc.name}/tasks`}/>
        </View>
    ))

    return (
        <SafeAreaView className="flex-1 items-start justify-center m-10">
            <ScrollView className="w-max">
                {/* <Text>Hello Subcollections</Text> */}
                {loading && <Text>Loading...</Text>}
                {docList}
                <Text className="text-lg mt-10">Add a new User here...</Text>
                <AddNew path={`users/`}/>
            </ScrollView>
        </SafeAreaView>
    );
}
