import resume from "../Resources/WyattNapierResume.pdf";
import emaillogo from "../Resources/favicons/email-32.png";
import linkedinlogo from "../Resources/favicons/linkedin-32.png";
import resumelogo from "../Resources/favicons/pdf-32.png";
import githublogo from "../Resources/favicons/github-32.png";
import spotifylogo from "../Resources/favicons/spotify-32.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="contact-links">
        {/* might have to use ul and li instead of just doing it lazily with p tags */}
        <p>
          If you would like to contact me, feel free to reach out on either of
          the following platforms. My information is linked below!
        </p>
        <p>
          <a href="mailto:wnapier@bu.edu" target="_blank" rel="noreferrer">
            <img src={emaillogo} alt="Email logo" className="logo-email" />{" "}
            Email
          </a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/wyatt-napier/" target="_blank" rel="noreferrer">
            <img
              src={linkedinlogo}
              alt="LinkedIn logo"
              className="logo-linkedin"
            />{" "}
            LinkedIn
          </a>
        </p>
      </div>
      <div className="other-links">
        {/* might have to use ul and li instead of just doing it lazily with p tags */}
        <p>
          Below are some other important links that you might want to explore.
        </p>
        <p>
          <a href={resume} target="_blank" rel="noreferrer">
            <img src={resumelogo} alt="PDF logo" className="logo-pdf" /> Resume
          </a>
        </p>
        <p>
          <a href="https://github.com/wyattnapier/" target="_blank" rel="noreferrer">
            <img src={githublogo} alt="GitHub logo" className="logo-github" />{" "}
            GitHub
          </a>
        </p>
        <p>
          <a
            href="https://open.spotify.com/user/wyatt~n.?si=ca4612e7bed54639"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={spotifylogo}
              alt="Spotify logo"
              className="logo-spotify"
            />{" "}
            Spotify
          </a>
        </p>
      </div>
      <div className="projects-button">
        <Link to={"/projects"}>Check out my projects too!</Link>
      </div>
    </div>
  );
}

export default Footer;
