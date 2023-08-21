// Asynchronous -- we need to provide call back
// Call back : It is called when the functionality is complete

const { readFile, writeFile } = require("fs");

//readFile(path,econding,callback(err, data)=>{})
//we get buffer if we dont put econding value
readFile("./path-example/first.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = data;
  console.log(first);

  readFile("./path-example/second.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = data;
    console.log(second);

    writeFile(
      "./path-example/async-result.txt",
      `Result:${first}, ${second}`,
      (err, data) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(data);
      }
    );
  });
});

// Noicee...but callback hell
