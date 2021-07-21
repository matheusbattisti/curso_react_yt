function Saudacao({ nome }) {
  function gerarSaudacao(algumNome) {
    return `Olá, ${algumNome}, como vai?`
  }

  return <>{nome && <p>{gerarSaudacao(nome)}</p>}</>
}

export default Saudacao
