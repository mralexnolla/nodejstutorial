// GLOBALS VARIABLES

// __dirname    - path to current directory
// __filename   - file name
// require      - function to use modules (CommonJS)
// module       - info about current module (file)
// process      - info about env whare the program is being executed

console.log(__dirname);
console.log("----------------");
console.log(__filename);
console.log("----------------");
// console.log(require)
// console.log("----------------")
// console.log(module)
// console.log("----------------")
// console.log(process)

setTimeout(() => {
  clearInterval(intervalid);
}, 8000);

intervalid = setInterval(() => {
  console.log("u must run");
}, 2000);
