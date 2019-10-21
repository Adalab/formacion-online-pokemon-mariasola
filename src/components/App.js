import React from "react";
// import logo from "./logo.svg";
import "../stylesheets/App.css";
import getDataFromApi from "../services/getDataFromApi";
import PokeList from "./PokeList";
import Filter from "./Filter";
import Header from "./Header";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      inputValue: ""
    };
    this.searchByName = this.searchByName.bind(this);
  }
  componentDidMount() {
    getDataFromApi()
      .then(promise => Promise.all(promise))
      .then(pokemons => {
        this.setState({ pokemons: pokemons });
      });
  }
  searchByName(ev) {
    const inputValue = ev.currentTarget.value;
    return this.setState({
      inputValue: inputValue
    });
  }
  render() {
    let filter = this.state.pokemons.filter(pokemon => {
      return pokemon.name
        .toUpperCase()
        .includes(this.state.inputValue.toUpperCase());
    });
    return (
      <div className="App">
        <Header />
        <Filter searchByName={this.searchByName} />
        <PokeList pokemons={filter} />
      </div>
    );
  }
}

export default App;
