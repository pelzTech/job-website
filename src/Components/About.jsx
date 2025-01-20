import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="hero-section">
        <h1 className="hero-title">About Me</h1>
        <p className="hero-subtitle">Crafting Innovative Solutions, One Line of Code at a Time</p>
      </section>

      <section className="about-content">
        <div className="bio">
          <h2>Who Am I?</h2>
          <p>
            Hello! My name is Olugbeja Ridwan Pelumi(pelzcode), a passionate and experienced full-stack web developer with a strong foundation in accounting and business. With over three years of professional experience in Web development, Mobile App development and a proven track record of delivering high-quality, user-focused applications, I specialize in creating intuitive, scalable, and secure solutions for a wide range of industries.
          </p>
        </div>

        <div className="skills">
          <h2>What I Do</h2>
          <ul>
            <li>Build responsive and interactive web applications using React.js and Node.js.</li>
            <li>Design and maintain robust backend systems with Django, Express.js, and PostgreSQL.</li>
            <li>Ensure seamless user experiences through clean, modern UI/UX design.</li>
            <li>Integrate advanced features like user authentication, APIs, and real-time functionalities.</li>
            <li>Mentor junior developers and collaborate with cross-functional teams to deliver projects on time.</li>
          </ul>
        </div>

        <div className="mission">
          <h2>My Mission</h2>
          <p>
            I am committed to bridging the gap between business objectives and technical innovation. By leveraging my expertise in both accounting and web development, I aim to help businesses thrive in the digital age, providing them with the tools and platforms they need to succeed.
          </p>
        </div>

        <div className="values">
          <h2>Core Values</h2>
          <p>
            My work is guided by a deep sense of curiosity, integrity, and a drive for excellence. I believe in continuous learning and adaptability to ensure I stay ahead in this ever-evolving tech landscape.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
