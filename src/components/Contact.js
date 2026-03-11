import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'success' | 'error'

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus(null);
    try {
      await axios.post('http://localhost:5000/api/contact', form);
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
    }
  };

  const inputStyle = {
    display: 'block',
    width: '100%',
    padding: '0.5rem',
    marginBottom: '1rem'
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '500px', margin: '0 auto' }}>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your email"
          value={form.email}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <button type="submit" style={{ padding: '0.6rem 1.2rem' }}>
          Send
        </button>
      </form>
      {status === 'success' && <p style={{ color: 'green' }}>Message sent!</p>}
      {status === 'error' && <p style={{ color: 'red' }}>Something went wrong.</p>}
    </div>
  );
};

export default Contact;