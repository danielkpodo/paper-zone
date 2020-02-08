import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="navigation">
      <div className="ui menu">
        <div className="header item logo">
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
