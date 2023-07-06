import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// react-bootstrap is bootstrap which has been optimised to work with react. Components must be deconstructed to be used in React applications
import { Card } from 'react-bootstrap';

function Project1Image() {
  return <img src="../../assets/images/CineFile.png" alt="Main page of CineFile" />;
}

function Project1Title() {
  return <h3>CineFile</h3>;
}

function Project1Description() {
  return (
    <p>
      CineFile was our first group assignment, where we built an application for movie enthusiasts. Leveraging the OMDB API, CineFile provides access to a vast movie database, including titles, images, ratings, actors, directors, and genres. With its responsive design, intuitive interface, and personalized features like search history and saving your favorite movies to the short list, CineFile offers a user-friendly experience.
      In developing CineFile, I focused on the design, layout, and styling aspects, using CSS techniques like flexbox. I also contributed to the functionality using JavaScript, implementing functions and handling API requests. CineFile allowed us to showcase our skills in HTML, CSS, and JavaScript, while combining our passion for movies with technical expertise. It was a collaborative effort that resulted in a comprehensive platform for cinephiles to explore and learn more about their favorite films.
    </p>
  );
}

function Project1Links() {
  return (
    <div>
          {/* blank cause a new tab to open for project. noopener noreferrer improves security  */}
      <a href="https://github.com/zeinahares/Group-Project-1-CineFile" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://zeinahares.github.io/Group-Project-1-CineFile/" target="_blank" rel="noopener noreferrer">Live Demo</a>
    </div>
  );
}

function Project1() {
  return (
    <Card className="project-card"> {/* Use Card component */}
      <Card.Img variant="top" as={Project1Image} /> {/* Use Card.Img for the image */}
      <Card.Body>
        <Card.Title as={Project1Title} /> {/* Use Card.Title for the title */}
        <Card.Text as={Project1Description} /> {/* Use Card.Text for the description */}
      </Card.Body>
      <Card.Footer as={Project1Links} /> {/* Use Card.Footer for the links */}
    </Card>
  );
}

// function Project1() {
//   return (
//     <div className="project-card">
//       <Project1Image />
//       <Project1Title />
//       <Project1Description />
//       <Project1Links />
//     </div>
//   );
// }

export default Project1;
