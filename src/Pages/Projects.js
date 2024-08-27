import React from "react";
import "../Global.css";
// import data from "../Resources/ProjectsInfo.json";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import CodeIcon from "@mui/icons-material/Code";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ArticleIcon from "@mui/icons-material/Article";
import "react-vertical-timeline-component/style.min.css";
// use a vertical timeline instead of simple mapping and use the mapping for recipes

function Projects() {
  return (
    <div>
      <h1>Projects page is still under construction!</h1>
      <p>
        Bob, you really gotta get moving. They really do call you Bob the
        Builder for nothing, don't they?
      </p>
      <VerticalTimeline lineColor="black">
        {/* courseGenie */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="July 2024 - Present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<AutoAwesomeIcon />}
        >
          <h3 className="vertical-timeline-element-title">Course Genie</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Angular, Flask, Postgresql, OR-Tools Solver, Web Scraping
          </h4>
          <p>
            Developed application that allows a user to input the major
            requirements (HUBs) that they desire for the semester and it returns
            the optimal list of courses. The frontend was built in Angular and
            the backend was built in Flask with a python scraper gathering
            courses from the Boston University website to fill in the Postgresql
            database.
          </p>
          <p>
            <b>Collaborators: </b>
            <a href="https://www.linkedin.com/in/owen-mariani/">Owen Mariani</a>
          </p>
        </VerticalTimelineElement>
        {/* trameApplication */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2024 - August 2024"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
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
            additional information about the user's design's computational fluid
            dynamics solution a series of filters on the data visualized in the
            graphical user interface.
          </p>
          <p>
            <b>Associated with:</b>
            <a href="https://www.conceptsnrec.com/home">ConceptsNREC</a>
          </p>
        </VerticalTimelineElement>
        {/* HousingPrices */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="January 2024 - May 2024"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Housing Price Prediction Model
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Support Vector Machines, Principal Component Analysis, SKLearn,
            Jupyter Notebooks, Python
          </h4>
          <p>
            Created a ML model using Principal Component Analysis (PCA) and
            Support Vector Machines (SVM) to predict housing prices across the
            United States. Our ML model operated with an r-squared value of
            0.894 meaning it captured 89.4% of varaince in the data. Then, we
            wrote an 8-page paper on the linear algebra and calculus behind PCA
            and SVM and the efficiency of our model.
          </p>
          <p>
            <b>Collaborators: </b>
            <a href="https://www.linkedin.com/in/hong-lee-0821/">
              Jae Hong Lee
            </a>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Projects;
