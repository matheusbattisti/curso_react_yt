import Button from './Button'

import styles from './Evento.module.css'

function Evento() {
  function meuEvento() {
    console.log('Opa, fui ativado!')
  }

  function meuSegundoEvento() {
    console.log('Segundo evento!!')
  }

  return (
    <div className={styles.spacing}>
      <Button event={meuEvento} text="Primeiro Evento" />
      <Button event={meuSegundoEvento} text="Segundo Evento" />
    </div>
  )
}

export default Evento
