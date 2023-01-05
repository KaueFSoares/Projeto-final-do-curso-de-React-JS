import styles from "./Project.module.css"
import Message from "../layout/Message"
import { useLocation } from "react-router-dom"

function Projects() {

    const location = useLocation()

    var message = ""

    if (location.state) {
        message = location.state.message
        console.log(message)
    }

    return (
        <div className={styles.box}>
            <h1>My projects</h1>

            {message && <Message
                msg={message}
                type="success"
            />}
        </div>
    )
}

export default Projects