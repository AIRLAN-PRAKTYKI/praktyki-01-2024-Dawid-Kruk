// local download: npm i <packageName>

// global download: npm install -g <packageName>

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);

console.log(newItems);

// you shouldn't push node_modules to github. Prevent this in .gitignore file