let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let pao = +input();
let uva = +input();
let maça = +input();

let vpao = +input();
let vuva = +input();
let vmaça = +input();

let din = +input();

let total = pao*vpao + uva*vuva + maça*vmaça
let troco = din - total
console.log (troco.toFixed(2))