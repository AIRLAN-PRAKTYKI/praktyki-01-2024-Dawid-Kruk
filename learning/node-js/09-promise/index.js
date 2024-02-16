const { readFile } = require('fs');
const util = require('util');

const readFilePromise = util.promisify(readFile);

const start = async () => {
    try {
        const first = await readFilePromise('./myFile.txt', 'utf-8');
        console.log(first);
    } catch (err) {
        console.log(err);
    }
}

start();


// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         })
//     })
// }

// getText('./myFile.txt')
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));