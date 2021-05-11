import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Login  from "./components/login";
import QueryNode from "./components/QueryNode"

function App() {
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
          <Link to="/querynode">Query Node</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/querynode">
          <QueryNode />
        </Route>
      </Switch>
    </div>
  </Router>
  )
}

export default App;
