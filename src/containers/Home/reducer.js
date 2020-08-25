import { GET_POSTS } from "./constants";

const defaultState = {
  postsList: [],
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case GET_POSTS: {
      return { ...state, postsList: action.payload };
    }
    default:
      return state;
  }
}
