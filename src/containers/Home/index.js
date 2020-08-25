import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchPosts } from "./actions";
import "./home.scss";

const Details = ({ item }) => (
  <div className="details">
    <div className="item-intro">
      <h3 className="description">{item.title}</h3>
      <p className="description">{item.body}</p>
      <div className="date-details">
        <div className="date-item">
          <div>start date</div>
          <div>{new Date().toDateString().slice(3)}</div>
        </div>
        <div className="date-item">
          <div>end date</div>
          <div>{new Date().toDateString().slice(3)}</div>
        </div>
        <div className="date-item">
          <div>comments</div>
          <div className="comment-count">1211</div>
        </div>
      </div>
    </div>
    <div className="item-action">
      <button className="details-btn">Details</button>
      <div className="add-comment">Add comment</div>
    </div>
  </div>
);

const Home = ({ fetchPosts, postsList }) => {
  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => fetchPosts(data));
  }, [fetchPosts]);

  return (
    <div className="details-container">
      <h2>Home</h2>
      <h1>User Name</h1>
      <div className="details-partent">
        {postsList.map((item) => (
          <Details item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { postsList: state.postsState.postsList };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchPosts,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
