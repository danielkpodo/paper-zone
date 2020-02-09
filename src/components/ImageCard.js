import React, { useRef, useEffect } from "react";
import ReactIntense from "react-intense";
import dummyImage from "../assets/images/corvette-4815234_1920.jpg";

const Card = () => {
  const imageSelect = useRef(null);
  useEffect(() => {
    imageSelect.current.style.border = "1px solid green";
  }, []);

  return (
    <div className="card" ref={imageSelect}>
      <ReactIntense
        src={dummyImage}
        title="Jesus Reigns over all the earth"
        caption="Daniel Narh is a programmer"
        loader="uil-spin-css"
        thumbnailSrc={dummyImage}
        vertical={true}
      />
    </div>
  );
};

export default Card;
