let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

v = +input();
h = +input();
tempo = h/60
dist = v*tempo
cons = +input();
desem = dist/cons

console.log((desem).toFixed(2))