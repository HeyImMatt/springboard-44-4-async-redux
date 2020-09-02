import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

export function fetchPosts() {
  return async function(dispatch) {
    const { data } = await axios.get(`${BASE_URL}/posts`)
    return dispatch(gotPosts(data))
  }
}

export function gotPosts(posts) {
  return {
    type: 'FETCH_POSTS',
    posts
  }
}