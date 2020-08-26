import { FETCH_POSTS } from "./constants";

export function fetchPosts() {
  return function (dispatch) {
    return fetch("http://jsonplaceholder.typicode.com/posts")
      .then(
        (response) => response.json(),
        (error) => console.log("An error occurred.", error)
      )
      .then((json) => {
        dispatch(fetchPost(json));
      });
  };
}

export function fetchPost(posts) {
  return {
    type: FETCH_POSTS,
    payload: posts,
  };
}
