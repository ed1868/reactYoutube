import React, { Component } from 'react'
import VideoItem from './videoItem';

export default class videoList extends Component {
  render() {
    const renderedList = this.props.videos.map((video) => {
      return <VideoItem />
    })
    return (
      <div>
        {renderedList}
      </div>
    )
  }
}
