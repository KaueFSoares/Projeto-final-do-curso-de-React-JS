import styles from "./Project.module.css"

import { parse, v4 as uuidv4 } from "uuid"

import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import Loading from "../layout/Loading"
import ProjectForm from "../project/ProjectForm"
import Message from "../layout/Message"
import ServiceForm from "../service/ServiceForm"

function Project() {

    const { id } = useParams()

    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)
    const [message, setMessage] = useState("")
    const [type, setType] = useState()


    useEffect(() => {

        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then(resp => resp.json())
                .then((data) => {
                    setProject(data)
                })
                .catch(err => console.log(err))
        }, 500)

    }, [id])



    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }

    function toggleServiceForm() {
        setShowServiceForm(!showServiceForm)
    }


    function editPost(project) {
        setMessage("")

        if (project.budget < project.cost) {
            setMessage("Budget can't be smaller than the project cost!")
            setType("error")
            return false
        }

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(project),
        })
            .then(resp => resp.json())
            .then((data) => {

                setProject(data)
                setShowProjectForm(false)

                setType("success")
                setMessage("Project upadated!")

            })
            .catch((err) => console.log(err))


    }

    function createService(project) {

        // last service

        const lastService = project.services[project.services.length - 1]

        lastService.id = uuidv4()

        const lastServiceCost = lastService.cost

        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

        //maximum value validation

        if (newCost > parseFloat(project.budget)) {
            setMessage("Budget broken, verify the service cost!")
            setType("error")
            project.services.pop()
            return false
        }

        // add service cost to project cost

        project.cost = newCost

        // update project

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(project)
        })
            .then(resp => resp.json())
            .then((data) => {
                //exibir serviços
                setMessage("Service included successfully")
                setType("success")
                setShowServiceForm(false)
            })
            .catch((err) => console.log(err))
    }

    return (
        <>
            {project.name ? (
                <div className={styles.projectDetails}>
                    <div className={styles.container}>

                        {message &&
                            <Message
                                type={type}
                                msg={message}
                            />
                        }

                        <div className={styles.detailsContainer}>
                            <h1>Project: {project.name}</h1>
                            <button onClick={toggleProjectForm} className={styles.btn}>
                                {!showProjectForm ? "Edit project" : "Close"}
                            </button>

                            {!showProjectForm ? (
                                <div className={styles.projectInfo}>
                                    <p>
                                        <span>Categoria: </span> {project.category.name}
                                    </p>

                                    <p>
                                        <span>Full budget: </span> R${project.budget}
                                    </p>

                                    <p>
                                        <span>Spent budget: </span> R${project.cost}
                                    </p>
                                </div>
                            ) : (
                                <div className={styles.projectInfo}>
                                    <ProjectForm
                                        handleSubmit={editPost}
                                        btnText="Finish edition"
                                        projectData={project}
                                    />
                                </div>
                            )}
                        </div>


                        <div className={styles.serviceFormContainer}>
                            <h2>Add a new service:</h2>

                            <button onClick={toggleServiceForm} className={styles.btn}>
                                {!showServiceForm ? "Add service" : "Close"}
                            </button>

                            <div className={styles.projectInfo}>
                                {showServiceForm && (
                                    <ServiceForm
                                        handleSubmit={createService}
                                        btnText="Add service"
                                        projectData={project}
                                    />
                                )}
                            </div>
                        </div>

                        <h2>Services</h2>

                        <div className={styles.servicesContainer}>

                        </div>

                    </div>
                </div>
            ) : (
                <Loading />
            )}
        </>
    )
}

export default Project