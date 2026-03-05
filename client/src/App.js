import React from "react";
import "./App.css";
import profilePic from "./assets/sid_ID.jpg";

function App() {
  const portfolioData = {
    name: "Sidrick Depra",
    role: "Full Stack Developer",
    about:
      "Passionate developer specializing in building modern web applications using React, Node.js, and Express.",
    skills: ["React", "Node.js", "Express", "SQL", "Git", "JavaScript"],
    projects: [
      {
        id: 1,
        title: "E-Commerce App",
        description: "Full-stack shopping platform built with MERN stack.",
        link: "https://github.com/cedricsjd"
      },
      {
        id: 2,
        title: "Portfolio Website",
        description: "Personal portfolio built with React and deployed on GitHub Pages.",
        link: "https://cedricsjd.github.io"
      }
    ]
  };

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <h2>{portfolioData.name}</h2>
        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="#home" className="back-to-top">↑</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
       <img src={profilePic} alt="Sidrick Depra" className="profile-img" />
       <h1>Hi, I'm {portfolioData.name}</h1>
       <h3>{portfolioData.role}</h3>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>{portfolioData.about}</p>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="skills-grid">
          {portfolioData.skills.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects-grid">
          {portfolioData.projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: sdepra.tech@gmail.com</p>
      </section>

      <footer>
        <p>© 2026 {portfolioData.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;