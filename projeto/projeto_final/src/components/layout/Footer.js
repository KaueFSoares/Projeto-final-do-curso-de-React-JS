import styles from "./Footer.module.css"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"


function Footer() {

    return (
        <footer className={styles.footer}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <FaFacebook className={styles.icon}/>
                </li>

                <li className={styles.item}>
                    <FaInstagram className={styles.icon}/>
                </li>

                <li className={styles.item}>
                    <FaLinkedin className={styles.icon}/>
                </li>
            </ul>

            <p className={styles.copyright}>
                <span>Costs</span> &copy; 2023
            </p>
        </footer>
    )
}

export default Footer