import { useState, useEffect } from "react";
import Container from "../layout/Container";
import Loading from "../layout/Loading";
import ProjectCard from "../project/ProjectCard";

import styles from "./Project.module.css";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Para ver o loading
    setTimeout(
      () =>
        fetch("http://localhost:5000/projects", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            setProjects(data);
          }),
      0
    );
  }, []);

  return (
    <div class={styles.project_container}>
      <h1>Meus Projetos</h1>
      <Container>
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCard name={project.name} budget={project.budget} />
          ))
        ) : (
          <Loading />
        )}
      </Container>
    </div>
  );
}

export default Projects;
