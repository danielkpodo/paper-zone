import React from "react";
import img from "../assets/images/corvette-4815234_1920.jpg";

const Card = props => {
  return (
    <div className="card">
      <img src={img} alt="The lord is my shephered" />
    </div>
  );
};

export default Card;
