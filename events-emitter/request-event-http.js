const http = require("http");

// const server = http.createServer((req,res)=>{
//     res.end("Hello")
// })

// Using Event Emitter API
const server = http.createServer();
// emits request event
// listen to it / respond to it
server.on("request", (req, res) => {
  res.end("Hello");
});

server.listen(8000);
