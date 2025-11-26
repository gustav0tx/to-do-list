import { Request, Response } from "express"
import Task from '../models/Task'

interface ITask {
    name: string;
    startTime: string;
    endTime: string;
}

interface IUpdateTask {
    column: string;
    value: string;
}

export const getTasks = async (req: Request, res: Response) => {
    
    const allTasks = await Task.get()

    res.json(allTasks)

}

export const createTask = async (req: Request, res: Response) => {

    const newTask: ITask = req.body

    const task = new Task(newTask.name, newTask.startTime, newTask.endTime)

    const taskCreated = await task.create()

    
    if(taskCreated) {
        
        res.status(201).json(newTask)

    }


}

export const updateTask = async (req: Request, res: Response) => {


    const { id } = req.params

    const updateTask: IUpdateTask = req.body

    const taskUpdated = await Task.update(updateTask.column, updateTask.value, `${id}`)

    if(taskUpdated) res.status(200).json(updateTask)

}

export const deleteTask = async (req: Request, res: Response) => {


    const { id } = req.params

    const taskDeleted = await Task.delete(`${id}`)

    if(taskDeleted) res.status(200).json()

}