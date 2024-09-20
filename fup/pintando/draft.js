let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

a = +input()
b = +input()
c = +input()

p = (a+b+c)/2
area =(p*(p-a)*(p-b)*(p-c))
raiz = Math.sqrt(area).toFixed(2)

console.log(raiz)