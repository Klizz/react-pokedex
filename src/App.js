import React from "react";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/pokemon/:name" component={Pokemon} />
      </Switch>
    </Router>
  );
};

export default App;
