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
    default: 
      return state;
  }
}