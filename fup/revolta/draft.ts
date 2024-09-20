let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

//write("qxcode");

let qtd = +input;
let lista: number[] = []
for(let i = 0; 1 < qtd; i++) {
  lista.push(+input());
}

let somaI = 0;
let somaP = 0;

for(let elem of lista){
  if(elem % 2 != 0) {
    somaI += elem;
  } else {
    somaP += elem;
  }

}

if (somaI > somaP) {
  write("soldados")
} else if (somaP > somaI) {
  write("rebeldes")
} else {
  write("empate")
}