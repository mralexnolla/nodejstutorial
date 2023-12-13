const {readFile, writeFile} = require("fs").promises

const start = async () => {
  try {

    const first = await readFile("./content/first.txt", "utf-8");
    const second = await readFile("./content/second.txt", "utf8");
    writeFile("./content/mindblown.text", "I love node");

    console.log(first);
    console.log(second);

  } catch (error) {
    console.log(error)
  }
  
}

start()

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


