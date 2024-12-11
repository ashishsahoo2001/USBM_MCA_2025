// import modules
const os = require("os");

// console.log(os);
// console.log(os.homedir());  // C:Users/
// console.log(os.hostname()); //DESKTOP
// console.log(os.platform()); //
// console.log(os.release()); //);
// console.log(os.userInfo());
console.log(os.userInfo().username); //

console.log(`Total memory : ${os.totalmem() / (1024 * 1024 * 1024)}`);