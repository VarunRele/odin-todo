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

    return {
        project,
        createTask
    }
}

const ProjectList = (() => {
    let projs = []
    projs.push(Projects({ id: projs.length + 1, title: 'One', description: 'One description', dueDate: '23-4-2023' }))
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