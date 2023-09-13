import React from 'react';
import { Text, View } from 'react-native';
import { collection, doc } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../../config/firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';


import EventCard from './EventCard';

export default function EventList({ currentUser }) {
    const path = `users/${currentUser.id}/tasks`;
    const query = collection(FIRESTORE_DB, path)
    const [docs, loading, error] = useCollectionData(query)

    const docList = docs?.map((doc, id) => (
        <EventCard doc={doc} key={id}/>
    ))

    return (
        <View>
            { docList }
        </View>
    );
}
