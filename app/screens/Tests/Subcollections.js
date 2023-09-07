import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { FIRESTORE_DB } from '../../../config/firebase';
import { collection } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore'

import ChildrenList from './ChildrenList';

export default function Subcollections({user}) {
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
            {/* <Text>Hello Subcollections</Text> */}
            {loading && <Text>Loading...</Text>}
            {docList}
        </SafeAreaView>
    );
}
