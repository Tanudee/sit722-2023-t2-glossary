// routes/glossary.js
const express = require('express');
const router = express.Router();

const glossaryTerms = [
    {
        term: 'DevOps',
        description: 'DevOps is a set of practices, principles, and cultural philosophies that aim to improve collaboration and communication between software development and IT operations teams. It focuses on automating processes, accelerating software delivery, and ensuring continuous feedback to deliver high-quality software.',
        reference: 'https://www.atlassian.com/devops'
    },
    {
        term: 'Express',
        description: 'Express is a minimal and flexible Node.js web application framework that provides a set of features for building web and mobile applications.',
        reference: 'https://expressjs.com/'
    },
    {
        term: 'GitHub',
        description: 'GitHub is a web-based platform that provides version control and collaboration tools for software development projects.',
        reference: 'https://github.com/'
    },
    {
        term: 'EJS',
        description: 'EJS (Embedded JavaScript) is a template engine that allows you to embed JavaScript code within HTML templates.',
        reference: 'https://ejs.co/'
    },
    {
        term: 'HTML',
        description: 'HTML (Hypertext Markup Language) is the standard markup language for creating web pages and web applications.',
        reference: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
    }
];

router.get('/', (req, res) => {
    res.render('glossary', { glossaryTerms });
});

module.exports = router;
