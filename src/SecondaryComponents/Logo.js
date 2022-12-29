import React from "react";
import { Outlet, Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <h1 id="logo">
        <Link to="/" className="inside">
          Note<span>It</span>Now
        </Link>
      </h1>

      <Outlet />
    </>
  );
};

export default Logo;
