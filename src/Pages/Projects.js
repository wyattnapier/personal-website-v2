import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Global.css";
import finalPaper from "../Resources/365FinalPaper.pdf";

// veritcal timeline imports
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "react-vertical-timeline-component/style.min.css";

function Projects() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // could be 'auto' instead of 'smooth'
    });
  };

  const scrollToBottom = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="project">
      <div className="project-header">
        <div className="project-header-split-wrapper">
          {windowWidth > 767 ? (
            <>
              <h1 className="project-header-left">My Projects!</h1>
              <Link to="/" className="project-header-right">
                Home
              </Link>
            </>
          ) : (
            <>
              <Link to="/" className="project-header-right">
                Home
              </Link>
              <h1 className="project-header-left">My Projects!</h1>
            </>
          )}
        </div>
        <p>
          These are the main projects that I've worked on. I've spent lots of
          time trying to do learn new frameworks and extend my current knowledge
          in useful ways and this timeline is evidence of that progress. The
          most recent projects are the ones I'm most proud of, but some of the
          older ones still hold a special place in my heart.
        </p>
        <p>
          If you want to just go back <Link to={"/"}>home</Link> click{" "}
          <Link to={"/"}>here</Link> or if you'd prefer to jump down to my{" "}
          <a href="#skills-section" onClick={scrollToBottom}>
            skills section
          </a>{" "}
          it is actually linked{" "}
          <a href="#skills-section" onClick={scrollToBottom}>
            here
          </a>{" "}
          too!
        </p>
      </div>
      <div className="project-timeline">
        <VerticalTimeline lineColor="#c4c4c4">
          {/* courseGenie */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#444", color: "#c4c4c4" }}
            contentArrowStyle={{ borderRight: "7px solid  #444" }}
            iconStyle={{
              background: "rgb(33, 120, 50)",
              color: "#eee",
              boxShadow: "0 0 0 4px #c4c4c4",
            }}
            date="July 2024 - Present"
            icon={<CodeIcon />}
          >
            <div style={{ color: "#eee" }}>
              <h3 className="vertical-timeline-element-title">
                <a href="https://github.com/owenm-26/course-genie">
                  Course Genie
                </a>
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Angular, Flask, Postgresql, OR-Tools Solver, Web Scraping
              </h4>
            </div>
            <p>
              Developed application that allows a user to input the major
              requirements (HUBs) that they desire for the semester and it
              returns the optimal list of courses. The frontend was built in
              Angular and the backend was built in Flask with a python scraper
              gathering courses from the Boston University website to fill in
              the Postgresql database.
            </p>
            <p>
              <b>Collaborators: </b>
              <a href="https://www.linkedin.com/in/owen-mariani/">
                Owen Mariani
              </a>
            </p>
          </VerticalTimelineElement>
          {/* trameApplication */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2024 - August 2024"
            contentStyle={{ background: "#444", color: "#c4c4c4" }}
            contentArrowStyle={{ borderRight: "7px solid  #444" }}
            iconStyle={{
              background: "rgb(33, 120, 50)",
              color: "#eee",
              boxShadow: "0 0 0 4px #c4c4c4",
            }}
            icon={<WorkIcon />}
          >
            <div style={{ color: "#eee" }}>
              <h3 className="vertical-timeline-element-title">
                ConceptsNREC Application
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Trame, VueJS, VTK, Python
              </h4>
            </div>
            <p>
              Created a trame application to allow turbomachinery engineers to
              visualize, analyze, and interact with their designs. Captures
              additional information about the user's design's computational
              fluid dynamics solution a series of filters on the data visualized
              in the graphical user interface.
            </p>
            <p>
              <b>Associated with: </b>
              <a href="https://www.conceptsnrec.com/home">ConceptsNREC</a>
            </p>
          </VerticalTimelineElement>
          {/* HousingPrices */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="January 2024 - May 2024"
            contentStyle={{ background: "#444", color: "#c4c4c4" }}
            contentArrowStyle={{ borderRight: "7px solid  #444" }}
            iconStyle={{
              background: "rgb(33, 120, 50)",
              color: "#eee",
              boxShadow: "0 0 0 4px #c4c4c4",
            }}
            icon={<SchoolIcon />}
          >
            <div style={{ color: "#eee" }}>
              <h3 className="vertical-timeline-element-title">
                <a href={finalPaper} target="_blank" rel="noreferrer">
                  Housing Price Prediction Model
                </a>
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                SVM, PCA, SKLearn, Jupyter Notebooks, Python
              </h4>
            </div>
            <p>
              Created a ML model using Principal Component Analysis (PCA) and
              Support Vector Machines (SVM) to predict housing prices across the
              United States. Our ML model operated with an r-squared value of
              0.894 meaning it captured 89.4% of varaince in the data. Then, we
              wrote an 8-page paper on the linear algebra and calculus behind
              PCA and SVM and the efficiency of our model.
            </p>
            <p>
              <b>Collaborators: </b>
              <a href="https://www.linkedin.com/in/hong-lee-0821/">
                Jae Hong Lee
              </a>
            </p>
          </VerticalTimelineElement>
          {/* Commute Compositions */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="January 2024 - May 2024"
            contentStyle={{ background: "#444", color: "#c4c4c4" }}
            contentArrowStyle={{ borderRight: "7px solid  #444" }}
            iconStyle={{
              background: "rgb(33, 120, 50)",
              color: "#eee",
              boxShadow: "0 0 0 4px #c4c4c4",
            }}
            icon={<SchoolIcon />}
          >
            <div style={{ color: "#eee" }}>
              <h3 className="vertical-timeline-element-title">
                <a href="https://github.com/wyattnapier/CommuteCompositions">
                  Commute Compositions
                </a>
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                ReactJS, Flask, NoSQL, MongoDB
              </h4>
            </div>
            <p>
              Developed a full stack application that takes a user's source,
              destination, and mode of trasnportation to generate a playlist the
              length of their commute that is tailored to their destination.
              Built a RESTful API to communicate seamlessly between backend and
              frontend while also utilizing two other pre-defined APIS: Google
              Maps and Spotify.
            </p>
            <p>
              <b>Collaborators: </b>
              <a href="https://www.linkedin.com/in/alicehan8/">
                Alice Han
              </a>, <a href="https://www.linkedin.com/in/dichen09/">Di Chen</a>,{" "}
              <a href="https://www.linkedin.com/in/tiffany-liu-9007491b7/">
                Tiffany Liu
              </a>
            </p>
          </VerticalTimelineElement>
          {/* Digital Resume */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="January 2024 - May 2024"
            contentStyle={{ background: "#444", color: "#c4c4c4" }}
            contentArrowStyle={{ borderRight: "7px solid  #444" }}
            iconStyle={{
              background: "rgb(33, 120, 50)",
              color: "#eee",
              boxShadow: "0 0 0 4px #c4c4c4",
            }}
            icon={<SchoolIcon />}
          >
            <div style={{ color: "#eee" }}>
              <h3 className="vertical-timeline-element-title">
                <a href="https://cs-people.bu.edu/wnapier/cs392/projects/mini-projects/mp3/smart-wyatt-new-resume-home.html">
                  First Digital Resume
                </a>
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                HTML, CSS, JS, Webstorm
              </h4>
            </div>
            <p>
              Built a basic digital resume with HTML, CSS, and Javascript in
              webstorm for a course on web development. This website was pretty
              limited and I didn't like the structure of it which is why I built
              this application instead. It feels much more like me!
            </p>
          </VerticalTimelineElement>
          {/* SongCrostics */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="August 2023"
            contentStyle={{ background: "#444", color: "#c4c4c4" }}
            contentArrowStyle={{ borderRight: "7px solid  #444" }}
            iconStyle={{
              background: "rgb(33, 120, 50)",
              color: "#eee",
              boxShadow: "0 0 0 4px #c4c4c4",
            }}
            icon={<CodeIcon />}
          >
            <div style={{ color: "#eee" }}>
              <h3 className="vertical-timeline-element-title">
                <a href="https://github.com/wyattnapier/songcrostics">
                  Songcrostics
                </a>
              </h3>
              <h4 className="vertical-timeline-element-subtitle">ReactJS</h4>
            </div>
            <p>
              Wielded ReactJS and Spotify API to create a playlist that is an
              acrostic where the vertical string is input by the user. This will
              then be saved to the user's Spotify account.
            </p>
            <p>
              <b>Collaborators: </b>
              <a href="https://www.linkedin.com/in/morganmyers26/">
                Morgan Myers
              </a>
            </p>
          </VerticalTimelineElement>
          {/* DisasterRelief */}
          <VerticalTimelineElement
            // className="vertical-timeline-element--work"
            date="July 2023 - August 2023"
            contentStyle={{ background: "#444", color: "#c4c4c4" }}
            contentArrowStyle={{ borderRight: "7px solid  #444" }}
            iconStyle={{
              background: "rgb(33, 120, 50)",
              color: "#eee",
              boxShadow: "0 0 0 4px #c4c4c4",
            }}
            icon={<CodeIcon />}
          >
            <div style={{ color: "#eee" }}>
              <h3 className="vertical-timeline-element-title">
                Distaster Relief Website
              </h3>
              <h4 className="vertical-timeline-element-subtitle">ReactJS</h4>
            </div>
            <p>
              Following a historic flood, designed an application for connecting
              local volunteers to those in need to improve response coordination
              after natural distasters. Made RESTful API calls to streamline
              data reading, writing, updating, and deleting.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{
              background: "rgb(33, 120, 50)",
              color: "#eee",
              boxShadow: "0 0 0 4px #c4c4c4",
            }}
            icon={<ArrowUpwardIcon />}
            iconOnClick={scrollToTop}
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <div className="project-skills" id="skills-section">
        <div className="project-skills-icons-wrapper">
          <h3>Languages and Frameworks</h3>
          <div className="project-skills-icons">
            {/* python */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
              alt="Python SVG"
            />
            {/* java */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
              alt="Java SVG"
            />
            {/* html */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
              alt="HTML SVG"
            />
            {/* CSS */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
              alt="CSS SVG"
            />
            {/* javascript */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              alt="JavaScript SVG"
            />
            {/* react */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              alt="React SVG"
            />
            {/* angular */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg"
              alt="Angular SVG"
            />
            {/* flask */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg"
              alt="Flask SVG"
            />
            {/* ocaml */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ocaml/ocaml-original.svg"
              alt="OCaml SVG"
            />
            {/* typescript */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
              alt="Typescript SVG"
            />
            {/* vuejs */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
              alt="VueJS SVG"
            />
            {/* git */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
              alt="Git SVG"
            />
          </div>
          <p>
            Python, Java, HTML, CSS, JavaScript, React, Angular, Flask, OCaml,
            Typescript, VueJS, Git, SQL, NoSQL
          </p>
          <h3>Tools and Applications</h3>
          <div className="project-skills-icons">
            {/* github */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
              alt="GitHub SVG"
            />
            {/* jupyter */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg"
              alt="Jupyter SVG"
            />
            {/* mongodb */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
              alt="MongoDB SVG"
            />
            {/* mysql */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
              alt="MySQL SVG"
            />
            {/* postgresql */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
              alt="PostgreSQL SVG"
            />
            {/* vscode */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
              alt="Visual Studio code SVG"
            />
            {/* spyder */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spyder/spyder-original.svg"
              alt="Spyder SVG"
            />
            {/* eclipse */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg"
              alt="Eclipse SVG"
            />
            {/* latex */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/latex/latex-original.svg"
              alt="LaTeX SVG"
            />
            {/* docker */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
              alt="Docker SVG"
            />
            {/* webstorm */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webstorm/webstorm-original.svg"
              alt="Webstorm SVG"
            />
          </div>
          <p>
            GitHub, Jupyter, MongoDB, MySQL, PostgreSQL, Visual Studio Code,
            Spyder, Eclipse, LaTeX, Docker, Webstorm
          </p>
          <button
            className="project-skills-scroll-up"
            onClick={scrollToTop}
            style={{
              backgroundColor: "rgb(33, 120, 50)",
              color: "#eee",
              width: "100%",
              borderRadius: "0 0 20px 20px",
              // borderRadius: "0 20px",
              margin: "0 -1vw -1vh -1vw",
              padding: "2vh 1vw",
            }}
          >
            Jump to top
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
