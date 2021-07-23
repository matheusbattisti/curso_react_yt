import { useState, useEffect } from 'react'
import Card from '../project/Project'

function Projects() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/projects', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProjects(data)
      })
  }, [])

  return (
    <div>
      <h1>Meus Projetos</h1>
      {projects.map((project) => (
        <Card name={project.name} budget={project.budget} />
      ))}
    </div>
  )
}

export default Projects
