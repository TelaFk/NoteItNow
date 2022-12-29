import React from "react";
import { Link } from "react-router-dom";

const NewNote = () => {
  return (
    <Link to="/form" className="inside">
      <div id="new-note">
        <span className="material-icons">add_circle_outline</span>
        <h3>New Note</h3>
      </div>
    </Link>
  );
};

export default NewNote;
