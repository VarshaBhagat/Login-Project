import React from "react";
import "./sidebar.scss";

const Sidebar = () => (
  <div className="sidebar-container">
    <div className="img-container logo">
      <img src={window.location.origin + "/image/home.png"} alt="logo" />
    </div>
    <div className="nav-link-container">
      <div className="img-container">
        <img src={window.location.origin + "/image/home.png"} alt="logo" />
        <span>Home</span>
      </div>
      <div className="img-container">
        <img src={window.location.origin + "/image/user.png"} alt="logo" />
        <span>Profile</span>
      </div>
      <div className="img-container">
        <img src={window.location.origin + "/image/posts.png"} alt="post" />
        <span>Posts</span>
      </div>
    </div>
    <div className="img-container">
      <img src={window.location.origin + "/image/logout.png"} alt="logo" />
      <span>Logout</span>
    </div>
  </div>
);

export default Sidebar;
