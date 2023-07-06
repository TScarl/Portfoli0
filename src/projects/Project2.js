import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Card } from 'react-bootstrap'; // Import Bootstrap Card component

function Project2Image() {
    return <img src="../assets/images/Noticed.png" alt="Main page of Noticed" className="project-images" />;
}

function Project2Title() {
    return <h3>Noticed</h3>;
}

function Project2Description() {
    return (
        <p>
            Noticed was an impactful group project that marked a significant milestone in my application development journey. Serving as a modern replacement for traditional town noticeboards, Noticed aimed to connect local communities and facilitate the sharing of vital information. With a focus on fostering robust and supportive communities, Noticed provided a platform for locals to connect, exchange odd jobs, and strengthen the local economy.
            Throughout the project, I primarily focused on developing the express routes, implementing essential CRUD operations, and incorporating user authentication features such as session management and password hashing using bcrypt. The process involved troubleshooting and resolving challenges encountered while integrating the front-end and back-end components, emphasizing the importance of consistent naming conventions and code alignment. Furthermore, I played a key role in the front-end development, particularly on the 'My Jobs' page, where I implemented functionalities to display job details, enable editing, and facilitate job deletion.
        </p>
    );
}

function Project2Links() {
    return (
        <div>
            <a href="https://github.com/Travisnicholson90/job-board" target="_blank" rel="noopener noreferrer" className="a-links">GitHub</a>
            <a href="https://noticed-job-board.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="a-links">Live Demo</a>
        </div>
    );
}

function Project2() {
    return (
      <Card className="project-card">
        <Card.Body>
          <Card.Title as={Project2Title} />
          <Card.Text as={Project2Description} />
        </Card.Body>
        <Card.Img variant="top" as={Project2Image} />
        <Card.Footer as={Project2Links} />
      </Card>
    );
  }

// function Project2() {
//     return (
//         <div className="project-card">
//             <Project2Image />
//             <Project2Title />
//             <Project2Description />
//             <Project2Links />
//         </div>
//     );
// }

export default Project2;