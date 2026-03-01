// server/index.js
const express = require('express');
const cors = require('cors');

const app = express();
//const PORT = 5000;

// Middleware
app.use(cors());
//app.use(express.json());

// Mock Data (In a real app, this comes from a Database like MongoDB)
const portfolioData = {
    name: "John Doe",
    role: "Full Stack Developer",
    skills: ["React", "Node.js", "Express", "SQL", "Git"],
    projects: [
        {
            id: 1,
            title: "E-Commerce App",
            description: "A full-stack shopping platform built with MERN.",
            link: "https://github.com/johndoe/shop"
        },
        {
            id: 2,
            title: "Portfolio Website",
            description: "This very website you are looking at!",
            link: "https://myportfolio.com"
        }
    ]
};

// Routes
app.get('/api/data', (req, res) => {
    res.json(portfolioData);
});

app.get('/', (req, res) => {
  res.send('Server is running 🚀');
});

// Start Server
//app.listen(PORT, () => {
    //console.log(`Server running on http://localhost:${PORT}`);
//});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});