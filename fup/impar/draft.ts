let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

//write("qxcode");

let jogadas: number = +input();
let d1: number = +input();
let d2: number = +input();
let soma: number = d1 + d2;

if(jogadas == 0) {
    if(soma % 2 == 0) {
        console.log(0)
    } else {
        console.log(1)
    }
} 
if(jogadas == 1) {
    if(soma % 2 == 0) {
        console.log(1)
    } else {
        console.log(0)
    }
}