import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import "../Global.css";

function NotFound() {
  return (
    <div className="NotFound">
      <h1>
        <Typewriter
          words={["", "Page not found. Go back."]}
          loop={1} // keep looping forever!
          cursor
          typeSpeed={100}
          delaySpeed={600}
        />
      </h1>
      <p>
        <Link to={"/"}>Home</Link>{" "}
      </p>
      <p>
        <Link to={"/projects"}>Projects</Link>
      </p>
      <p>
        <Link to={"/recipes"}>Recipes</Link>
      </p>
    </div>
  );
}

export default NotFound;
