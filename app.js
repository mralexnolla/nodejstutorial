const http = require('http');

const server = http.createServer((req, res) => {
  // res.write("Hello welcome to my page")
  // res.end()
  if(req.url === "/" ){
    res.end("<h1>home page</h1>");
  }else if(req.url === "/about"){
    res.end("<h1>About us</h1>");
  }else{
    res.end(`
      <h1>I'm unavailable </h1>
      <p>Them no de see me </p>
      <a href="/">back to home</a>
    `)
  }
})

server.listen(3000)