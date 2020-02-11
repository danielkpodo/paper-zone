import React from "react";

const FetchContext = React.createContext({
  results: [],
  isLoading: true,
  searchPhrase: "",
  category: "",
  onSearch: () => {},
  onFilter: () => {}
});

export default FetchContext;
