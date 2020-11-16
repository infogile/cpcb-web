import React from "react";
import Login from "./Login";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./redux/store";
import "./App.css";

const LoginSuccess = () => {
  return "login success";
};
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/home" exact>
          <LoginSuccess />
        </Route>
      </Router>
    </Provider>
  );
}

export default App;
