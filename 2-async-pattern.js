const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home page");
  } else if (req.url === "/about") {
    for (i = 0; i < 10000; i++) {
      for (j = 0; j < 10000; j++) {
        console.log(`${i} ${j}`);
      }
    }
    res.end("About page");
  } else {
    res.end("Error page");
  }
});

server.listen(3000, () => {
  console.log("server running on port 3000");
});
