let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let numero = +input();

if (numero > 0) {
  console.log("+")
} 
else if (numero < 0) {
  console.log("-")
} 
else
{
  console.log("0")
}
