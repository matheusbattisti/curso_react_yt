import Condicional from './components/Condicional'
import OutraLista from './components/OutraLista'

function App() {
  const meusItens = ['React', 'Vue', 'Angular']

  return (
    <div className="App">
      <Condicional />
      <OutraLista itens={meusItens} />
      <OutraLista itens={[]} />
    </div>
  )
}

export default App
