// using even to launch server

const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  res.end("welcome");
});

server.listen(3000, () => {
  console.log("server started on port 30000");
});
