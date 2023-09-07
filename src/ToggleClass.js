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
    let loadproj, projectUl

    const LoadPorj = (l, projectUlParam) => {
        loadproj = l
        projectUl = projectUlParam
    }

    const toggleLoad = () => {
        containerDiv.classList.toggle("hidden")
        loadproj(projectUl)
    }

    return {
        containerDiv,
        toggleLoad,
        LoadPorj
    }
})()

const singleProjectDisplay = (() => {
    const container_div = document.createElement("div")
    container_div.classList += "container hidden"

    const toggleSingleProject = () => {
        container_div.classList.toggle("hidden")
    }

    return {
        container_div,
        toggleSingleProject
    }
})()

export {formContainer, loadContainer, singleProjectDisplay}