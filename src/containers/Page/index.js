import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import CustomisedDrawer from "../../Components/Drawer";

import Home from "../Home";
import Details from "../Details";

function Page() {
  return (
    <CustomisedDrawer>
      <BrowserRouter>
        <Route path="/page/home" component={Home} />
        <Route path="/page/details" component={Details} />
      </BrowserRouter>
    </CustomisedDrawer>
  );
}

export default Page;
