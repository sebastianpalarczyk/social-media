import React from "react";
import { HashRouter, Switch, Route, Link, } from "react-router-dom";
import HomePage from "./features/HomePage";
import LoginPage from "./features/LoginPage";
import { toApp, toLogin } from "./routes";
import { getLoginDataInLocalStorage } from "./loginDataLocalStorage";

const App = () => {
  const token = getLoginDataInLocalStorage("token");
  console.log(token)

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
          <HomePage />
        </Route>
        <Route path={toLogin()}>
          <LoginPage />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
