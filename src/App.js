import React from "react";
import Login from "./Login";
import Home from "./Home";
import SPCBHome from "./spcb";
import HeadofficeHome from "./headoffice"
import PublicLink from "./PublicLink";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./redux/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/spcb">
          <SPCBHome />
        </Route>
        <Route path="/headoffice">
          <HeadofficeHome />
        </Route>
        <Route path="/public_cpcb" exact>
          <PublicLink />
        </Route>
      </Router>
    </Provider>
  );
}

export default App;
