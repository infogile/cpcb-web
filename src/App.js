import React from "react";
import Login from "./Login";
import Home from "./Home";
<<<<<<< HEAD
=======
import SpcbHome from "./spcb"
>>>>>>> 103609f... initial commit
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
<<<<<<< HEAD
=======
        <Route path="/spcb">
          <SpcbHome />
        </Route>
>>>>>>> 103609f... initial commit
      </Router>
    </Provider>
  );
}

export default App;
