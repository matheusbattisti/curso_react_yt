import { useState } from 'react'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

import styles from './ProjectForm.module.css'

function ServiceForm(props) {
  const [service, setService] = useState({})

  const submit = (e) => {
    e.preventDefault()
    props.handleSubmit(service)
  }

  function handleChange(e) {
    setService({ ...service, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do serviço"
        name="name"
        placeholder="Insira o nome do serviço"
        handleOnChange={handleChange}
      />
      <Input
        type="number"
        text="Custo do serviço"
        name="cost"
        placeholder="Insira o valor total"
        handleOnChange={handleChange}
      />
      <Input
        type="text"
        text="Descrição do projeto"
        name="name"
        placeholder="Descreva o serviço"
        handleOnChange={handleChange}
      />
      <SubmitButton text="Criar serviço" />
    </form>
  )
}

export default ServiceForm
