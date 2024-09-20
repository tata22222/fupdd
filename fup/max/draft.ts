let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

//write("qxcode");


let numero: number = +input();
let numero2: number = +input();

/*function final(numero: number, numero2: number): number {
    if(numero > numero2) {
        return numero;
    } 
    
        return numero2;
}*/
//console.log(final(numero, numero2))

let total: number = Math.max(numero, numero2)
console.log(total)
