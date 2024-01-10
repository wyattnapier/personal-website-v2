
// should have contact info (linkedIn and email)
  // little pop up box for these would be cool
// resume linked there too
import resume from "./WyattNapierResume.pdf";

function Footer () {
  return (
    <div>
      <p>If you would like to contact me you can use <a href="mailto:wnapier@bu.edu">email</a> or just go ahead and send me a message on <a href="https://www.linkedin.com/in/wyatt-napier/" target="_blank">LinkedIn</a>.</p>
      <p>My <a href={resume} target="_blank">resume</a> should eventually be linked here too.</p>
    </div>
  )
}

export default Footer;