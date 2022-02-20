import React from "react";
import styled from "styled-components";

import Card from "./Card";

const FlexDiv = styled.div`
  display: flex;
`;

const StyledHeader = styled.p`
  color: var(--dsFontPrimary);
  margin: 0px;
  margin-bottom: 6px;
`;

const StyledSpan = styled.span`
  font-size: 16px;
  color: var(--dsFontSecondary);
`;

const UserComponent = ({
  user
}) => {
  return (
    <Card
      style={{
        width: "600px",
        marginBottom: "20px"
      }}
    >
       <FlexDiv className="box m-3 user">
        <img src={user.avatar} alt={user.first_name}/>
        <div style={{
          marginLeft: "20px"
        }}>
          <StyledHeader>
            Email: <StyledSpan>{user.email}</StyledSpan>
          </StyledHeader>
          <StyledHeader>
            First Name: <StyledSpan>{user.first_name}</StyledSpan>
          </StyledHeader>
          <StyledHeader>
            Last Name: <StyledSpan>{user.last_name}</StyledSpan>
          </StyledHeader>
        </div>
      </FlexDiv>
    </Card>
  )
}

export default UserComponent;