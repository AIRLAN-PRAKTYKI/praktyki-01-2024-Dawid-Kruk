const express = require('express');
const app = express();
const logger = require('./logger.js');
const authorize = require('./authorize.js');

app.use('/api', [authorize, logger]);

app.get('/', (req, res) => {
    res.send('<h1>home</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>about</h1>');
});

app.get('/api/products', (req, res) => {
    console.log(req.user);
    res.send('<h1>products</h1>');
});

app.get('/api/items', (req, res) => {
    res.send('<h1>items</h1>');
});


app.listen(3060, () => {
    console.log('app running on http://localhost:3060');
});