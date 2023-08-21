const path = require("path");

console.log(path.sep); // console path seperator

const filePath = path.join("/path-example", "sub-dir-path", "test.txt");
console.log(filePath);

// get file name
const base = path.basename(filePath);
console.log(base);

// return absolute path
// accepts a sequence of paths or path segments.
const absolute = path.resolve(
  __dirname,
  "path-example",
  "sub-dir-path",
  "test.txt"
);
console.log(absolute);
