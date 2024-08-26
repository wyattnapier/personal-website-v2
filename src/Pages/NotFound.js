import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      Page not found. Go back.
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/projects"}>Projects</Link>
        </li>
      </ul>
    </div>
  );
};
