import { getCurrentDate, getCurrentDateAndTime } from "./Datet"

const Task = ({ taskTitle, taskDescription, taskPriority }) => {
    
    let task = {
        taskTitle: taskTitle,
        taskDescription: taskDescription,
        created: getCurrentDateAndTime(),
        taskPriority: taskPriority,
        isComplete: false
    }
    const setTitle = (txt) => {
        task.title = txt
    }

    const getTitle = () => {
        return task.taskTitle
    }

    const setDescription = (txt) => {
        task.description = txt
    }

    const getDescription = () => {
        return task.taskDescription 
    }

    const getTimeCreated = () => {
        return task.duedate
    }

    const setComplete = () => {
        if (task.isComplete) task.isComplete = false
        else task.isComplete = true
    }

    const getTaskObject = () => {
        return task
    }
    return {
        task,
        setTitle,
        getTitle,
        setDescription,
        getDescription,
        getTimeCreated,
        setComplete,
        getTaskObject
    }
}

export default Task