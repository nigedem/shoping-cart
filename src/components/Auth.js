import React from "react";
import { useDispatch } from "react-redux";
import { authAction } from "../store/auth-slice";

import "./Auth.css";

const Auth = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authAction.login())
  }
  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onSubmit={handleSubmit}>
       
        <input type="text" name="id" id="id" placeholder="ID"/>
       
        <input type="password" name="password" id="password" placeholder="Password"/>
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
