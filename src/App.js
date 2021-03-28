import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './containers/Login';
import Home from './containers/Home';
import Dashboard from './containers/Dashboard';

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>       
        </Switch>
      </div>
    </Router>
  );
}

export default App;
