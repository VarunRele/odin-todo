import { loadContainer, singleProjectDisplay } from "./ToggleClass"
import TaskModal from "./TaskModal"
import TaskCreateFormModal from "./TaskCreateFormModal"

const ProjectPage = ({ projObj, proj }) => {
    const container_div = singleProjectDisplay.container_div
    container_div.innerHTML = ""

    const headerDiv = document.createElement('div')
    headerDiv.classList += "header title"

    const title = document.createElement('h2')
    title.innerText = projObj.title + ": "
    title.classList += "project-title"

    const dueDateP = document.createElement('p')
    dueDateP.innerText = `Due Date: ${projObj.dueDate}`
    dueDateP.classList += "project-title date"

    appendChildren(headerDiv, [title, dueDateP])

    const back_btn = document.createElement('button')
    back_btn.type = 'button'
    back_btn.innerText = 'Back'
    back_btn.classList += 'btn back-btn'

    const creatTaskBtn = document.createElement('button')
    creatTaskBtn.innerText = 'Add a Task'
    creatTaskBtn.classList += 'btn task-btn'

    const taskUl = document.createElement('ul')
    taskUl.classList += "task-ul"
    showAllTask(projObj, taskUl)

    creatTaskBtn.onclick = () => {
            // proj.createTask()
            TaskCreateFormModal({show: showAllTask, projObj, ul: taskUl, proj})
            // showAllTask(projObj, taskUl)
    }

    back_btn.onclick = () => {
        singleProjectDisplay.toggleSingleProject()
        loadContainer.toggleLoad()
    }

    appendChildren(container_div, [headerDiv, taskUl, creatTaskBtn, back_btn])
    document.body.appendChild(container_div)
}

const appendChildren = (parentDom, childDoms) => {
    childDoms.forEach(child => {
        parentDom.appendChild(child)
    });
}

const showAllTask = (proj, ul) => {
    ul.innerHTML = ""
    proj.tasks.forEach((task, index) => {
        const taskLi = document.createElement('li')
        taskLi.innerText = task.getTitle()
        taskLi.classList += "task-li"
        if (task.getTaskObject().isComplete) {
            taskLi.classList += ' completed'
        }
        taskLi.id = index
        ul.appendChild(taskLi)

        taskLi.onclick = (e) => {
            if (e.target === taskLi) {
                TaskModal(task, showAllTask, proj, ul)
            }
        }
    })
}

export default ProjectPage