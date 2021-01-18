import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Landing from './components/Landing/Landing'
import './App.scss';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Route path='/'>
          <Landing />
        </Route>
        <Route path='/product/:id'>
          <h1>App</h1>
        </Route>
      </div>
    </Router>
  );
}

export default App;
