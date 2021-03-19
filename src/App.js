import React from 'react';
import { useSelector } from 'react-redux'
import { Login, Dashboard } from './components'
import { selectUser } from './features/userSlice'
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom'

function App() {
  const user = useSelector(selectUser)

  return (
    <div className="App">
        <Router>
        <Switch>
          <Route path="/" exact>
            {!user?.loggedIn ? <Login /> : <Redirect to="/EmployeeList" />}
          </Route>
          <Route path="/EmployeeList" exact>
            {user?.loggedIn ? <Dashboard /> : <Redirect to="/" />}
          </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
