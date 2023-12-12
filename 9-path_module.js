
const path = require("path");

//console.log(path.sep)

const filrPath = path.join("/path1/", "path2", "text.txt");
//console.log(filrPath);

const baseName = path.basename(filrPath);
//console.log(baseName);

const absolute = path.resolve(__dirname, "path1", "path2", "text.txt");
console.log(absolute);