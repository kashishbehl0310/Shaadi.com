import React from "react";
import PropTypes from "prop-types";
import styled, { css, keyframes } from "styled-components";

const types = {
  rectangle: "skeleton-title",
  circle: "skeleton-circle",
  table: "skeleton-table",
};

const SkeletonAnimation = keyframes`
    0% { background-position: 0% 30% }
    50% { background-position: 100% 50% }
    100% { background-position: 0% 70% }
`

const ShineAnimation = keyframes`
    to {
      background-position:
        100% 0, /* move highlight to right */
        0 0,
        120px 0,
        120px 40px,
        120px 80px,
        120px 120px;
    }
`

const SkeletonContainer = styled.div`
    ${(props) => (props.className === "skeleton-title"
    ? css`
          background-image: linear-gradient( 110deg, #e2e2e2, #f2f2f2 40%, #e1e1e1 );
          min-height: 32px;
        `
    : css`
          background-image: linear-gradient( 110deg, #fafafa, #efefef 40%, #fbfbfb );
    `)}
    width: 100%;
    height: 100%;
    -webkit-animation: ${SkeletonAnimation} 1.25s infinite;
    -moz-animation: ${SkeletonAnimation} 1.25s infinite;
    animation: ${SkeletonAnimation} 1.25s infinite;
    border-radius: 11px;
  
  &::empty{
    margin: auto;
    width: 500px;
    height: 600px; /* change height to see repeat-y behavior */
    
    background-image:
      radial-gradient( circle 50px at 50px 50px, lightgray 99%, transparent 0 ),
      linear-gradient( 100deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 80% ),
      linear-gradient( lightgray 20px, transparent 0 ),
      linear-gradient( lightgray 20px, transparent 0 ),
      linear-gradient( lightgray 20px, transparent 0 ),
      linear-gradient( lightgray 20px, transparent 0 );
      border-radius: 11px;
  
    background-repeat: repeat-y;
  
    background-size:
      100px 200px, /* circle */
      50px 200px, /* highlight */
      150px 200px,
      350px 200px,
      300px 200px,
      250px 200px;
  
    background-position:
      0 0, /* circle */
      0 0, /* highlight */
      120px 0,
      120px 40px,
      120px 80px,
      120px 120px;
  
    animation: ${ShineAnimation} 1s infinite;
  }
`;

const Skeleton = (props) => {
  const type = types[props.type];
  return <SkeletonContainer className={type} style={props.style} />;
};

Skeleton.defaultProps = {
  type: "rectangle"
};

Skeleton.propTypes = {
  style: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
    padding: PropTypes.string,
  }),
  type: PropTypes.string,
};

export default Skeleton;
