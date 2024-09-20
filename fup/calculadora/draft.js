let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let numero1 = +input();
let numero2 = +input();
let op = input();

if (op == "/") {
  console.log(Math.floor(numero1/numero2))
}
if (op == "+") {
  console.log(numero1+numero2)
}
if (op == "-") {
  console.log(numero1-numero2)
}
if (op == "*") {
  console.log(numero1*numero2)
}
