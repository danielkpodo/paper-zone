import React from "react";
const Jumbotron = props => {
  return (
    <div className="jumbotron">
      <div className="form-filters ui ">{props.children}</div>
    </div>
  );
};

export default Jumbotron;
