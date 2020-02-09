import React from "react";
import Tilt from "react-tilt";

const Logo = () => {
  return (
    <div className="logo">
      <Tilt className="Tilt" options={{ max: 55 }}>
        <div className="Tilt-inner">
          <h1>
            <i className="angle double right icon"></i>PaperZone
          </h1>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
