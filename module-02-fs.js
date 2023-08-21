// Synchronous

const { readFileSync, writeFileSync } = require("fs");

// Reading a file
const first = readFileSync("./path-example/first.txt", "utf-8");
const second = readFileSync("./path-example/second.txt", "utf-8");
console.log(first, second);

// creating a file
// writeFileSync(path/filename,data)
writeFileSync(
  "./path-example/sync-result.txt",
  `Result is : ${first}, ${second}`
);

// If file is not there node is going to make one
// If file is present node by default will override all values present

// to append

writeFileSync(
  "./path-example/sync-result01.txt",
  `Result:${first}, ${second}`,
  { flag: "a" }
);
