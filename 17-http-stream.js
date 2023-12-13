let http = require("http");
let fs = require("fs");

http
  .createServer((req, res) => {
    // const text = fs.readFileSync('./content/big.txt', 'utf-8')
    // res.end(text)
    const text = fs.createReadStream("./content/big.txt", "utf-8");
    text.on("open", () => {
      text.pipe(res);
    });

    text.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(3000);
