//npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// Global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// package.json - manifest file(stores important info about project/package)
// manual approach(create package.json in the root)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require("lodash");

const array = [1, [2, [3, [4, [5]]]]];

const res = _.flattenDeep(array);

console.log(res);
