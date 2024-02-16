const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./public'));

app.get('*', (req, res) => {
    res.send('page not found');
})

app.listen(3002, () => {
    console.log(`running on http://localhost:3002`);
})