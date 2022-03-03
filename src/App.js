import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import HomePage from "./features/HomePage";

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
