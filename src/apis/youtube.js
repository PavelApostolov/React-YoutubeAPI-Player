import axios from 'axios';

const KEY = 'AIzaSyD7hZvsM_ByQyonuA1A44UIEk_Z3laSt1s';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
