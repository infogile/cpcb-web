import React, { useState } from "react";
import store from "../redux/store";
import { tryLogin } from "../redux/services";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
<<<<<<< HEAD
<<<<<<< HEAD
import logo from "../assets/img/cpcb.jpg";
import styled from "styled-components";

const Logo = styled.div`
  float: center;
  margin-left: 45%;
  margin-top: 40px;
`;

const Cardstyle = styled.div`
  float: center;
  padding: 20px 0px;
  margin: 25px 0px 0px 35%;
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
=======
>>>>>>> 103609f... initial commit
=======
import logo from '../assets/img/cpcb.jpg';
import styled from "styled-components";


>>>>>>> 4b91d0f... login ui

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
<<<<<<< HEAD
    return "loading...";
  }
  if (loginValidated) {
    console.log("home");
    return <Redirect to="/home" />;
  }
  return (
    <div>
      <h1>CPCB</h1>
      <Logo>
        <img src={logo} alt="Logo" width="12%" />
      </Logo>
      <Cardstyle>
        <h6>Username:</h6>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <h6>Password:</h6>
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
=======
    return "loading";
  }
  if (loginValidated) {
    return <Redirect to="/home" />;
  }

  const Logo = styled.div`
    float: center;
    margin-left:45%;
    margin-top: 40px;
  `;

  const Cardstyle = styled.div`
  float: center;
  padding: 20px 0px;
  margin: 25px 0px 0px 35%;
  width: 500px;
  height: 300px;
  text-align: center;
  background: #FFFFFF;
  box-shadow: 0px -1px 25px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  `;

  const Forgotpass = styled.div`
  color: #00AFF0;
  :hover {
    color: #4759FB;
    cursor: pointer;
  }
 `;

 const Button = styled.div`
  background: #00AFF0;
  :hover {
    background: #00a0f0;
    cursor: pointer;
  }
  border-radius: 5px;
  width: 140px;
  height: 33px;
  color: white;
  padding-top:14px;
  margin: 20px 0px 0px 36%;
 `;

  return (
    <div>
      <Logo>
      <img src={logo} alt="Logo" width="12%"/>
      </Logo>
      <Cardstyle>
      <h6>Username:</h6>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /><br/>
      <h6>Password:</h6>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
<<<<<<< HEAD
      />
      <input type="submit" onClick={onLogin} />
>>>>>>> 103609f... initial commit
=======
      /><br/>
      <Button type="submit" onClick={onLogin}>Sign in</Button><br/>
      <Forgotpass onClick={onLogin}>Forgot password?</Forgotpass>
      </Cardstyle>
>>>>>>> 4b91d0f... login ui
    </div>
  );
}
