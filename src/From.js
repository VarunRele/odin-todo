import { ProjectList } from './Projects'
import { formContainer, loadContainer } from './ToggleClass'

const From = () => {
    const container_div = formContainer.container_div

    const project_from = document.createElement("form")
    project_from.setAttribute('action', '#')
    project_from.classList += "forms"

    createFormElement(project_from, 'Enter title of the project: ', 'title', 'text', true)
    createFormElement(project_from, 'Description of the project: ', 'desc', 'text')
    createFormElement(project_from, 'Last date before submission: ', 'date', 'date', true)

    const submit_button = document.createElement("button")
    submit_button.type = 'submit'
    submit_button.textContent = 'Create project'
    submit_button.classList += "form-btn btn"

    project_from.addEventListener('submit', (e) => {
        e.preventDefault()
        const title = e.target.title.value
        const description = e.target.desc.value
        const dueDate = e.target.date.value
        ProjectList.createAProject({ title, description, dueDate })
        formContainer.toggleForm()
        loadContainer.toggleLoad()
    })

    project_from.appendChild(submit_button)
    container_div.appendChild(project_from)
    document.body.appendChild(container_div)
}

const createFormElement = (form, label_text, label_for, type, required = false) => {
    const field_div = document.createElement('div')
    field_div.classList += `form ${label_for} fields`

    const title_label = document.createElement('label')
    title_label.setAttribute('for', label_for)
    title_label.textContent = label_text
    const title_input = document.createElement('input')
    title_input.autocomplete = 'off'
    title_input.type = type
    title_input.name = label_for
    title_input.id = label_for
    title_input.required = required
    
    field_div.appendChild(title_label)
    field_div.appendChild(title_input)

    form.appendChild(field_div)
}


export default From
export {formContainer}