const os = require("os");

//info about the current user
const user = os.userInfo();
//console.log(user)

//method returns the system uptime
const uptime = os.uptime();
//console.log(`The system uptime is ${uptime} seconds`);

const currentOs = {
  name: os.type(),
  user: os.userInfo(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOs);
