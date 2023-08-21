// http module - which allows to setup web server

const http = require("http");

// create server --- createServer(callback)
// callback -- (req,res)=>{}
// req(request object) -- it contains incoming request
// res(response object) -- the response that we are sending back

const server = http.createServer((req, res) => {
  // res.write("Welcome -- learning NodeJs");
  // after sending response / end request
  //   res.end();
  if (req.url === "/") {
    res.end("Welcome -- Learning NodeJS");
  } else if (req.url === "/about") {
    res.end("Engineer learing backend tech");
  } else {
    res.end(`
    <h1>Oops!! No page found !</h1>
    <a href='/'>Back home </a>
   `);
  }
});

// port -- what port our server is gonna listening to
server.listen(1000);
