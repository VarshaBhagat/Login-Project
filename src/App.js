import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./containers/Home";
import Login from "./containers/Login";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
