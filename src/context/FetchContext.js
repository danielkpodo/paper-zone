import React from "react";

const FetchContext = React.createContext({
  data: [],
  searchPhrase: "",
  category: ""
});

export default FetchContext;
