import React from "react";
import "../Global.css";
import data from "../Resources/ProjectsInfo.json";
// import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
// import "react-vertical-timeline-component/style.min.css";
// use a vertical timeline instead of simple mapping and use the mapping for recipes

function Projects() {
  return (
    <div>
      <h1>Projects page is still under construction!</h1>
      <p>
        Bob, you really gotta get moving. They really do call you Bob the
        Builder for nothing, don't they?
      </p>
      <br />
      <br />
      <br />
      <br />
      <div className="ProjectMap">
        <h1>Projects</h1>
        <ul>
          {data.map((project) => (
            <li key={project.id}>
              {project["image-path"] && (
                <img src={project["image-path"]} width="100" height="100" />
              )}
              <h2>{project.title}</h2>
              <p>Tech involved: {project.tech}</p>
              <p>Description: {project.description}</p>

              {project.collaborators && project.collaborators.length > 0 && (
                <div>
                  <h3>Collaborators:</h3>
                  <ul>
                    {project.collaborators.map((collab, index) => (
                      <li key={index}>
                        <a
                          href={collab.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {collab.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Projects;
