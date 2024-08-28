import React from "react";
import { Link } from "react-router-dom";
import "../Global.css";
import finalPaper from "../Resources/365FinalPaper.pdf";
// import data from "../Resources/ProjectsInfo.json";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "react-vertical-timeline-component/style.min.css";
// use a vertical timeline instead of simple mapping and use the mapping for recipes

function Projects() {
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
        <h1>My Projects!</h1>
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
            contentStyle={{ background: "#444", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #444" }}
            iconStyle={{
              background: "rgb(33, 120, 50)",
              color: "#fff",
              // boxShadow: "0 0 0 4px #c4c4c4",
            }}
            date="July 2024 - Present"
            icon={<CodeIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              <a href="https://github.com/owenm-26/course-genie">
                Course Genie
              </a>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Angular, Flask, Postgresql, OR-Tools Solver, Web Scraping
            </h4>
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
            contentStyle={{ background: "#444", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #444" }}
            iconStyle={{
              background: "rgb(33, 120, 50)",
              color: "#fff",
              // boxShadow: "0 0 0 4px #c4c4c4",
            }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              ConceptsNREC Application
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Trame, VueJS, VTK, Python
            </h4>
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
            contentStyle={{ background: "#444", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #444" }}
            iconStyle={{
              background: "rgb(33, 120, 50)",
              color: "#fff",
              // boxShadow: "0 0 0 4px #c4c4c4",
            }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              <a href={finalPaper} target="_blank" rel="noreferrer">
                Housing Price Prediction Model
              </a>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              SVM, PCA, SKLearn, Jupyter Notebooks, Python
            </h4>
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
            contentStyle={{ background: "#444", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #444" }}
            iconStyle={{
              background: "rgb(33, 120, 50)",
              color: "#fff",
              // boxShadow: "0 0 0 4px #c4c4c4",
            }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              <a href="https://github.com/wyattnapier/CommuteCompositions">
                Commute Compositions
              </a>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              ReactJS, Flask, NoSQL, MongoDB
            </h4>
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
          {/* SongCrostics */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="August 2023"
            contentStyle={{ background: "#444", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #444" }}
            iconStyle={{
              background: "rgb(33, 120, 50)",
              color: "#fff",
              // boxShadow: "0 0 0 4px #c4c4c4",
            }}
            icon={<CodeIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              <a href="https://github.com/wyattnapier/songcrostics">
                Songcrostics
              </a>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">ReactJS</h4>
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
            contentStyle={{ background: "#444", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #444" }}
            iconStyle={{
              background: "rgb(33, 120, 50)",
              color: "#fff",
              // boxShadow: "0 0 0 4px #c4c4c4",
            }}
            icon={<CodeIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Distaster Relief Website
            </h3>
            <h4 className="vertical-timeline-element-subtitle">ReactJS</h4>
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
              color: "#fff",
              // boxShadow: "0 0 0 4px #c4c4c4",
            }}
            icon={<ArrowUpwardIcon />}
            iconOnClick={scrollToTop}
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <div className="project-skills" id="skills-section">
        <p>
          Bob better get building down here too because right now it looks like
          I have no skills. Least he could do is throw in some pretty icons for
          the languages and frameworks I know. I've actually been collecting skills like infinity stones!
        </p>
      </div>
    </div>
  );
}

export default Projects;
