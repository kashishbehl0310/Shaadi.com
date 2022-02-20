import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const PageContainer = ({
  children
}) => {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  );
}

export default PageContainer;