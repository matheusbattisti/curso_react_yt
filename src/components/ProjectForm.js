import { useState } from 'react'
import Input from './form/Input'

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
    <div>
      <form onSubmit={submit}>
        <Input
          type="text"
          text="Nome do projeto"
          name="name"
          placeholder="Insira o nome do projeto"
          handleOnChange={handleChange}
        />
        <div>
          <label htmlFor="budget">Orçamento do projeto:</label>
          <input
            type="number"
            name="budget"
            id="budget"
            placeholder="Insira o orçamento total"
            onChange={(e) => setProject({ ...project, budget: e.target.value })}
          />
        </div>
        <div>
          <button>Criar projeto</button>
        </div>
      </form>
    </div>
  )
}

export default ProjectForm
