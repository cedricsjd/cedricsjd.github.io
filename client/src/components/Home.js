import React from 'react';

const Home = () => {
  const containerStyle = {
    padding: '4rem 2rem',
    textAlign: 'center'
  };

  return (
    <div style={containerStyle}>
      <h1>Hi, I'm <span style={{ color: '#61dafb' }}>Your Name</span></h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '1rem auto' }}>
        A full‑stack developer passionate about building modern web applications
        with Node, Express, React, and more.
      </p>
    </div>
  );
};

export default Home;