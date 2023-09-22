import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../../config/firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';


import TaskCard from './TaskCard';
import CompletedTaskCard from './CompletedTaskCard';

export default function TaskList({ currentUser }) {
    const path = `users/${currentUser.id}/tasks`;
    const [taskList, setTaskList] = useState([])
    const docRef = collection(FIRESTORE_DB, path);


    useEffect(() => {
        const getTasks = async () => {
            const taskData = await getDocs(collection(FIRESTORE_DB, path));
            const taskArray = [];
            taskData.forEach((doc) => {
                taskArray.push(doc);
            })
            setTaskList(taskArray);
        }
        getTasks();
    }, [taskList])

    // Filters for completed and uncompleted tasks
    const filteredUncompletedTasks = taskList?.filter((doc) => {
        if (doc.data().completed === false) return doc;
    })

    const filteredCompletedTasks = taskList?.filter((doc) => {
        if (doc.data().completed === true) return doc;
    })

    // Maps out cards for tasks 
    const uncompletedTasks = filteredUncompletedTasks?.map((doc) => (
        <TaskCard taskData={doc.data()} id={doc.id} key={doc.id} currentUser={currentUser}/>
    ))
    const completedTasks = filteredCompletedTasks?.map((doc) => (
        <CompletedTaskCard taskData={doc.data()} id={doc.id} key={doc.id} currentUser={currentUser}/>
    ))

    return (
        <View>
            <View>
                <Text className="p-4">Tasks</Text>
                { uncompletedTasks }
            </View>
            <View>
                <Text className="p-4">Completed Tasks</Text>
                { completedTasks }
            </View>

        </View>
    );
}
