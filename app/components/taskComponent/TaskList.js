import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../../config/firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';


import TaskCard from './TaskCard';

export default function TaskList({ currentUser }) {
    const path = `users/${currentUser.id}/tasks`;
    const [taskList, setTaskList] = useState([])

    useEffect(() => {
        const getTasks = async () => {
            const taskData = await getDocs(collection(FIRESTORE_DB, path))
            const taskArray = [];
            taskData.forEach((doc) => {
                taskArray.push(doc)
            })
            setTaskList(taskArray)
        }
        getTasks();
    }, [])

    const docList = taskList?.map((doc) => (
        <TaskCard doc={doc.data()} id={doc.id} key={doc.id}/>
    ))

    return (
        <View>
            { docList }
        </View>
    );
}
