import { Projects, ProjectList } from "./Projects"
import { formContainer, loadContainer, singleProjectDisplay } from "./ToggleClass"
import ProjectPage from "./ProjectPage"
import Icons from './Icons'

const Loadpage = () => {
    ProjectList.setProjectList()
    const containerDiv = loadContainer.containerDiv

    const createProjectButton = document.createElement("button")
    createProjectButton.classList += "btn-project-create btn"
    createProjectButton.textContent = "Add a Project"

    const projectsUl = document.createElement("ul")
    projectsUl.classList += "project-titles-ul"
    loadContainer.LoadPorj(ProjectListDom, projectsUl)
    ProjectListDom(projectsUl)
    
    createProjectButton.onclick = () => {
        loadContainer.toggleLoad()
        formContainer.toggleForm()
        ProjectListDom(projectsUl)
    }

    appendChildren(containerDiv, [createProjectButton, projectsUl])
    document.body.appendChild(containerDiv)
}

const appendChildren = (parentDom, childDoms) => {
    childDoms.forEach(child => {
        parentDom.appendChild(child)
    });
}

const ProjectListDom = (ul) => {
    ul.innerHTML = ""
    ProjectList.getProjectList().forEach((proj, index) => {
        if (!proj.project.deleted) {
            const element = document.createElement('li')

            const plus_add = document.createElement('img')
            plus_add.src = Icons.add_btn
            plus_add.width = 15

            const deleteDiv = document.createElement('div')
            deleteDiv.className = 'delete-proj'

            const delete_btn = document.createElement('img')
            delete_btn.src = Icons.delete_btn
            delete_btn.width = 15
            deleteDiv.appendChild(delete_btn)

            const title = document.createElement('span')
            title.innerText = proj.project.title

            element.classList += "project-title-list"
            element.id = proj.project.id

            appendChildren(element, [title, plus_add, deleteDiv])
            ul.appendChild(element)

            element.addEventListener('click', (e) => {
                if (e.target === plus_add) {
                    console.log("add")
                }
                
                if (e.target === delete_btn) {
                    ProjectList.deleteProject(index)
                    ProjectListDom(ul)
                } else {
                    ProjectPage({ projObj: proj.project, proj })
                    singleProjectDisplay.toggleSingleProject()
                    loadContainer.toggleLoad()
                }

                
            })
        }
    })

}

export default Loadpage