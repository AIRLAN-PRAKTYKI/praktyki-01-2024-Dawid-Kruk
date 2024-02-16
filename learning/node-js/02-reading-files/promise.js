const { readFile } = require('fs').promises;

async function myFile()
{
    const txt = await readFile('./file.txt', 'utf-8');

    console.log(txt);
}

myFile();