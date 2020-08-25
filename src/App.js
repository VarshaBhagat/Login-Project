import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Page from "./containers/Page";
import Login from "./containers/Login";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route path="/*" component={Page} />
      </BrowserRouter>
    </div>
  );
}

export default App;
