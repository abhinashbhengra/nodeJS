const { readFile } = require("fs");

console.log("first task");
//check file path
readFile("./module-02/path-example/first.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
  console.log("done first task");
});
console.log("next task");
