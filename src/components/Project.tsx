import React from "react";
import '../assets/styles/Project.scss';
import project_berlin from '../assets/images/Berling.png';
import lspace from '../assets/images/lspace.png';

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <button type="button" className="project-button">
            <img src={project_berlin} className="zoom" alt="Growing with AI" width="100%" />
            <h2>Growing with AI</h2>
          </button>
          <p>
            Improved CRM and public relations with AI and Microsoft Co-Pilot. Optimized data management and explored
            opportunities for AI integration in service learning.
          </p>
        </div>

        <div className="project">
          <button type="button" className="project-button">
            <img src={lspace} className="zoom" alt="NASA MCA Academy" width="100%" />
            <h2>NASA MCA Academy</h2>
          </button>
          <p>
            Led a team of 12 in spacecraft systems research and mission design. Authored 80+ page proposal and delivered final
            presentation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
