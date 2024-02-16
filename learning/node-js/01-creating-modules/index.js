const generateRandomNum = require('./rand-num');
const sayHi = require('./introduction');

const number = generateRandomNum(1, 3);

console.log(number);
sayHi("Jack");