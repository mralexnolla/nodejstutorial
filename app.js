//npm - global commands, come with node
//npm --version

//npm local dependency - used it in your local environment
// npm install / i <package>

//npm - glabl dependency - use is in any project
//npm install -g <package>

//package.json - stores info about project/package
// manual approach (create package.json in the root)
// npm init (answer questions step by by)
// npm init -y (picks the defaults setup)


const _ = require('lodash');

const item = [1, [2, [3, [4]]]]
const newItem = _.flattenDeep(item)

console.log(newItem);


// git init
// .git 
// ls -a
// git add . or git add *
// git status