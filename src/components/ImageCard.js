import React from "react";
import dummyImage from "../assets/images/reactjs-facebook-javascript-minimalism-wallpaper-preview.jpg";

const Card = () => {
  return (
    <div className="card">
      <img src={dummyImage} alt="dummy image" />
    </div>
  );
};

export default Card;
