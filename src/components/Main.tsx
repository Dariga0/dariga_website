import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import mugshot from '../assets/images/Dariga_mugshot.jpg';


function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={mugshot} alt="Dariga Rakhat" />

        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Dariga0" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/dariga-rakhat-99160b250/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Dariga Rakhat</h1>
          <p>Electrical and Computer Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Dariga0" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/dariga-rakhat-99160b250/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;