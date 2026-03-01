import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/projects')
      .then(res => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching projects:', err);
        setLoading(false);
      });
  }, []);

  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1rem',
    margin: '1rem 0',
    background: '#f9f9f9'
  };

  if (loading) return <p>Loading projects…</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>My Projects</h2>
      {projects.map(p => (
        <div key={p.id} style={cardStyle}>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          <p><strong>Tech:</strong> {p.tech.join(', ')}</p>
          <a href={p.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
      ))}
    </div>
  );
};

export default Projects;