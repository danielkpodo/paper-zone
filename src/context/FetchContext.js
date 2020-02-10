import React from "react";

const FetchContext = React.createContext({
  results: [],
  isLoading: true,
  searchPhrase: "",
  category: "",
  onSearch: () => {}
});

export default FetchContext;
