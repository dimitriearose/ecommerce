import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Landing from "./components/Landing/Landing"
import FTR from "./components/Footer/Footer"
import SNUP from "./components/Signup/Signup"
import "./App.scss"
import "./bootstrap.css"

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/product/:id'>
            <h1>App</h1>
          </Route>
          <Route path='/' exact>
            <Landing />
            <FTR />
          </Route>
          <Route path='/signup'>
            <SNUP />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
