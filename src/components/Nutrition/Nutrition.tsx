import React from "react";
import "./Nutrition.css";

export default function () {
  return (
    <div className="nutritional-container">
      <h1 className="nutritional-heading">Nutritional Information</h1>
      {Array.from({ length: 47 }, (_, i) => i + 1).map((each) => (
        <img
          src={`https://tnc.dominos.co.in/images/MNI-${
            each <= 9 ? `0` : ""
          }${each}.jpg`}
          alt={`image-${each}`}
          key={each}
          className="nutritional-img"
        />
      ))}
    </div>
  );
}
