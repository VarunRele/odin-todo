const formContainer = (() => {
    const container_div = document.createElement("div")
    container_div.classList += "form-container hidden"

    const toggleForm = () => {
        container_div.classList.toggle("hidden")
    }

    return {
        container_div,
        toggleForm
    }
})()

const loadContainer = (() => {
    const containerDiv = document.createElement("div")
    containerDiv.classList += "container"
    let loadproj, projectList, projectUl

    const LoadPorj = (l, projectListParam, projectUlParam) => {
        loadproj = l
        projectList = projectListParam
        projectUl = projectUlParam
    }

    const toggleLoad = () => {
        containerDiv.classList.toggle("hidden")
        loadproj(projectList, projectUl)
    }

    return {
        containerDiv,
        toggleLoad,
        LoadPorj
    }
})()

export {formContainer, loadContainer}