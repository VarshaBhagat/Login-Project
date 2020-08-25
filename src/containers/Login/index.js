import React from "react";
import "./login.scss";

const Login = () => {
  const onSubmit = () => {
    console.log(
      document.getElementById("email").value,
      document.getElementById("pass").value
    );
  };
  return (
    <div className="login">
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={onSubmit} action="/home">
          <div className="label-container">
            <label htmlFor="email" className="label">
              Email:{" "}
            </label>
            <input type="text" id="email" className="input-box" />
          </div>
          <div className="label-container">
            <label htmlFor="pass" className="label">
              Password:{" "}
            </label>
            <input type="text" id="pass" className="input-box" />
          </div>
          <div className="submit-container">
            <input type="submit" className="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
