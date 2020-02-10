import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import Card from "../components/ImageCard";

const CardList = () => {
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
