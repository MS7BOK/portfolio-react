// Portfolio.js
import React from 'react';
import Project from './Project';

const Portfolio = () => {
  // Define your projects with title, description, liveLink, and repoLink
  const projects = [
    { title: 'Office Guardian', description: 'I have built an Employee Tracker application that is a user-friendly tool designed to simplify workforce management for businesses. With an intuitive interface, it allows you to effortlessly view, add, and update employee information, roles, and departments. Keep your organization organized by easily accessing crucial details such as job titles, salaries, and team structures. From overseeing existing staff to seamlessly onboarding new members, Office Guardian is your go-to solution for efficient employee management.', liveLink: 'https://drive.google.com/file/d/1jCzG6f9IcaB7KBYmFtqv_3awHSxntXdm/view', repoLink: 'https://github.com/MS7BOK/office-guardian' },
    { title: 'Code Quiz', description: 'The objective of this project was to craft a coding quiz, replete with timed, multiple-choice inquiries. This web application operates seamlessly within the confines of a web browser, demonstrating interplay of dynamic HTML and CSS, orchestrated by JavaScript.', liveLink: 'https://ms7bok.github.io/code-quiz', repoLink: 'https://github.com/MS7BOK/code-quiz' },
    { title: 'Portfolio', description: 'This project constitutes a professional portfolio that incorporates navigation links and adopts a responsive design. The primary technologies utilized in its construction are CSS and HTML ensuring an aesthetically pleasing and user-friendly experience. ', liveLink: 'https://ms7bok.github.io/professional-portfolio/', repoLink: 'https://github.com/MS7BOK/professional-portfolio' },
    { title: 'Password Generator', description: 'This project is an application that generates random passwords based on criteria that the user has selected. The code that runs in the browser and features dynamically updated HTML and CSS powered by JavaScript code. It has a clean and polished, responsive user interface that adapts to multiple screen sizes.', liveLink: 'https://ms7bok.github.io/password-generator/', repoLink: 'https://github.com/MS7BOK/password-generator' },
    { title: 'Logosaurus', description: 'Logosaurus is a straightforward Node.js command-line application that simplifies logo creation. It enables users to design logos by selecting colors, shapes, and adding custom text. With a user-friendly interface, Logosaurus makes logo design easy and accessible, eliminating the need for complex design software. Generate your logo effortlessly and save it as an SVG file.', liveLink: 'https://drive.google.com/file/d/14T94f9NBZjzNfY682Kn9nPqcfTR8h1dX/view', repoLink: 'https://github.com/MS7BOK/logosaurus' },
    { title: 'Work Scheduler', description: 'I created a simple calendar application that allows a user to save events for each hour of a typical working day (9am–5pm) by modifying starter code. This app runs in the browser and features smooth HTML, CSS and JavaScript.', liveLink: 'https://ms7bok.github.io/work-scheduler/', repoLink: 'https://github.com/MS7BOK/work-scheduler' },
  ];


  return (
    <section className="projects">
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
};

export default Portfolio;

