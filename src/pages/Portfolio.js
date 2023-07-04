import React from "react";

export default function Portfolio() {
    // _blank cause a new tab to open for project. noopener noreferrer improves security    
    // <a href="https://example.com" target="_blank" rel="noopener noreferrer">Project Name</a>

    return (
        <div className="portfolio-container">
            <p>My projects are organised into 3 sections based upon the complexity of the code I learnt during the different phases of the bootcamp course.</p>
            <div className="portfolio-section1">
                <p>These section focuses on the basic skills of HTML, CSS, JavaScript and fetching API's</p>
            <a href="https://tscarl.github.io/Generate-Password/" target="_blank" rel="noopener noreferrer">Password Generator</a>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">Project Name</a>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">Project Name</a>
            </div>
            <div className="portfolio-section2">

            </div>
            <div className="portfolio-section3">

            </div>
        </div>
    );

}