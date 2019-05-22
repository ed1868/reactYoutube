import React, { Component } from 'react'
import VideoItem from './videoItem';

export default class videoList extends Component {
  render() {
    const renderedList = this.props.videos.map((video) => {

      console.log(video.snippet.title);
      return <VideoItem video = {video}/>
    })
    return (
      <div>
        {renderedList}
      </div>
    )
  }
}
