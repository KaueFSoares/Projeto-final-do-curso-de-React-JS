import ProjectForm from "../project/ProjectForm"
import styles from "./NewProject.module.css"


function NewProject() {


    return (
        <div className={styles.box}>
            <div className={styles.container}>
                <h1>Create new project</h1>
                <p>Create your project for add services</p>
                <ProjectForm btnText="Create project" />
            </div>
        </div>
    )
}

export default NewProject