import React from "react";
import Card from "./Card";
import Skeleton from "./Skeleton";

const LoadingSkeletonCard = () => {
  return (
    <Card
      className="loading-card"
      style={{
        marginBottom: "20px"
      }}
    >
      <div
        style={{
          display: "flex"
        }}
      >
        <Skeleton
          style={{
            width: "128px",
            height: "128px"
          }}
        />
        <div
          style={{
            width: "50%",
            marginLeft: "10px"
          }}
        >
          <Skeleton style={{ height: "10px" }} />
          <Skeleton style={{ height: "10px", width: "30%", marginTop: "10px" }} />
        </div>
      </div>
    </Card>
  )
}

export default LoadingSkeletonCard;