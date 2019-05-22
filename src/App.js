import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/searchBar";
import youtube from './api/youtube';
import VideoList from "./components/videoList";

class App extends Component {
  state = {videos : [] }

  onTermSubmit = async (term) => {
    console.log(term);
    const response = await youtube.get('/search', {
      parms:{
        q:term
      }
    });
    console.log(response.data.items);
    const youtubeResponse = response.data.items;
    this.setState({videos: youtubeResponse});
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit = {this.onTermSubmit} />
        <p>Youtube sent {this.state.videos.length} videos back !</p>
        <VideoList videos= {this.state.videos}/>
      </div>
    );
  }
}

export default App;
