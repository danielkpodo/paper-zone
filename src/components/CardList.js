import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import Card from "../components/ImageCard";

const CardList = props => {
  return (
    <SRLWrapper>
      <div className="container cardlist">
        {props.images.map(image => (
          <Card />
        ))}
      </div>
    </SRLWrapper>
  );
};

export default CardList;
