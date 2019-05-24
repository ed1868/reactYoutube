import axios from 'axios';

const KEY = 'AIzaSyB6e-Xl9tCrnTPWnZ7fo9nyAwu55cWdXcY';


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: KEY
  }
});