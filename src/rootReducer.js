const DEFAULT_STATE = {
  posts: {}
}

export default function rootReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case 'ADD_POST': {
      return {
        ...state.posts, 
        [action.postId]: action.post
      }      
    }
    default: 
      return state;
  }
}