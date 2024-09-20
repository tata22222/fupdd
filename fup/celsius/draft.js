let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

t_c = +input();
t_f = 1.8 * t_c + 32
resp = t_f.toFixed(6)
console.log(resp)