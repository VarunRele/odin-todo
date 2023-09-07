const TaskModal = (task) => {
    const modalBackDiv = document.createElement('div')
    modalBackDiv.className = "back"
    
    //Inside Modal
    const modalDiv = document.createElement('div')
    modalDiv.className = "modal"

    const closeBtn = document.createElement('button')
    closeBtn.className = "btn close-modal"
    closeBtn.innerText = "X"
    
    const headDiv = document.createElement('div')
    headDiv.className = "task-head"
    const mainDiv = document.createElement('div')
    mainDiv.className = "task-main"
    const footDiv = document.createElement('div')
    footDiv.className = "task-foot"

    const taskTitle = document.createElement('h4')
    taskTitle.textContent = task.getTitle()

    const descP = document.createElement('p')
    descP.textContent = "Description:"
    descP.className = "description-title"

    const descriptionTaskP = document.createElement('p')
    descriptionTaskP.textContent = task.getDescription()
    descriptionTaskP.className = "description-task"

    const completeBtn = document.createElement('button')
    completeBtn.innerText = "Complete"
    completeBtn.classList += "btn complete-btn"

    closeBtn.onclick = () => {
        document.body.removeChild(modalBackDiv)
    }

    appendChildren(footDiv, [completeBtn])
    appendChildren(mainDiv, [descP, descriptionTaskP])
    appendChildren(headDiv, [taskTitle, closeBtn])
    appendChildren(modalDiv, [headDiv, mainDiv, footDiv])
    modalBackDiv.appendChild(modalDiv)
    document.body.appendChild(modalBackDiv)
}

const appendChildren = (parentDom, childDoms) => {
    childDoms.forEach(child => {
        parentDom.appendChild(child)
    });
}

export default TaskModal