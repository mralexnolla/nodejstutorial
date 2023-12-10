//Global Variable

// __dirname
// __filename
// require
// module
// process

//Modules are (Encapsulated Code) ie Will only share what we want (the minimum)
const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative_flavore")

//console.log(sayHi);
console.log(data)
sayHi("Luke");
sayHi(names.john);
sayHi(names.peter);

//console.log(require)
