import React from "react";
import dummyImage from "../assets/images/corvette-4815234_1920.jpg";

const Card = props => {
  return (
    <div className="card">
      <img src={dummyImage} alt="The lord is my shephered" />
    </div>
  );
};

export default Card;
