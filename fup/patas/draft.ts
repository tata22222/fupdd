let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

//write("qxcode");

let chuteChico: number = +input();
let chuteCebolinha: number = +input();
let qtdd: number = +input();

let soma: number = 0;

for(let i = 0; i <= qtdd; i++) {
  let animal = input();
  if(animal == "v" || animal == "c") {
    soma += 4;
  } else if(animal == "g") {
    soma += 2;
  }
}
console.log(soma)

let distChico: number = Math.abs(soma - chuteChico)
let distCebolinha: number = Math.abs(soma - chuteCebolinha)

if(distChico < distCebolinha) {
  console.log("Chico Bento")
} else if (distCebolinha < distChico) {
  console.log("Cebolinha")
} else  {
  console.log("empate")
}

