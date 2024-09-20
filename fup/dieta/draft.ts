let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


let qtd: number = +input();
let caloriasTotal: number = +input();

for(let i = 0; i < qtd; i++) {
  let caloriasDias: number = +input();
  caloriasTotal += caloriasDias
}
console.log((caloriasTotal/qtd).toFixed(1))















    






// let qtd: number = +input();
// let caloriastotal: number = 0;

// for(let i = 0; i < qtd; i++) {
//   let caloriasDias = +input();
//   caloriastotal += caloriasDias
// }
// let media = caloriastotal/qtd
// console.log((media).toFixed(1));