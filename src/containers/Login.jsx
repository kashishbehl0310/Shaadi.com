import React, { useState } from "react";
import styled from "styled-components";

import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input";

const StyledHeading = styled.h1`
  color: var(--dsFontPrimary);
  margin: 0;
  font-size: 22px;
  text-align: center;
  font-weight: 600;
  margin: 32px 0px;
`;

const StyledErrorMessage = styled.p`
  font-size: 12px;
  margin: 0px;
  color: red;
  text-align: center;
`;

const Login = ({ history }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let error = {};

    if (!name) {
      error = {
        message: "User name is missing",
        field: "name"
      };
    } else if (!password) {
      error = {
        message: "Password is missing",
        field: "password"
      };
    }
    return error;
  }

  const handleLogin = () => {
    const error = validate();
    if (Object.keys(error).length) {
      setError(error)
      return;
    }
    setLoading(true)

    setTimeout(() => {
      window.sessionStorage.setItem("uid", name);
      setLoading(false);
      history.push("/home");
    }, 2000);
  }

  return (
    <div>
      <Card
        className="login-card"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative"
        }}
      >
        <div
          style={{
            width: "64px",
            height: "64px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#fff",
            borderRadius: "50%",
            boxShadow: "0 -1px 0 hsl(0deg 0% 43% / 5%)",
            position: "absolute",
            top: "-30px"
          }}
        >
         <div
          style={{
            backgroundImage: "url(https://img2.shaadi.com/assests/2018/images/sprite-homepg-v5.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left -254px",
            height: "77px",
            minWidth: "77px"
          }}
         ></div>
        </div>
        <StyledHeading>Login to Shaadi.com</StyledHeading>
        <Input
          type="text"
          name={"name"}
          placeholder="User name"
          onChange={(e) => {
            setError({});
            setName(e.target.value);
          }}
          onEnter={() => {
            handleLogin();
          }}
          value={name}
          label="Username"
          hasError={error && error.field === "name"}
          errorMessage={error && error.message}
        />
        <Input
          type="password"
          name={"password"}
          placeholder="Password"
          onChange={(e) => {
            setError({});
            setPassword(e.target.value);
          }}
          onEnter={() => {
            handleLogin();
          }}
          value={password || ""}
          label="Password"
          hasError={error && error.field === "password"}
          errorMessage={error && error.message}
        />
        <div
          style={{
            marginTop: "16px",
            width: "80%"
          }}
        >
          <Button
            onClick={() => {
              handleLogin();
            }}
            disabled={!name || !password}
          >
            Login
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default Login;
