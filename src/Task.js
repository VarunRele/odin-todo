import { getCurrentDate, getCurrentDateAndTime } from "./Datet"

const Task = () => {
    
    let task = {
        duedate: getCurrentDateAndTime()
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
    return {
        setTitle,
        getTitle,
        setDescription,
        getDescription,
        getTimeCreated
    }
}

export default Task