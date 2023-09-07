import { getCurrentDate, getCurrentDateAndTime } from "./Datet"

const Task = ({ taskTitle, taskDescription, taskPriority }) => {
    
    let task = {
        title: taskTitle,
        description: taskDescription,
        created: getCurrentDateAndTime(),
        priority: taskPriority,
        isComplete: false
    }
    const setTitle = (txt) => {
        task.title = txt
    }

    const getTitle = () => {
        return task.title
    }

    const setDescription = (txt) => {
        task.description = txt
    }

    const getDescription = () => {
        return task.description 
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