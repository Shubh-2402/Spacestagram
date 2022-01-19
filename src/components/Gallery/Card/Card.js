import React, { useState } from "react";
import "./Card.css";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Skeleton } from "@mui/material";

function Card({ apod, isLoading }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="card">
      <div className="card-image">
        {isLoading ? (
          <Skeleton variant="rectangular" width={300} height={250} />
        ) : (
          <img src={apod.hdurl} />
        )}
      </div>
      <div className="card-body">
        {isLoading ? (
          <>
            <Skeleton variant="rectangular" width={300} height={10} />
            <Skeleton variant="rectangular" width={300} height={10} />
            <Skeleton variant="rectangular" width={300} height={10} />
            <Skeleton variant="rectangular" width={300} height={10} />
            <Skeleton variant="rectangular" width={300} height={10} />
          </>
        ) : (
          <p>{apod.explanation.substring(0, 500)}...</p>
        )}
      </div>
      <div className="card-footer">
        <div className="card-details">
          <h4>{apod.title}</h4>
          <small>{apod.date}</small>
        </div>
        <div
          className="like-button"
          onClick={() => {
            setIsLiked(!isLiked);
          }}
        >
          {isLiked ? (
            <Favorite sx={{ color: "#FF6464", marginRight: "10" }} />
          ) : (
            <FavoriteBorder />
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
