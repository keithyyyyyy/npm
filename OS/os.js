// ***(OS) IMPORTING BUILT-IN MODULES***

//setup
const os = require('os') //dn "./" like self-made modules

// user info
const user = os.userInfo()
// console.log(user)

// system uptime
// console.log(`total system uptime is: ${os.uptime()} seconds`)

// more os details
var currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS)