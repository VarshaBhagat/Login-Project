import React from "react";
import "./sidebar.scss";

const Sidebar = () => {
  const onClickHamburger = (e) => {
    var item = document.getElementById("links");
    if (item && item.style) {
      if (item.style.display === "block") {
        item.style.display = "none";
      } else {
        item.style.display = "block";
      }
    }
  };

  return (
    <>
      <div className="mobile-container">
        <a href="/home">
          <img src={window.location.origin + "/image/home.png"} alt="logo" />
        </a>
        <div id="links">
          <a href="/home" className="img-link">
            <img src={window.location.origin + "/image/home.png"} alt="home" />
          </a>
          <a href="/profile" className="img-link">
            <img
              src={window.location.origin + "/image/user.png"}
              alt="profile"
            />
          </a>
          <a href="/about" className="img-link">
            <img
              src={window.location.origin + "/image/posts.png"}
              alt="about"
            />
          </a>
          <a href="/login" className="img-link">
            <img
              src={window.location.origin + "/image/logout.png"}
              alt="logout"
            />
          </a>
        </div>
        <a onClick={() => onClickHamburger()} className="icon">
          <img
            src={window.location.origin + "/image/hamburger.png"}
            alt="logo"
            className="hamburger"
          />
        </a>
      </div>
      <div className="sidebar-container">
        <a href="/home" className="img-container logo">
          <img src={window.location.origin + "/image/home.png"} alt="logo" />
        </a>
        <div className="nav-link-container">
          <a href="/home" className="img-container">
            <img src={window.location.origin + "/image/home.png"} alt="logo" />
            <span>Home</span>
          </a>
          <a href="/profile" className="img-container">
            <img src={window.location.origin + "/image/user.png"} alt="logo" />
            <span>Profile</span>
          </a>
          <a href="/post" className="img-container">
            <img src={window.location.origin + "/image/posts.png"} alt="post" />
            <span>Posts</span>
          </a>
        </div>
        <a href="/" className="img-container">
          <img src={window.location.origin + "/image/logout.png"} alt="logo" />
          <span>Logout</span>
        </a>
      </div>
    </>
  );
};

export default Sidebar;
