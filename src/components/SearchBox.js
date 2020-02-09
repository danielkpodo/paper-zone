import React, { useRef, useEffect } from "react";

const SearchBox = () => {
  const focusInput = useRef(null);
  useEffect(() => {
    focusInput.current.focus();
  }, []);

  return (
    <div className="ui icon input searchbox">
      <i className="search icon"></i>
      <input
        type="search"
        placeholder="Search images and filter by types..."
        ref={focusInput}
      />
    </div>
  );
};
export default SearchBox;
