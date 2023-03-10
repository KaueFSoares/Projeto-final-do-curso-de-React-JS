import { useNavigate } from "react-router-dom"

import ProjectForm from "../project/ProjectForm"
import styles from "./NewProject.module.css"


function NewProject() {

    const navigate = useNavigate()

    function createPost(project) {

        /* initialize cost and services */
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)

                //redirect

                navigate("/projects", { state: {message: 'Project created successfuly!'} })
            })
            .catch((err) => console.log(err))

    }

    return (
        <div className={styles.box}>
            <div className={styles.container}>
                <h1>Create new project</h1>
                <p>Create your project for adding services</p>
                <ProjectForm
                    handleSubmit={createPost}
                    btnText="Create project"
                />
            </div>
        </div>
    )
}

export default NewProject