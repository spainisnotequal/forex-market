import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./components/HomePage";
import GoldPage from "./components/GoldPage";
import SilverPage from "./components/SilverPage";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/gold" component={GoldPage} />
        <Route path="/silver" component={SilverPage} />
      </Switch>
    </div>
  );
}

export default App;
