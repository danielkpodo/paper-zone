import React from "react";
import Card from "../components/ImageCard";
import { SRLWrapper } from "simple-react-lightbox";

const CardList = props => {
  return (
    <SRLWrapper>
      <div className="container cardlist">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </SRLWrapper>
  );
};

export default CardList;
