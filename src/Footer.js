
// should have contact info (linkedIn and email)
  // little pop up box for these would be cool
// resume linked there too
import resume from "./WyattNapierResume.pdf";
import emaillogo from "./favicons/email-32.png";
import linkedinlogo from "./favicons/linkedin-32.png";
import resumelogo from "./favicons/pdf-32.png";
import githublogo from "./favicons/github-32.png";
import spotifylogo from "./favicons/spotify-32.png";

function Footer () {
  return (
    <div className="footer-wrapper">
      <div className="contact-links">
        {/* might have to use ul and li instead of just doing it lazily with p tags */}
        <p>If you would like to contact me, feel feel free to reach out on either of the following platforms. My information is linked below!</p>
        <p><a href="mailto:wnapier@bu.edu"><img src={emaillogo} alt="Email logo" className="logo-email"/> Email</a></p>
        <p><a href="https://www.linkedin.com/in/wyatt-napier/" target="_blank"><img src={linkedinlogo} alt="LinkedIn logo" className="logo-linkedin"/> LinkedIn</a></p>
      </div>
      <div className="other-links">
        {/* might have to use ul and li instead of just doing it lazily with p tags */}
        <p>Below are some other important links that you might want to explore.</p>
        <p><a href={resume} target="_blank"><img src={resumelogo} alt="PDF logo" className="logo-pdf"/> Resume</a></p>
        <p><a href="https://github.com/wyattnapier/"><img src={githublogo} alt="GitHub logo" className="logo-github"/> GitHub</a></p>
        <p><a href="https://open.spotify.com/user/wyatt~n.?si=ca4612e7bed54639"><img src={spotifylogo} alt="Spotify logo" className="logo-spotify"/> Spotify</a></p>
      </div>
      {/* <p>If you would like to contact me you can use <a href="mailto:wnapier@bu.edu">email</a> or just go ahead and send me a message on <a href="https://www.linkedin.com/in/wyatt-napier/" target="_blank">LinkedIn</a>. 
      My <a href={resume} target="_blank">resume</a> is linked here for reference as well.</p>
      <p>This is an important link you can explore too: <a href="https://github.com/wyattnapier/">GitHub</a>. Oh and here is my <a href="https://open.spotify.com/user/wyatt~n.?si=ca4612e7bed54639">Spotify</a> too!</p> 
      FAVICONS: <a target="_blank" href="https://icons8.com/icon/8808/linkedin">LinkedIn</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
      */}
    </div>
  )
}

export default Footer;