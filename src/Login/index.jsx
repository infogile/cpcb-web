import React, { useState } from "react";
import store from "../redux/store";
import { tryLogin } from "../redux/services";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export default function Login() {
  const { loginValidated, isLoading } = useSelector(
    (state) => state.loginReducer
  );
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onLogin = () => {
    store.dispatch(tryLogin(username, password));
  };
  if (isLoading) {
    return "loading";
  }
  if (loginValidated) {
    return <Redirect to="/home" />;
  }

  return (
    <div>
      <h1>CPCB</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" onClick={onLogin} />
    </div>
  );
}
