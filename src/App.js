import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./features/HomePage";
import LoginPage from "./features/LoginPage";
import { toApp, toLogin } from "./routes";

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path={toApp()}>
          <HomePage />
        </Route>
        <Route path={toLogin()}>
          <LoginPage />
        </Route>
        <Route path="/">
                <Redirect to={toLogin()} />
            </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
