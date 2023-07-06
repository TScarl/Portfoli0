import React from "react";

function Resume() {
    return (
<div>
      <section>
        <p>
          Download my <span className="resume-link"><a href="../assets/resume/ThomasScarlettResume2022[483].pdf" target="_blank" rel="noopener noreferrer" className="a-links">resume</a></span>
        </p>
        <p>...resume not currently up to date...</p>
      </section>

      <section>
        <h3>Front-end Proficiencies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>Responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
      </section>

      <section>
        <h3>Back-end Proficiencies</h3>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </section>
    </div>
    )
}

export default Resume
