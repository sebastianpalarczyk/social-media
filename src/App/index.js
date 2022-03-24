import React from "react";
import { HashRouter, Switch, Route, Link, } from "react-router-dom";
import LoginPage from "./features/LoginPage";
import { toApp, toLogin } from "./routes";
import HomePage from "./common/HomePage";
import Dashboard from "./features/Dashboard";

const App = () => {
  return (
    <HashRouter>
      <ul>
        <li>
          <Link to={toLogin()}>Login</Link>
        </li>
        <li>
          <Link to={toApp()}>App</Link>
        </li>
      </ul>
      <Switch>
        <Route path={toApp()}>
          <Dashboard />
        </Route>
        <Route path={toLogin()}>
          <LoginPage />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
