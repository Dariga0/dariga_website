import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';
import project_berlin from '../assets/images/Berling.png';
import lspace from '../assets/images/lspace.png';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a target="_blank" rel="noreferrer"><img src={project_berlin} className="zoom" alt="thumbnail" width="100%"/></a>
                <a  target="_blank" rel="noreferrer"><h2>Growing with AI</h2></a>
                <p>Improved CRM and public relations with AI and Microsoft Co-Pilot. Optimized data management and explored
opportunities for AI integration in service learning.</p>
            </div>
            <div className="project">
                <a  target="_blank" rel="noreferrer"><img src={lspace} className="zoom" alt="thumbnail" width="100%"/></a>
                <a  target="_blank" rel="noreferrer"><h2>NASA MCA Academy</h2></a>
                <p>Led a team of 12 in spacecraft systems research and mission design. Authored 80+ page proposal and delivered final
presentation.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;