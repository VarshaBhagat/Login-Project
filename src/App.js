import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Route, BrowserRouter } from "react-router-dom";

import Page from "./containers/Page";
import Login from "./containers/Login";

import postsReducer from "./containers/Home/reducer";

// const middleware = [thunk];

// setup store
const store = createStore(
  combineReducers({
    postsState: postsReducer,
  }),
  composeWithDevTools()
);

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={Login} />
          <Route path="/*" component={Page} />
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
