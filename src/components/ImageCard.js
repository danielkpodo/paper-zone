import React, { useContext, Fragment } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import FetchContext from "../context/FetchContext";
const Card = () => {
  const context = useContext(FetchContext);
  return (
    <div className="card">
      {context.results.map(item => (
        <Fragment key={item.id}>
          <SRLWrapper>
            <img
              key={item.id}
              src={item.largeImageURL}
              alt={`Photograph with 💖 by ${item.user} with ${item.downloads} downloads`}
            />
          </SRLWrapper>
        </Fragment>
      ))}
    </div>
  );
};

export default Card;
