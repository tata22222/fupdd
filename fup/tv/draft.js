let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let valor = +input();
let nParcelas = +input();
  
let taxa = (nParcelas - 1) * 5;
let juros = valor * (taxa/100)

let total = valor + juros 
let vParcelas = total/nParcelas

console.log(vParcelas.toFixed(2))
console.log(total.toFixed(2))
