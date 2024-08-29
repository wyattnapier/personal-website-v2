import { Link } from "react-router-dom";

function Header({ bigWindow }) {
  return (
    <div className="header-wrapper">
      <div className="projects-button">
        <Link to={"/projects"}>My Projects!</Link>
      </div>
      <h1>Hi, my name is Wyatt Napier</h1>
      {bigWindow ? (
        <>
          <p>I am a CS major at Boston University, but that's not all.</p>
          <p>
            Browse through the photos on the right to learn a bit more about me.
          </p>
        </>
      ) : (
        <>
          <p>
            I am a CS major at Boston University, but that's not all. Browse
            through the photos below to learn a bit more about me.
          </p>
        </>
      )}
    </div>
  );
}

export default Header;
