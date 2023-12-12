const { readFile, writeFile } = require("fs");

console.log('start')
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    console.log("continue");
    writeFile(
      "./content/text-async.txt",
      `${first}\n ${second}`,
      { flag: "a" },
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("End");
      }
    );
  });
});

console.log("started another session")
