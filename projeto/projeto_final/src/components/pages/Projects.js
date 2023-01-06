import styles from "./Projects.module.css"
import Message from "../layout/Message"
import LinkButton from "../layout/LinkButton"
import ProjectCard from "../project/ProjectCard"
import Loading from "../layout/Loading"

import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"

function Projects() {

    const [projects, setProjects] = useState([])

    const [removeLoading, setRemoveLoading] = useState(false)

    const [projectMessage, setProjectMessage] = useState("")





    const location = useLocation()

    var message = ""

    if (location.state) {
        message = location.state.message
        console.log(message)
    }


    useEffect(() => {

        setTimeout(
            () => {
                fetch("http://localhost:5000/projects", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        setProjects(data)
                        setRemoveLoading(true)
                    })
                    .catch(err => console.log(err))
            }, 500)
    }, [])


    function removeProject(id) {

        fetch(`http://localhost:5000/projects/${id}`, {
            method: "DELETE",
            header: {
                "Content-Type": "application/json",
            },
        })
            .then(resp => resp.json())
            .then(() => {
                setProjects(projects.filter((project) => project.id !== id))

                setProjectMessage("Project removed successfully!")
            })
            .catch(err => console.log(err))

    }


    return (
        <div className={styles.box}>
            <div className={styles.tittleContainer}>
                <div>
                    <h1>My projects</h1>
                </div>

                <div className={styles.linkButtonContainer}>
                    <LinkButton to="/newproject" text="Create new project " />
                </div>
            </div>
            {message && <Message
                msg={message}
                type="success"
            />}

            {projectMessage && <Message
                msg={projectMessage}
                type="success"
            />}

            <div className={styles.container}>
                {projects.length > 0 &&
                    projects.map((project) => (
                        <ProjectCard
                            name={project.name}
                            id={project.id}
                            budget={project.budget}
                            category={project?.category?.name}
                            key={project.id}
                            handleRemove={removeProject}
                        />
                    ))}

                {!removeLoading && <Loading />}

                {removeLoading && projects.length === 0 &&

                    <p>No projects</p>

                }
            </div>
        </div>
    )
}

export default Projects