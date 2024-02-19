const express = require('express');
const app = express();
const logger = require('./logger.js');

// apply to everything
// app.use(logger);

app.use('/api', logger);

app.get('/api', (req, res) => {
    res.send('<h1>home</h1>');
});

app.get('/api/about', (req, res) => {
    res.send('<h1>about</h1>');
});

app.listen(3060, () => {
    console.log('app running on http://localhost:3060');
});