// Modules
// note: module-01.js -- how import & export is done in node.

// CommonJs, every file is module (by default)
// Modules - Encapsulated Code

const { peter } = require("./module-01-name");
const sayHello = require("./module-01-lib");

const data = require("./module-01-export");

sayHello(peter);
sayHello("Abhinash");
sayHello("John");

console.log(data);

// console.log(sayHello);
