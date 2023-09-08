const TaskCreateFormModal = ({show, projObj, ul, proj}) => {
    const modalBackDiv = document.createElement('div')
    modalBackDiv.className = "back"

    const modalDiv = document.createElement('div')
    modalDiv.className = "modal task-modal"

    const closeBtn = document.createElement('button')
    closeBtn.className = "btn close-modal"
    closeBtn.innerText = "X"

    const taskCreateForm = document.createElement('form')
    taskCreateForm.id = 'taskForm'

    // Title div
    const titleDiv = document.createElement('div')
    titleDiv.className = 'task-title-form task-form'

    const titleLabel = document.createElement('label')
    titleLabel.innerText = 'Title of the Task: '
    titleLabel.setAttribute('for', 'title-name')

    const titleInput = document.createElement('input')
    titleInput.type = 'text'
    titleInput.name = 'titleName'
    titleInput.id = 'title-name'
    titleInput.required = true
    // //

    // Description Div
    const descriptionDiv = document.createElement('div')
    descriptionDiv.className = 'task-desc-form task-form'

    const descriptionLabel = document.createElement('label')
    descriptionLabel.textContent = 'Description: '
    descriptionLabel.setAttribute('for', 'desc')

    const descriptionInput = document.createElement('input')
    descriptionInput.type = 'textarea'
    descriptionInput.name = 'desc'
    descriptionInput.id = 'desc'
    // //

    // Priority Div
    const prioriyDiv = document.createElement('div')
    prioriyDiv.className += 'task-priority-form task-form'

    const priorityLabel = document.createElement('label')
    priorityLabel.textContent = 'Priority: '
    priorityLabel.setAttribute('for', 'priority')

    const priorityInput = document.createElement('input')
    priorityInput.type = 'number'
    priorityInput.name = 'priority'
    priorityInput.id = 'priority'
    // // 

    const formSubmit = document.createElement('button')
    formSubmit.innerText = 'Create'
    formSubmit.classList += 'btn form-btn'
    formSubmit.type = 'submit'
    formSubmit.setAttribute('form', 'taskForm')

    taskCreateForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const taskTitle = e.target.titleName.value
        const taskDescription = e.target.desc.value
        const taskPriority = e.target.priority.value
        proj.createTaskInPlace({ taskTitle, taskDescription, taskPriority })
        closeBtn.click()
        show(projObj, ul)
    })

    closeBtn.onclick = () => {
        document.body.removeChild(modalBackDiv)
    }

    appendChildren(prioriyDiv, [priorityLabel, priorityInput])
    appendChildren(descriptionDiv, [descriptionLabel, descriptionInput])
    appendChildren(titleDiv, [titleLabel, titleInput])
    appendChildren(taskCreateForm, [titleDiv, descriptionDiv, prioriyDiv])
    appendChildren(modalDiv, [closeBtn, taskCreateForm, formSubmit])
    modalBackDiv.appendChild(modalDiv)
    document.body.appendChild(modalBackDiv)
}

const appendChildren = (parentDom, childDoms) => {
    childDoms.forEach(child => {
        parentDom.appendChild(child)
    });
}

export default TaskCreateFormModal