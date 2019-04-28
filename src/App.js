import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/searchBar";


class App extends Component {
  onTermSubmit = (term) => {
    console.log('entro');
    console.log(term);
  }
  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit = {this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
