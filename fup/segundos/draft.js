let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let valor = +input();

let horas = valor/3600;
let resto = valor % 3600;
let minutos = resto/60;
let segundos = resto % 60;
console.log(Math.floor(horas)+":"+Math.floor(minutos)+":"+Math.floor(segundos))