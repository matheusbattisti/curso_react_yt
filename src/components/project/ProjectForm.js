import { useState } from 'react'
import Input from '../form/Input'

import styles from './ProjectForm.module.css'

function ProjectForm(props) {
  const [project, setProject] = useState({})

  const submit = (e) => {
    e.preventDefault()
    props.handleSubmit(project)
  }

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
        handleOnChange={handleChange}
      />
      <div>
        <button>Criar projeto</button>
      </div>
    </form>
  )
}

export default ProjectForm
