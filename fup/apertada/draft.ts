  let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

//write("qxcode");

let lista: number [] = [];
for(let i = 0; i < 5; i++) {
    let entrada = +input();
    lista.push(entrada);
}

let referencia = lista[0];

for(let i = 1; i < lista.length; i++) {
    if(lista[i] < referencia) {
        referencia = lista[i]
    }
}

console.log(referencia);