import React from "react";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import HomePage from "./features/HomePage";
import LoginPage from "./features/LoginPage";
import { toApp, toLogin } from "./routes";

const App = () => {
  return (
    <HashRouter>
      <ul>
        <li>
           <Link to="login">Login</Link>
        </li>
        <li>
          <Link to="/app">App</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/app">
          <HomePage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
