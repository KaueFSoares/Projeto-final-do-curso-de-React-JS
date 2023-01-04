import styles from "./Home.module.css"
import savings from "../../img/savings.svg"
import LinkButton from "../layout/LinkButton"

function Home(){


    return (
        <section className={styles.box}>
            <h1>Welcome to <span>Costs</span></h1>
            <p>Begin creating your projets right now!</p>
            <LinkButton to = "/newproject" text = "Create new project "/>
            <img src={savings} alt = "Costs" />

        </section>
    )
} 

export default Home