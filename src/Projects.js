import Task from "./Task";

const Projects = ({id, title, description, dueDate, deleted = false}) => {
    let project = {
        id: id,
        title: title,
        description: description,
        tasks: [],
        dueDate: dueDate,
        deleted: deleted
    }

    const createTask = () => {
        const taskTitle = prompt("Title of the task")
        const taskDescription = prompt("Descripition of the task")
        const taskPriority = prompt("Priority")
        const task = Task({ taskTitle, taskDescription, taskPriority })
        project.tasks.push(task)
    }

    const createTaskInPlace = ({ taskTitle, taskDescription, taskPriority }) => {
        project.tasks.push(Task({ taskTitle, taskDescription, taskPriority }))
    }

    return {
        project,
        createTask,
        createTaskInPlace
    }
}

const ProjectList = (() => {
    let projs = []
    projs.push(Projects({ id: projs.length + 1, title: 'One', description: 'One description', dueDate: '23-4-2023' }))
    projs[0].createTaskInPlace({taskTitle: "Task for number 1", taskDescription: "Do somethings", taskPriority: 2})
    projs.push(Projects({ id: projs.length + 1, title: 'Two', description: 'Two description', dueDate: '23-4-2023'}))

    const createAProject = (proj) => {
        const p1 = Projects({ ...proj, id: projs.length + 1 })
        projs.push(p1)
    }

    const getProjectList = () => {
        return projs
    }

    return {
        createAProject,
        getProjectList
    }
})()

export default Projects
export {ProjectList}