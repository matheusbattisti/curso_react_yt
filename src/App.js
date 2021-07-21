import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Contato from './components/pages/Contato'
import Empresa from './components/pages/Empresa'
import Home from './components/pages/Home'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/empresa">
          <Empresa />
        </Route>
        <Route path="/contato">
          <Contato />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
