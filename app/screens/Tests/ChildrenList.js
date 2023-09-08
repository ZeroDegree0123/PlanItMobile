import React from 'react';
import { Text, View } from 'react-native';
import { FIRESTORE_DB } from '../../../config/firebase';
import { collection } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore'
import AddNew from './AddNew';

export default function ChildrenList({ path }) {
    const query = collection(FIRESTORE_DB, path)
    const [docs, loading, error] = useCollectionData(query)

    const docList = docs?.map(doc => (
        <View key={Math.random()}>
            <Text>Tasks: -{doc.title}</Text>
        </View>
    ))

    return (
        <>
        <View>
            {/* <Text>hellow</Text> */}
            {docList}
            <AddNew path={path}/>
        </View>
        </>
    );
}
