import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Card } from 'react-bootstrap'; // Import Bootstrap Card component

function Project3Image() {
  return (
    <p>non-existing image for as of yet non-existing project</p>
  // <img src="#" alt="Project3" className="project-images"/>;
)
}

function Project3Title() {
  return <h3>The Way of Movement</h3>;
}

function Project3Description() {
  return (
    <p>
The Way of Movement is my proposed third major assignment, which I have chosen to undertake individually to effectively showcase my skills and create something that I personally plan to use. This project will be a blog dedicated to movement, accompanied by an integrated store.

Through this blog, my goal is to share the insights I have gained through my own practice. I believe that these insights will be valuable to individuals who are transitioning from exercise and fitness to a broader understanding of movement. Additionally, I aim to provide context and inspiration to those who are already engaged in various forms of movement.

The Way of Movement will be developed as a React app with a user-friendly interface and responsive design. The blog section will feature organized categories for simplified searching and learning. I plan to incorporate related posts within each article to encourage users to explore further. Videos will be uploaded via YouTube, ensuring engaging content. The app will also be optimized for search engines (SEO) and will include analytics and tracking capabilities.

In addition to the blog, the integrated store will offer a seamless and pleasant shopping experience. It will include essential features such as a product catalog, search bar, individual product pages, a shopping cart, user registration and login functionality, secure payment processing, order management for tracking, automatic confirmation and shipping notifications, customer reviews and ratings, inventory management, and customer support.

Overall, The Way of Movement aims to provide a comprehensive platform that combines insightful content with a seamless shopping experience, catering to individuals interested in movement and its related products.
    </p>
  );
}

function Project3Links() {
  return (
    <div>
      {/* <a href="#" target="_blank" rel="noopener noreferrer">GitHub className="a-links"</a>
      <a href="#" target="_blank" rel="noopener noreferrer">Live Demo className="a-links"</a> */}
    </div>
  );
}

function Project3() {
  return (
    <Card className="project-card">
      <Card.Body>
        <Card.Title as={Project3Title} />
        <Card.Text as={Project3Description} />
      </Card.Body>
      <Card.Img variant="top" as={Project3Image} />
      <Card.Footer as={Project3Links} />
    </Card>
  );
}

// function Project3() {
//   return (
//     <div className="project-card">
//       <Project3Image />
//       <Project3Title />
//       <Project3Description />
//       <Project3Links />
//     </div>
//   );
// }

export default Project3;