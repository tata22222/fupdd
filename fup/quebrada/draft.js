let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

n1 = +input();
n2 = +input();

resutado = Math.floor(n1/n2)
resto = Math.floor(n1 % n2)
resutado2 = (n1/n2).toFixed(2)

console.log(resutado)
console.log(resto)
console.log(resutado2)