import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Home from "./Routers/Home";
import Chat from "./Routers/Chat";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/chat" component={Chat} />
          <Redirect from="*" to="/"></Redirect>
        </Switch>
      </Router>
    </>
  );
}

export default App;
