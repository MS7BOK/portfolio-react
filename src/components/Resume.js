// Resume.js
import React from 'react';
import '../styles/Resume.css'; // Import your CSS file for Resume styling

const Resume = () => {
  return (
    <section className="resume-container">
      <h2>Resume</h2>
      <p>Download my resume <a href="/path/to/resume.pdf" target="_blank" rel="noopener noreferrer">here</a>.</p>

      <div className="proficiency-section">
        <h3>Front-end Proficiencies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
      </div>

      <div className="proficiency-section">
        <h3>Back-end Proficiencies</h3>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </section>
  );
};

export default Resume;
