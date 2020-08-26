import { FETCH_POST, FETCH_COMMENTS } from "./constants";

export function fetchPost(id = 1) {
  return function (dispatch) {
    return fetch(`http://jsonplaceholder.typicode.com/posts/${id}`)
      .then(
        (response) => response.json(),
        (error) => console.log("An error occurred.", error)
      )
      .then((json) => {
        dispatch(fetchPostAction(json));
      });
  };
}

export function fetchComments(id = 1) {
  return function (dispatch) {
    return fetch(`http://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then(
        (response) => response.json(),
        (error) => console.log("An error occurred.", error)
      )
      .then((json) => {
        dispatch(fetchCommentsAction(json));
      });
  };
}

export function fetchPostAction(posts) {
  return {
    type: FETCH_POST,
    payload: posts,
  };
}

export function fetchCommentsAction(comments) {
  return {
    type: FETCH_COMMENTS,
    payload: comments,
  };
}
