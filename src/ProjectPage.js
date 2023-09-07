import { loadContainer, singleProjectDisplay } from "./ToggleClass"

const ProjectPage = ({ projObj, proj }) => {
    const container_div = singleProjectDisplay.container_div
    container_div.innerHTML = ""

    const title = document.createElement('div')
    title.innerText = projObj.title

    const back_btn = document.createElement('button')
    back_btn.type = 'button'
    back_btn.innerText = 'Back'

    const creatTaskBtn = document.createElement('button')
    creatTaskBtn.innerText = 'Add'

    const taskUl = document.createElement('ul')
    showAllTask(projObj, taskUl)

    creatTaskBtn.onclick = () => {
            proj.createTask()
            showAllTask(projObj, taskUl)
    }

    back_btn.onclick = () => {
        singleProjectDisplay.toggleSingleProject()
        loadContainer.toggleLoad()
    }

    appendChildren(container_div, [title, creatTaskBtn, back_btn, taskUl])
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
        taskLi.id = index
        ul.appendChild(taskLi)
    })
}

export default ProjectPage