const math = require("./math");
const fs= require("fs");

//custom modules
console.log(math.add(5,6));
console.log(math.sub(5,6));

console.log(fs);


fs.writeFileSync("note.txt","Jitu \n ");
fs.appendFileSync("note.txt","ASHISH");

const data = fs.readFileSync("note.txt");
console.log(data.toString());
//fs.mkdirSync("note.js");
//fs.renameSync("note.js","jitu.js");
fs.rmdirSync("jitu.js");
