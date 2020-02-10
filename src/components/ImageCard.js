import React from "react";
import dummyImage from "../assets/images/igor-miske-oLhTLD-RBsc-unsplash.jpg";

const Card = () => {
  return (
    <div className="card hover01">
      <img src={dummyImage} alt="The lord is my shephered" />
    </div>
  );
};

export default Card;
