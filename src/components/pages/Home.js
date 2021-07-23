import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Bem-vindo ao Costs</h1>
      <p>Comece a gerenciar os seus projetos agora mesmo!</p>
      <Link to="/newproject">Criar Projeto</Link>
    </div>
  )
}

export default Home
