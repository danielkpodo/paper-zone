import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import FetchContext from "../context/FetchContext";
const Card = props => {
  return (
    <div className="card">
      <FetchContext.Consumer>
        {context =>
          context.results.map(item => {
            return (
              <SRLWrapper key={item.id}>
                <img
                  src={item.largeImageURL}
                  alt={`Photograph with 💖 by ${item.user} with ${item.downloads} downloads`}
                />
              </SRLWrapper>
            );
          })
        }
      </FetchContext.Consumer>
    </div>
  );
};

export default Card;
