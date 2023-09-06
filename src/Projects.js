import Task from "./Task";

const Projects = ({title, description, dueDate}) => {
    let project = {
        title: title,
        description: description,
        tasks: [],
        dueDate: dueDate
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

    const createAProject = (proj) => {
        const p1 = Projects(proj)
        projs.push(p1)
        console.log(projs)
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