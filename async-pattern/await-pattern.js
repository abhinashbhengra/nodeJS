const { readFile, writeFile } = require("fs").promises;
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFile("./module-02/path-example/first.txt", "utf-8");

    const second = await readFile(
      "./module-02/path-example/second.txt",
      "utf-8"
    );

    await writeFile(
      "./module-02/path-example/await-pattern.txt",
      `Mind Blowing : ${first} ${second}`,
      { flag: "a" }
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

// readFile("./module-02/path-example/first.txt", "utf-8", (err, data) => {
//   if (err) {
//     return;
//   } else {
//     console.log(data);
//   }
// });

// Problem  start when we wanna do multiple aciton
// if I want to read two files
// better solution : turning above into promise

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// task done : changed this wrapper function into
// Node's Native option -- module - util

// getText("./module-02/path-example/first.txt")
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Refactor to Async - Await
