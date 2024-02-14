const express = require('express');
const { readFile } = require('fs');

const app = express();

app.get('/', (request, response) => {

    readFile('./index.html', 'utf-8', (err, html) => {

        if (err) {
            response.status(500).send("Something is wrong");
        }

        response.send(html);

    })

});

app.listen(process.env.PORT || 3000, () => console.log(`Your website: http://localhost:3000`));
