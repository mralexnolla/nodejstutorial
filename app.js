const http = require("http")
const fs = require("fs")

http.createServer((req, res) => {
  // const text = fs.readFileSync('./content/big.txt','utf-8')
  // res.end(text)
  const text = fs.createReadStream('./content/big.txt','utf-8')
  text.on('data', (results) => {
    res.end(results)
  })
}).listen(3000)