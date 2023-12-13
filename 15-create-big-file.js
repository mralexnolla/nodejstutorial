const { writeFileSync, readFileSync, createReadStream } = require("fs");

for (i = 0; i < 100000; i++) {
  writeFileSync("./content/big.txt", `this is a big file ${i}\n`, {
    flag: "a",
  });
}

const readmyfile = readFileSync("./content/big.txt");
//console.log(readmyfile);

const rstream = createReadStream("./content/big.txt");

rstream.on("data", (result) => {
  console.log(result);
});
