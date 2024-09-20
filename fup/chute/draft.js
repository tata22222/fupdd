let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let valor = +input();
let chute1 = +input();
let chute2 = +input();

let chute01 = Math.abs(valor - chute1)
let chute02 = Math.abs(valor - chute2)

if (chute01 < chute02) {
  console.log("primeiro")
} 
if (chute02 < chute01) {
  console.log("segundo")
} 
if (chute01 === chute02) {
  console.log("empate")
}
