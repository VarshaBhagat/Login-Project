import { FETCH_POST, FETCH_COMMENTS } from "./constants";

const defaultState = {
  post: {
    title: "",
    body: "",
  },
  comments: [],
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case FETCH_POST: {
      return { ...state, post: action.payload };
    }
    case FETCH_COMMENTS: {
      return { ...state, comments: action.payload };
    }
    default:
      return state;
  }
}
