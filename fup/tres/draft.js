let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let numb1 = +input()
let numb2 = +input()
let numb3 = +input()  
console.log (numb1 + numb2 + numb3)