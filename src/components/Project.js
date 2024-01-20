// Project.js
import React from 'react';
import '../styles/Project.css'; // Correct relative path

const Project = ({ title, description, liveLink, repoLink }) => {
  return (
    <div className="project">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
      <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
    </div>
  );
};

export default Project;
