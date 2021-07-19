import Item from './Item'

function List() {
  return (
    <div>
      <h1>Minha Lista de Marcas:</h1>
      <ul>
        <Item marca="Ferrari" />
        <Item marca="Fiat" />
        <Item marca="Honda" />
      </ul>
    </div>
  )
}

export default List
