import { FETCH_POSTS } from "./constants";

export function fetchPosts(pageNumber) {
  return function (dispatch) {
    return fetch(`https://reqres.in/api/users?page=${pageNumber}&per_page=1`)
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
