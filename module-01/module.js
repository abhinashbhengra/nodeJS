// Modules
// note: module-01.js -- how import & export is done in node.

// CommonJs, every file is module (by default)
// Modules - Encapsulated Code

const { peter } = require("./module-name");
const sayHello = require("./module-lib");

const data = require("./module-export");

sayHello(peter);
sayHello("Abhinash");
sayHello("John");

console.log(data);

// console.log(sayHello);
