import { Projects, ProjectList } from "./Projects"
import { formContainer, loadContainer } from "./ToggleClass"
import './style.css'

const Loadpage = () => {
    const containerDiv = loadContainer.containerDiv
    

    const createProjectButton = document.createElement("button")
    createProjectButton.classList += "project-create"
    createProjectButton.textContent = "Add a Project"

    const projectsUl = document.createElement("ul")
    projectsUl.classList += "project-names"
    loadContainer.LoadPorj(ProjectListDom, ProjectList.getProjectList(), projectsUl)
    ProjectListDom(ProjectList.getProjectList(), projectsUl)

    createProjectButton.onclick = () => {
        loadContainer.toggleLoad()
        formContainer.toggleForm()
        ProjectListDom(ProjectList.getProjectList(), projectsUl)
    }

    appendChildren(containerDiv, [createProjectButton, projectsUl])
    document.body.appendChild(containerDiv)
}

const appendChildren = (parentDom, childDoms) => {
    childDoms.forEach(child => {
        parentDom.appendChild(child)
    });
}

const ProjectListDom = (projs, ul) => {
    ul.innerHTML = ""
    projs.map(proj => ul.innerHTML += `<li>${proj.project.title}</li>`)
}

export default Loadpage