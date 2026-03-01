// client/src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch data from Express Backend
  useEffect(() => {
    axios.get('http://localhost:5000/api/data')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="App">
      <header className="App-header">
        <h1>{data.name}</h1>
        <h2>{data.role}</h2>
      </header>

      <main>
        <section>
          <h3>Skills</h3>
          <ul>
            {data.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3>Projects</h3>
          <div className="projects-container">
            {data.projects.map(project => (
              <div key={project.id} className="project-card">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noreferrer">
                  View Project
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;