import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './components/Landing/Landing'
import NVBR from './components/Navbar/Navbar'
import FTR from './components/Footer/Footer'
import './App.scss'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/product/:id'>
            <h1>App</h1>
          </Route>
          <Route path='/' exact>
            <NVBR/>
            <Landing />
            <FTR />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App