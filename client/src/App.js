import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import Chat from "./Routes/Chat";
import Home from "./Routes/Home";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/chat" exact component={Chat}></Route>
          <Redirect from="*" to="/"></Redirect>
        </Switch>
      </Router>
    </>
  );
}

export default App;
