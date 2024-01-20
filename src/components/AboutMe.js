// AboutMe.js
import React from 'react';

const AboutMe = () => {
  return (
    <section style={{ textAlign: 'center' }}>
      <h2 style={{ paddingLeft: '20px', fontSize: '2em' }}>About Me</h2>
      <div>
        <img
          src="/avataaars.png" // Update with the correct path to your avatar image in the public folder
          alt="Maximilian"
          style={{ maxWidth: '200px', height: 'auto', margin: 'auto' }} // Center the image
        />
      </div>
      {/* Add your bio here */}
      <div style={{ paddingLeft: '20px', maxWidth: '800px', margin: 'auto', fontSize: '19px'}}>
        <p>
          Hi there! I'm Maximilian, a dedicated web developer with a passion for creating innovative and challenging applications. My journey into the world of coding began with curiosity of how far I could push myself and see what I could really do.
        </p>
        <p>
        As an aspiring software developer, I'm on a journey to explore the diverse realms of coding. While my roots are in front-end technologies like HTML, CSS, and JavaScript, I've also delved into the intricacies of backend development. I'm eager to create seamless and visually appealing user interfaces while building robust functionalities that extend beyond the surface. My curiosity leads me to embrace various frameworks and libraries, with React being a recent addition to my toolkit. Excited about the endless possibilities in software development, I'm open to new challenges and opportunities to further enhance my skills.
        </p>
        <p>
          My commitment to staying up-to-date with industry trends and continuously expanding my skill set reflects my eagerness to contribute to impactful projects. Whether it's collaborating with a team or taking on individual challenges, I thrive in environments that encourage creativity and learning.
        </p>
        <p>
          I aspire to build amazing things! Feel free to explore my portfolio and get in touch if you have opportunities or projects in mind.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
