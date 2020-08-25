import { GET_POSTS } from "./constants";

export function fetchPosts(posts) {
  return {
    type: GET_POSTS,
    payload: posts,
  };
}
