import React, { Component } from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import ParticlesBg from "particles-bg";
import GithubCorner from "react-github-corner";
import Navbar from "../components/Navbar";
import Jumbotron from "../hoc/Jumbotron";
import SearchBox from "../components/SearchBox";
import CategorySelect from "../components/CategorySelect";
import Header from "../components/Header";
import CardList from "../components/CardList";
import "./App.css";

class App extends Component {
  state = {};

  render() {
    return (
      <main>
        <SimpleReactLightbox>
          <Navbar />
          <Header />
          <Jumbotron>
            <SearchBox />
            <CategorySelect />
          </Jumbotron>
          <CardList />
          <ParticlesBg type="polygon" bg={true} />
          <GithubCorner
            href="https://github.com/username/repo"
            size="65"
            bannerColor="#21243D"
            className="github"
          />
        </SimpleReactLightbox>
      </main>
    );
  }
}

export default App;
