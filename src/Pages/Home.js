import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div id="home">
        <div id="home-container">
          <h1 className="home-text">All your notes in one place.</h1>
          <button className="home-button">
            <Link className="inside" to="/main">
              Get Started
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
