import React, { useEffect, useState } from "react";
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

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="details-container">
      <h2>Home</h2>
      <h1>User Name</h1>
      <div className="details-partent">
        {data.map((item) => (
          <Details item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
