const fs = require('fs');

const txt = fs.readFileSync('./list-of-pets.txt', 'utf-8');

console.log(txt);

// overwriting
fs.writeFileSync('./new-file.txt', 'My emojis: 🎇✨🎨🎭');

// appending
fs.writeFileSync('./new-file-2.txt', 'some more text\n', { flag: 'a' });