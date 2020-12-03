import React from "react";
import Login from "./Login";
import Home from "./Home";
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
      </Router>
    </Provider>
  );
}

export default App;
