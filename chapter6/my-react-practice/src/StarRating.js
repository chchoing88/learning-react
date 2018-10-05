import React, { Component } from "react";
import PropTyeps from "prop-types";
import Star from "./Star";

const StarRating = ({ starsSelected = 0, totalStars = 5, onRate = f => f }) => (
  <div className="star-rating">
    {[...Array(totalStars)].map((n, i) => (
      <Star
        key={i}
        selected={i < starsSelected}
        onClick={() => onRate(i + 1)}
      />
    ))}
    <p>
      별점 : {starsSelected} / {totalStars}
    </p>
  </div>
);

StarRating.PropTyeps = {
  totalStars: PropTyeps.number
};

StarRating.defaultProps = {
  totalStars: 5
};

export default StarRating;
