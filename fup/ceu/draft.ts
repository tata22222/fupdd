let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

//write("qxcode");

let numero: number = +input();
let lista: string = ""

for(let i = 0; i <= 10; i++) {
  if(i != numero) {
    if(i == 10) {
      lista += "ceu "
    } else {
      lista += i + " "
    }
  }
}
console.log("[ " + lista + "]")























// let numero: number = +input();
// let lista: string = "";

// for(let i = 0; i <= 10; i++) {
//   if(i != numero) {
//     if(i == 10) {
//       lista += "ceu";
//     } else {
//       lista += i + " ";
//     }
//   }
// }
// console.log("[ " + lista + "]")