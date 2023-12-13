const { readFile, writeFile } = require("fs").promises;

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf-8");
    const second = await readFile("./content/second.txt", "utf8");
    writeFile("./content/mindblown.text", "I love node");

    console.log(first);
    console.log(second);
  } catch (error) {
    console.log(error);
  }
};

start();

// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// let getText = (path) => {
//   return new Promise((resolve, reject) => {

//     readFile(path, "utf-8", (err, result) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(result);
//     });
//   })
// }

// getText('./content/first.txt')
// .then((result) => {console.log(result)})
// .catch((err) => {console.log(err)})

// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.end("Home page");
//   } else if (req.url === "/about") {
//     for (i = 0; i < 10000; i++) {
//       for (j = 0; j < 10000; j++) {
//         console.log(`${i} ${j}`);
//       }
//     }
//     res.end("About page");
//   } else {
//     res.end("Error page");
//   }
// });

// server.listen(3000, () => {
//   console.log("server running on port 3000");
// });
