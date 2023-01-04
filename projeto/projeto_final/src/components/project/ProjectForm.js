import styles from "./ProjectForm.module.css"
import Input from "../form/Input"
import Select from "../form/Select"
import SubmitButton from "../form/SubmitButton"

function ProjectForm({btnText}) {



    return (
        <form className={styles.form}>

            <Input
                type="text"
                text="Project name"
                name="name"
                placeholder="Insert the project name"
            />

            <Input
                type="number"
                text="Project budget"
                name="budget"
                placeholder="Insert the project budget"
            />

            <Select
                name="category_id"
                text="Choose the category"
            />

            <SubmitButton
                text={btnText}
            />

        </form>
    )
}

export default ProjectForm