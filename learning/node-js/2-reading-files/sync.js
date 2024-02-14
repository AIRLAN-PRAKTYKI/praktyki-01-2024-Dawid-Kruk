const { readFileSync } = require('fs');

const txt = readFileSync('./file.txt', 'utf-8');

console.log(txt);

// this code will wait for the file to read