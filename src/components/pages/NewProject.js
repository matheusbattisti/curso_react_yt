import { useHistory } from 'react-router-dom'

import ProjectForm from '../project/ProjectForm'

import styles from './NewProject.module.css'

function NewProject() {
  const history = useHistory()

  function createPost(project) {
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
        history.push('/projects')
      })
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} />
    </div>
  )
}

export default NewProject
