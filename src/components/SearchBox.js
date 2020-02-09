import React from "react";

const SearchBox = () => {
  return (
    <div className="ui icon input searchbox">
      <i className="search icon"></i>
      <input type="search" placeholder="Search images and filter by types..." />
    </div>
  );
};

export default SearchBox;
