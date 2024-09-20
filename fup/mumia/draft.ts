let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

//write("qxcode");
function calcularIdade(nome: string, idade: number): string {
    if(idade < 12) {
      return(nome+" "+"eh " + "crianca")
    }
    if (idade < 18) {
      return(nome+" "+"eh " + "jovem")
    }
    if(idade < 65) {
      return(nome+" "+"eh " + "adulto")
    }
    if(idade >= 65 && idade <= 1000) {
      return(nome+" "+"eh " + "idoso")
    } 
      return(nome+" "+"eh " + "mumia")
}
let nome: string = input();
let idade: number = +input();

console.log(calcularIdade(nome, idade))




// //let nome: string = input();
//   if(idade < 12) {
//     console.log(nome+" "+"eh " + "crianca")
//   } else if (idade < 18) {
//     console.log(nome+" "+"eh " + "jovem")
//   } else if(idade < 65) {
//     console.log(nome+" "+"eh " + "adulto")
//   } else if(idade >= 65 && idade <= 1000) {
//     console.log(nome+" "+"eh " + "idoso")
//   } else {
//     console.log(nome+" "+"eh " + "mumia")
//   }
