import React from "react";

function Project1() {
    return (
        <div className="project-card">
            <h3>Work Day Scheduler</h3>
            <p>This project combines my knowledge of dayjs? and local storage to save jobs which need to be completed</p>
            {/* <a href="https://github.com/TScarl/Horiseon-Social-Solution-Services">GitHub</a>
            <a href="https://tscarl.github.io/Horiseon-Social-Solution-Services/">Live Demo</a> */}
        </div>
    );
}

function ProjectImage() {
    return <img src="path_to_image" alt="Project" />;
  }
  
  function ProjectTitle() {
    return <h3>Horiseon Social Solution Services</h3>;
  }
  
  function ProjectDescription() {
    return (
      <p>
        In this project, I developed my basic abilities to structure the HTML elements of a website.
      </p>
    );
  }
  
  function ProjectLinks() {
    return (
      <div>
        <a href="https://github.com/TScarl/Horiseon-Social-Solution-Services">GitHub</a>
        <a href="https://tscarl.github.io/Horiseon-Social-Solution-Services/">Live Demo</a>
      </div>
    );
  }
  
  function Project2() {
    return (
      <div className="project-card">
        <ProjectImage />
        <ProjectTitle />
        <ProjectDescription />
        <ProjectLinks />
      </div>
    );
  }

export default Project1;
