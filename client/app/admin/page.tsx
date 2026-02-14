"use client"

import { useAddTaskMutation, useDeleteTaskMutation, useGetTaskQuery, useUpdateTaskMutation } from '@/redux/api/task.api'
import { Task } from '@/type/Task'
import { useState } from 'react'
import { Button, Table } from 'react-bootstrap'


const dashbord = () => {
    const [addTask] = useAddTaskMutation()
    const { data } = useGetTaskQuery()
    const [deleteTask] = useDeleteTaskMutation()
    const [updateTask] = useUpdateTaskMutation()
    const [Task, setTask] = useState<Task>({ title: "", desc: "" })
    const handleAddTask = async () => {
        try {

            await addTask(Task).unwrap()
            console.log("add task complete");

        } catch (error) {
            console.log(error);

        }
    }

    const handleupdateTask = async (taskData: Task) => {
        try {
            await updateTask(taskData).unwrap()


        } catch (error) {
            console.log(error);

        }
    }
    const handledeleteTask = async (id: string) => {
        try {
            await deleteTask(id).unwrap()
        } catch (error) {
            console.log(error);

        }
    }
    return <>
        <input onChange={e => setTask({ ...Task, title: e.target.value })} type="text" placeholder='enter title' />
        <input onChange={e => setTask({ ...Task, desc: e.target.value })} type="text" placeholder='enter desc' />
        <Button variant='primary' onClick={handleAddTask}>Submit</Button>
        {
            data && <Table >
                <thead>
                    <tr >
                        <th>#</th>
                        <th>title</th>
                        <th>desc</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(item => <tr key={item._id as string}>
                            <td>{item._id}</td>
                            <td>{item.title}</td>
                            <td>{item.desc}</td>
                            <td>
                                {
                                    item.publish
                                        ? <Button variant='success' onClick={e => handleupdateTask({ ...item, publish: false })}>publish</Button >
                                        : <Button variant='warning' onClick={e => handleupdateTask({ ...item, publish: true })}>unPublish</Button >
                                }
                                <Button variant='danger' onClick={e => handledeleteTask(item._id as string)}>delete</Button >
                            </td>
                        </tr>)
                    }
                </tbody>
            </Table>
        }
    </>
}

export default dashbord