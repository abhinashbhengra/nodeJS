// Usecase of stream : Reading a file
// Before when we used readFileSync - synchronous approach
// we were reading the whole file and we are setting
// to a variable, but if we have a big file, eventually
// a variable is not good enough, we get an error -- size
// Solution : readStreamOption

const { createReadStream } = require("fs");

// for (let i = 0; i < 10000; i++) {
//   writeFileSync("./module-02/path-example/big.txt", `Big file ${i}\n`, {
//     flag: "a",
//   });
// }

const stream = createReadStream("./module-02/path-example/big.txt", {
  highWaterMark: 90000,
});

// default 64kb
// last buffer - remainder
// higWaterMark - control size
// const stream = createReadStream("./module-02/path-example/big.txt",{highWaterMark:90000});
// const stream = createReadStream("./module-02/path-example/big.txt", {encoding: 'utf-8});

stream.on("data", (data) => {
  console.log(data);
});
