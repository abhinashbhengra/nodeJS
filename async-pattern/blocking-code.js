const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/about") {
    //BLOCKING CODE !!
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log("test");
      }
    }
    res.end("About Page");
  } else {
    res.end("Error Page");
  }
});

server.listen(8000, () => {
  console.log("server listening on port : 8000");
});

// Note : for blocking code inside about
// initial thought - Because of the blocking code
// Who ever is trying to access '/about'
// page will be block for sometime before getting the
// response
// But actual secenrio will be different :
// If the other user is trying to access other path even '/'
// page will also be blocked.

// Solution can be : we have to use asynchronous approach
// to serve pages
// This way we can offload the loading part and whenever
// loading of page is done, serve back
