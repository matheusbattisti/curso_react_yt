import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import styles from './Project.module.css'

import Loading from '../layout/Loading'
import Container from '../layout/Container'
import ServiceForm from '../project/ServiceForm'

function Project() {
  let { id } = useParams()
  const [project, setProject] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [services, setServices] = useState([])

  useEffect(() => {
    // Para ver o loading
    setTimeout(
      () =>
        fetch(`http://localhost:5000/projects/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            setProject(data)
          }),
      0,
    )
  }, [id])

  function toggleForm() {
    setShowForm(!showForm)
  }

  return (
    <>
      {project.name ? (
        <div className={styles.project_details}>
          <Container customClass="column">
            <div className={styles.details_container}>
              <h1>Projeto: {project.name}</h1>
              <p>
                <span>Total do orçamento:</span> R${project.budget}
              </p>
              <p>
                <span>Total utilizado:</span> R${project.cost || 0}
              </p>
            </div>
            <div className={styles.service_form_container}>
              <h2>Adicione um serviço:</h2>
              <button onClick={toggleForm}>Adicionar serviço</button>
            </div>
            {showForm && <ServiceForm />}
            <h2>Serviços:</h2>
            {services.length > 0 ? (
              <p>Lista de serviços</p>
            ) : (
              <p>Não há serviços cadastrados.</p>
            )}
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default Project
