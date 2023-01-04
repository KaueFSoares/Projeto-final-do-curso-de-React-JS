import styles from "./App.module.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Projects from "./components/pages/Projects";

import NavBar from "./components/layout/NavBar";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer"


function App() {
  return (

    <div className={styles.app}>
      <Router>

        <NavBar />


        <Container custonClass="min-height">

          <Routes>

            <Route path="/" exact element={<Home />}></Route>

            <Route path="/company" exact element={<Company />}></Route>

            <Route path="/contact" exact element={<Contact />}></Route>

            <Route path="/newProject" exact element={<NewProject />}></Route>

            <Route path="/projects" exact element={<Projects />}></Route>

          </Routes>

        </Container>


        <Footer />
      </Router>
    </div>

  );
}

export default App;
