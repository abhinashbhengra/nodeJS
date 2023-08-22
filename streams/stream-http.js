// const { writeFileSync } = require("fs");

// for (let i = 0; i < 100000; i++) {
//   writeFileSync("./module-02/path-example/big.txt", `Big file ${i}\n`, {
//     flag: "a",
//   });
// }

const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    // const text = fs.readFileSync("./module-02/path-example/big.txt", "utf-8");
    // res.end(text);
    const fileStream = fs.createReadStream("./module-02/path-example", "utf-8");
    fileStream.on("open", () => {
      fileStream.pipe(res); // pushing from readStream to writeStream
    });
    fileStream.on("error", (error) => {
      res.end(error);
    });
  })
  .listen(8000);
