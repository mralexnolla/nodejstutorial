const { readFileSync, writeFileSync } = require("fs");

console.log('start')
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log("cintinue");

writeFileSync(
  "./content/resultFile.txt",
  `This resuld: ${first}, ${second}\n`,
  { flag: "a" }
);

console.log("end");
console.log("started another session");



