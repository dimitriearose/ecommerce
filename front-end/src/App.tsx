import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Landing from "./components/Landing/Landing"
import FTR from "./components/Footer/Footer"
import SNUP from "./components/Signup/Signup"
import SignIn from "./components/signin/Signin"
import Create from "./components/Create/Create"
import "./App.scss"
import "./bootstrap.css"
import ProductPage from "./components/Product/ProductPage"

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/product/:id'>
            <ProductPage />
          </Route>

          <Route path='/' exact>
            <Landing />
            <FTR />
          </Route>

          <Route path='/signup'>
            <SNUP />
          </Route>

          <Route path='/signin'>
            <SignIn />
          </Route>

          <Route path='/create'>
            <Create />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
