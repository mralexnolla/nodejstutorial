//Modules are (Encapsulated Code) ie Will only share what we want (the minimum)
const names = require('./4-names');
const sayHi = require('./5-utils');

//console.log(sayHi);

sayHi("Luke");
sayHi(names.john);
sayHi(names.peter);

//console.log(require)
