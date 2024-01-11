
// should have contact info (linkedIn and email)
  // little pop up box for these would be cool
// resume linked there too
import resume from "./WyattNapierResume.pdf";

function Footer () {
  return (
    <div className="footer-wrapper">
      <div className="contact-links">
        {/* might have to use ul and li instead of just doing it lazily with p tags */}
        <p>If you would like to contact me, feel feel free to reach out on either of the following platforms. My information is linked directly!</p>
        <p><a href="mailto:wnapier@bu.edu">LOGO: Email</a></p>
        <p><a href="https://www.linkedin.com/in/wyatt-napier/" target="_blank">LOGO: LinkedIn</a></p>
      </div>
      <div className="other-links">
        {/* might have to use ul and li instead of just doing it lazily with p tags */}
        <p>Below are some other important links that you might want to explore.</p>
        <p><a href={resume} target="_blank">LOGO: Resume</a></p>
        <p><a href="https://github.com/wyattnapier/">LOGO: GitHub</a></p>
        <p><a href="https://open.spotify.com/user/wyatt~n.?si=ca4612e7bed54639">LOGO: Spotify</a></p>
      </div>
      {/* <p>If you would like to contact me you can use <a href="mailto:wnapier@bu.edu">email</a> or just go ahead and send me a message on <a href="https://www.linkedin.com/in/wyatt-napier/" target="_blank">LinkedIn</a>. 
      My <a href={resume} target="_blank">resume</a> is linked here for reference as well.</p>
      <p>This is an important link you can explore too: <a href="https://github.com/wyattnapier/">GitHub</a>. Oh and here is my <a href="https://open.spotify.com/user/wyatt~n.?si=ca4612e7bed54639">Spotify</a> too!</p> */}
    </div>
  )
}

export default Footer;