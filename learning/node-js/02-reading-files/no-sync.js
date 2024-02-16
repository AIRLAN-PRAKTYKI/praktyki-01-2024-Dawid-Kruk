const { readFile } = require('fs');

readFile('./file.txt', 'utf-8', (err, txt) => {
    console.log(txt);
})

// this code won't wait for the file to read