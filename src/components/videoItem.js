import React, { Component } from 'react'

const VideoItem = ({video}) => {
  let imgSource = video.snippet.thumbnails.medium.url;
   
  return (
    <div>
     { video.snippet.title}

     <img src={imgSource}/>

    </div>)
  
};

export default VideoItem;


//used a const and a export at the bottom until I figure out the props situation