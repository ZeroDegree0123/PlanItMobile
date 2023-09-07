import React, { useEffect, useState } from 'react';
import { Button, Text, View, SafeAreaView, TextInput } from 'react-native';
import { FIRESTORE_DB } from '../../../config/firebase';
import { addDoc, collection, getDocs, doc, setDoc } from 'firebase/firestore';

export default function ListScreen({user}) {
    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([])
    const [currentUser, setCurrentUser] = useState([])

   
    useEffect(() => {
        const getTodos = async () => {
            const todoData = collection(FIRESTORE_DB, 'todos');
            const data = await getDocs(todoData);
            const dataList = [];
            data.forEach((doc) => {
                dataList.push(doc.data());
            });
            setTodoList(dataList);
        }
        getTodos();

        const getCurrentUser = async () => {
            const userData = collection(FIRESTORE_DB, 'users');
            const data = await getDocs(userData);
            const userList = [];
            data.forEach((doc) => {
                const userEmail = doc
                // console.log(userEmail.data().email)
                if (userEmail.data().email === user.email) {
                        userList.push(doc.id);
                    };
                });
                setCurrentUser(userList)
            }; 
            getCurrentUser();

        const getTasks = async () => {
            const collectionRef = collection(FIRESTORE_DB, `users/${currentUser[0]}/tasks`)
            const docRef = doc(FIRESTORE_DB, )
            console.log(collectionRef)
        }
        getTasks()
        
             
        }, []);
        
        // console.log(user)
        console.log(currentUser)

        
    const addTodo = async () => {
        // const doc = doc(FIRESTORE_DB, 'users', currentUser, 'tasks', taskId)
        // const doc = addDoc(collection(FIRESTORE_DB, 'users', currentUser, 'tasks'), { title: todo, completed: false})
        console.log(doc)
        setTodo('');
    }













        
    // const doc = addDoc(collection(FIRESTORE_DB, 'users'), {email: newUser.email})
    // const doc = addDoc(collection(FIRESTORE_DB, 'users', ), { title: todo, done: false});

    // console.log(user.uid)
    return (
        <SafeAreaView className='flex-1 bg-slate-200'>
            <View className='items-center m-10'>
                <Text className='mb-4'>List of todos</Text>
                <TextInput className='text-blue-950 border border-blue-300 p-1' placeholder='Text Input Here' placeholderTextColor={"gray"} onChangeText={(text) => setTodo(text)} value={todo}/>
                <Button title='Add Todo' onPress={addTodo} disabled={todo === ''}/>
            </View>
            <View>
                {todoList.map(todo => (
                    <Text key={todo.title}>{todo.title}</Text>
                ))}
            </View>
        </SafeAreaView>
    );
}
