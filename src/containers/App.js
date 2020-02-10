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
import Fetchcontext from "../context/FetchContext";
import "./App.css";

class App extends Component {
  state = {
    apiKey: "5359780-c6d363ff6ba32e57ec1ef818a",
    results: [],
    searchPhrase: "",
    isLoading: true,
    perPage: 100
  };

  componentDidMount() {
    this.pixabayFetchHandler();
  }

  pixabayFetchHandler = () => {
    this.setState({ isLoading: true });
    const url = `https://pixabay.com/api/?key=${this.state.apiKey}&q=${this.state.searchPhrase}&image_type=photo&pretty=true`;
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
    console.log("Results", this.state.results);
    return (
      <main>
        <SimpleReactLightbox>
          <Navbar />
          <Header />
          <Fetchcontext.Provider value={{ onSearch: this.searchPhraseHandler }}>
            <Jumbotron>
              <SearchBox />
              <CategorySelect />
            </Jumbotron>
            <CardList />
          </Fetchcontext.Provider>
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
