import './App.css';

function App() {

  const name = "Rafael"

  const newName = name.toLocaleUpperCase()

  function sum(a, b){
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h2>Alterando o JSX  </h2>
      <p>Olá, {newName}</p>
      <p>soma: {sum(1, 2 )}</p>
      <img src={url} alt="Minha imagem" />
    </div>
  );
}

export default App;
