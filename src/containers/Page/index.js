import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Sidebar from "../../shared/components/sidebar";

import Home from "../Home";
import Profile from "../Profile";

function Page() {
  return (
    <div className="home-container">
      <Sidebar />
      <BrowserRouter>
        <Route path="/home" component={Home} />
        <Route path="/profile" component={Profile} />
      </BrowserRouter>
    </div>
  );
}

export default Page;
