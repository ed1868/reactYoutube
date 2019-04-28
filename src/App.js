import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/searchBar";
import youtube from './api/youtube';

class App extends Component {
  onTermSubmit = (term) => {
    console.log(term);
    youtube.get('/search', {
      parms:{
        q:term
      }
    });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit = {this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
