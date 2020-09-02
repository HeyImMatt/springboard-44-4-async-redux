const DEFAULT_STATE = {
  posts: {}
}

export default function rootReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case 'ADD_POST': {
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.id]: action.post
        }
      }      
    }
    case 'DELETE_POST': {
      const postsCopy = {...state.posts}
      delete postsCopy[action.id];
      return {
        ...state,
        posts: {
          ...postsCopy,
        }
      }      
    }
    case 'EDIT_POST': {
      const post = state.posts[action.id];
      post.title = action.post.title;
      post.description = action.post.description;
      post.body = action.post.body;
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.id]: {...post}
        }
      }      
    }
    case 'FETCH_POSTS': {
      return {
        ...state,
        posts: action.posts
      }
    }
    default: 
      return state;
  }
}