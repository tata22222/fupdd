let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

//write("qxcode");

let qtdd: number = +input();

let qtddC: number = 0;
let qtddL: number = 0;
let qtddM: number = 0;
let qtddT: number = 0;

while(qtdd > 0) {
  let entrada: string[] = input().split(" ");
    let sabor: string = entrada[0];
    let turno: string = entrada[1]; 

    if (sabor == "c") {
      qtddC += 1;
    } else if (sabor == "l") {
      qtddL += 1;
    } 
    if (turno == "m") {
      qtddM += 1;
    } else if (turno == "t") {
      qtddT += 1;
    }
    qtdd --;
} 

let saborVen: string = "";
let turnoPer: string = "";
    if(qtddC > qtddL) {
      saborVen = "c"
    } else if (qtddC == qtddL) {
      saborVen = "empate"
    } else {
      saborVen = "l"
    }
    if (qtddM < qtddT) {
      turnoPer = "m"
    } else if(qtddM == qtddT) {
      turnoPer = "empate"
    } else {
      turnoPer = "t"
    }

  console.log(saborVen + ("\n") + turnoPer)