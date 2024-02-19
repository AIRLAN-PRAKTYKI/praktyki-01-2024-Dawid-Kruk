const express = require('express');
const app = express();

// req => middleware => res

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const date = new Date().getFullYear();
    console.log(method, url, date);
    //res.send('<h1>testing</h1>');
    next();
}

app.get('/', logger, (req, res) => {
    res.send('<h1>home</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>about</h1>');
});

app.listen(3050, () => {
    console.log('app running on http://localhost:3050');
});