import { useState } from 'react'

function Condicional() {
  const [email, setEmail] = useState()
  const [userEmail, setUserEmail] = useState()

  function enviarEmail() {
    setUserEmail(email)
  }

  function limparEmail() {
    setUserEmail('')
  }

  return (
    <div>
      <h2>Cadastre seu email:</h2>
      <input
        type="email"
        placeholder="Insira seu e-mail..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={enviarEmail}>Enviar e-mail</button>
      {userEmail && (
        <div>
          <p>O email do usuário é: {userEmail}</p>
          <button onClick={limparEmail}>Limpar Email</button>
        </div>
      )}
    </div>
  )
}

export default Condicional
