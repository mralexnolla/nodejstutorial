//npm - global commands, come with node
//npm --version

//npm local dependency - used it in your local environment
// npm install / i <package>

//npm - glabl dependency - use is in any project
//npm install -g <package>
//npm install nodemon -D or --save-dev  //to install packages as develpment dependencies
// npm start and npm run dev //to start the app


//package.json - stores info about project/package
// manual approach (create package.json in the root)
// npm init (answer questions step by by)
// npm init -y (picks the defaults setup)





// const _ = require('lodash');

// const item = [1, [2, [3, [4]]]]
// const newItem = _.flattenDeep(item)

// console.log(newItem);
// console.log("Hello world")


// git init
// .git 
// ls -a
// git add . or git add *
// git status
// git commit - m "some description"
// git push -u origin main

// Event loop, Async patterns, events emitter and streams

//synchronous or js reads everything on line by line 

// const {readFile} = require("fs")

// console.log("started the first task ")

// readFile('./content/first.txt', 'utf8', (err, result) => {
//   if(err){
//     console.log(err)
//     return
//   }
//   console.log(result)
// })

// console.log("starting the next operation")

// console.log('first')

// setTimeout(() => {
//   console.log("second")
// }, 3000)

// console.log('third')

// setInterval(() => {
//   console.log("hello my people")
// }, 2000)

// console.log("this will run first")

// const http = require('http')

// const server = http.createServer((req, res) => {
//    console.log("request event")
//    res.end("Well done ohhh")
// })

// server.listen(3000, () => {
//   console.log("Server is running oin port 3000")
// })

setTimeout(() => {
  clearInterval(davido);
  console.log('dem no de see me')
}, 8000)


const davido = setInterval(() => {
  console.log("I'm unavailable")
}, 2000)