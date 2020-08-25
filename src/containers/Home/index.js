import React, { useEffect, useState } from "react";
import Sidebar from "../../shared/components/sidebar";
import "./home.scss";

const Details = ({ item }) => (
  <div className="details">
    <div className="item-intro">
      <h3 className="description">{item.title}</h3>
      <p className="description">{item.body}</p>
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
    <div className="home-container">
      <Sidebar />
      <div className="details-container">
        <h2>Home</h2>
        <h1>User Name</h1>
        <div className="details-partent">
          {data.map((item) => (
            <Details item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
