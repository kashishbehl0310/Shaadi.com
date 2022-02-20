import React from "react";
import styled from "styled-components";

import Button from "./Button";

const StyledDiv = styled.div`
  width: 98%;
  display: flex;
  justify-content: flex-end;
  padding: 16px 24px;
  @media (max-width: 570px) {
    width: 88%;
  }
`;

const Header = ({ history }) => {

  const handleLogout = () => {
    window.sessionStorage.removeItem("uid");
    history.push("/");
  }

  return (
    <StyledDiv>
      <Button
        className="login-button"
        style={{
          height: "fit-content",
          padding: "16px",
        }}
        onClick={() => {
          handleLogout();
        }}
      >Logout</Button>
    </StyledDiv>
  )
}

export default Header;