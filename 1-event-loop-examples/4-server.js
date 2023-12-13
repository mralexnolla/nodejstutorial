const http = require('http')

const server  = http.createServer((req, res) => {
  console.log('request even')
  res.end("Hello World")
})

server.listen(3000, () => {
    console.log("Server is runing on port : 3000")
})