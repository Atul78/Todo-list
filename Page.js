import React from "react";
import "./Page.css";
import axios from "axios";

function Page() {
  return (
    <div className="Page">
      <div className="container">
        <h3>SIGN UP</h3>
        <div className="container_1">
          <label>Username</label>
          <input type="text" />
        </div>
        <div className="container_1">
          <label>Password</label>
          <input type="text" />
        </div>
        <div className="container_1">
          <button
            onClick={() => {
              axios.get("http://127.0.0.1:3001/home");
            }}
          >
            SIGN UP
          </button>
        </div>
        <h1>OR</h1>
        <div className="size1">
          <a href="https://myaccount.google.com/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
              className="size"
            />
          </a>
          <a href="https://www.facebook.com/login/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              className="size"
            />
          </a>
          <a href="https://www.linkedin.com/login">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2504/2504923.png"
              className="size"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Page;
