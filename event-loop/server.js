const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request event");
  res.end("Namaste");
});

server.listen(8000, () => {
  console.log("Server listening on port : 5000...");
});

// this process stays alive bcoz listen is asynchronous
