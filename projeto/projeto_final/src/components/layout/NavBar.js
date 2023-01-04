import { Link } from "react-router-dom"

import styles from "./Navbar.module.css"

import logo from "../../img/costs_logo.png"

import Container from "./Container"

function NavBar() {


    return (
        <nav className={styles.box}>



            <Container>

                <div className={styles.boxLeft}>
                    <Link to="/">
                        <img className={styles.img} src={logo} alt="Costs" />
                    </Link>
                </div>

                <div className={styles.boxRigth}>
                    <ul className={styles.list}>
                        <li className={styles.itemBox}>
                            <Link className={styles.item} to="/">Home</Link>
                        </li>

                        {<li className={styles.itemBox}>
                            <Link to="/projects" className={styles.item} >Projects</Link>
                        </li>}

                        <li className={styles.itemBox}>
                            <Link to="/company" className={styles.item} >Company</Link>
                        </li>

                        <li className={styles.itemBox}>
                            <Link to="/contact" className={styles.item} >Contact</Link>
                        </li>

                    </ul>
                </div>

            </Container>
        </nav>
    )
}

export default NavBar