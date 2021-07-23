import { Link } from 'react-router-dom'

import styles from './Home.module.css'
import savings from '../../img/savings.svg'

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>Bem-vindo ao Costs</h1>
      <p>Comece a gerenciar os seus projetos agora mesmo!</p>
      <Link to="/newproject">Criar Projeto</Link>
      <img src={savings} alt="Savings" />
    </section>
  )
}

export default Home
