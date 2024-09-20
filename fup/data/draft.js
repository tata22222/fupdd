let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let hora = +input();
let minuto = +input();
let dd = +input();
let mm = +input();
let aa = +input();
aa = aa % 100

hora = String(hora).padStart(2, '0')
minuto = String(minuto).padStart(2, '0')
dd = String(dd).padStart(2, '0')
mm = String(mm).padStart(2, '0')
aa = String(aa).padStart(2, '0')

let resp = hora + ":" + minuto + " " + dd + "/" + mm + "/" + aa
console.log(resp)