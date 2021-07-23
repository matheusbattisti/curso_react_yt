import ProjectForm from '../ProjectForm'

function NewProject() {
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
      })
  }

  return (
    <div>
      <h1>Criar Projeto</h1>
      <ProjectForm handleSubmit={createPost} />
    </div>
  )
}

export default NewProject
