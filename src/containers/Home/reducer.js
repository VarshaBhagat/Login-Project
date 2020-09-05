import { FETCH_POSTS } from "./constants";

const defaultState = {
  postsList: [],
  totalPages: 10,
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case FETCH_POSTS: {
      return {
        ...state,
        postsList: action.payload.data,
        totalPages: action.payload.total_pages,
      };
    }
    default:
      return state;
  }
}
