import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  padding: 24px;
  border-radius: 5px;
  border: 1px solid #eee;

  background: white;
`;

const Card = ({
  children,
  ...props
}) => {
  return (
    <StyledCard {...props}>
      {children}
    </StyledCard>
  );
}

export default Card;