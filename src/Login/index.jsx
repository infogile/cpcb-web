import React, { useState } from "react";
import store from "../redux/store";
import { tryLogin } from "../redux/services";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Text } from "../shared/Text";
import logo from "../assets/img/cpcb.jpg";
import styled from "styled-components";

const Logo = styled.div`
  float: center;
  margin-top: 40px;
`;

const Cardstyle = styled.div`
  float: center;
  padding: 20px 0px;
  margin: 40px auto;
  width: 500px;
  height: 300px;
  text-align: center;
  background: #ffffff;
  box-shadow: 0px -1px 25px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

const Forgotpass = styled.div`
  color: #00aff0;
  :hover {
    color: #4759fb;
    cursor: pointer;
  }
`;

const Button = styled.div`
  background: #00aff0;
  :hover {
    background: #00a0f0;
    cursor: pointer;
  }
  border-radius: 5px;
  width: 140px;
  height: 33px;
  color: white;
  padding-top: 14px;
  margin: 20px 0px 0px 36%;
`;

export default function Login() {
  const { loginValidated, role, isLoading } = useSelector(
    (state) => state.loginReducer
  );
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onLogin = () => {
    store.dispatch(tryLogin(username, password));
  };
  if (isLoading) {
    return "loading...";
  }
  if (loginValidated) {
    if (role === "user") {
      return <Redirect to="/home" />;
    } if (role === "user") {
      return <Redirect to="/home" />;
    } if (role === "headoffice_user") {
      return <Redirect to="/headoffice" />;
    } else if (role === "spcb_user") {
      return <Redirect to="/spcb" />;
    }
  }
  return (
    <div style={{ textAlign: "center" }}>
      <Logo>
        <img src={logo} alt="Logo" width="12%" />
      </Logo>
      <Cardstyle>
        <Text as="div" marginBottom="20px">
          Username
        </Text>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <Text as="div" marginTop="20px" marginBottom="20px">
          Password
        </Text>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <Button type="submit" onClick={onLogin}>
          Sign in
        </Button>
        <br />
        <Forgotpass onClick={onLogin}>Forgot password?</Forgotpass>
      </Cardstyle>
    </div>
  );
}
