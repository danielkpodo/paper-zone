import React, { Component } from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import FetchContext from "../context/FetchContext";
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
  state = {
    apiKey: "5359780-c6d363ff6ba32e57ec1ef818a",
    results: [],
    searchPhrase: "",
    isLoading: true,
    perPage: 30
  };

  componentDidMount() {
    this.pixabayFetchHandler();
  }

  pixabayFetchHandler = () => {
    this.setState({ isLoading: true });
    const url = `https://pixabay.com/api/?key=${this.state.apiKey}&q=${this.state.searchPhrase}&image_type=photo&per_page=${this.state.perPage}&safesearch=true`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({ results: data.hits, isLoading: false });
      })
      .catch(error => console.log("Failure to fetch images", error));
  };

  searchPhraseHandler = event => {
    this.setState({ searchPhrase: event.target.value }, () =>
      this.pixabayFetchHandler()
    );
  };

  render() {
    console.log("Data", this.state.results);
    return (
      <main>
        <SimpleReactLightbox>
          <Navbar />
          <Header />
          <FetchContext.Provider
            value={{
              searchPhrase: this.state.searchPhrase,
              onSearch: this.searchPhraseHandler,
              isLoading: this.state.isLoading,
              results: this.state.results
            }}
          >
            <Jumbotron>
              <SearchBox />
              <CategorySelect />
            </Jumbotron>
            <CardList />
          </FetchContext.Provider>
          <ParticlesBg type="polygon" bg={true} />
          <GithubCorner
            href="https://github.com/danielkpodo/paper-zone"
            size="65"
            bannerColor="#21243D"
            className="github"
            target="_blank"
          />
        </SimpleReactLightbox>
      </main>
    );
  }
}

export default App;
