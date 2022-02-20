import React from "react";

import Button from "./Button";

const Header = ({ history }) => {

  const handleLogout = () => {
    window.sessionStorage.removeItem("uid");
    history.push("/");
  }

  return (
    <div
      style={{
        width: "98%",
        display: "flex",
        justifyContent: "flex-end",
        padding: "16px 24px",
      }}
    >
      <Button
        style={{
          width: "200px",
          height: "fit-content",
          padding: "16px",
        }}
        onClick={() => {
          handleLogout();
        }}
      >Logout</Button>
    </div>
  )
}

export default Header;