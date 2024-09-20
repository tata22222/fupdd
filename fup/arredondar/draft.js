let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let operaçao = input();
let numero = +input();

if (operaçao === 'r') 
{
   console.log(Math.round(numero));
} 
else if (operaçao === 'f') 
{
  console.log(Math.floor(numero));
} 
else if (operaçao === 'c') {
  console.log(Math.ceil(numero));
}