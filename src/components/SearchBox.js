import React, { useRef, useEffect } from "react";
import FetchContext from "../context/FetchContext";

const SearchBox = () => {
  const focusInput = useRef(null);
  useEffect(() => {
    focusInput.current.focus();
  }, []);

  return (
    <div className="ui icon input searchbox">
      <i className="search icon"></i>
      <FetchContext.Consumer>
        {context => {
          return (
            <input
              type="search"
              placeholder="Search images and filter by types..."
              ref={focusInput}
              onChange={context.onSearch}
            />
          );
        }}
      </FetchContext.Consumer>
    </div>
  );
};
export default SearchBox;
