import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { Route, BrowserRouter } from "react-router-dom";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import Page from "./containers/Page";
import Login from "./containers/Login";

import postsReducer from "./containers/Home/reducer";
import postReducer from "./containers/Details/reducer";

import "./app.css";

const rootReducer = combineReducers({
  postsState: postsReducer,
  postState: postReducer,
});

const middlewares = [thunkMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);
const store = createStore(rootReducer, composeWithDevTools(middlewareEnhancer));

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <BrowserRouter>
          <Route exact path="/login" component={Login} />
          <Route path="/page/*" component={Page} />
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
