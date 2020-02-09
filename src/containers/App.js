import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../hoc/Jumbotron";
import SearchBox from "../components/SearchBox";
import CategorySelect from "../components/CategorySelect";
import Header from "../components/Header";
import "./App.css";

class App extends Component {
  state = {};

  render() {
    return (
      <main>
        <Navbar />
        <Header />
        <Jumbotron>
          <SearchBox />
          <CategorySelect />
        </Jumbotron>
      </main>
    );
  }
}

export default App;
