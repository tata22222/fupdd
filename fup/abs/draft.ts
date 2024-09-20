let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

//write("qxcode");

function absoluto(listin: number[]): number {
    let diminui: number = listin[0] - listin[1];

    if(diminui < 0){
        diminui *= -1;
    }

    return diminui;
}

let dados: string = input();

let lista: string[] = dados.split(" ");
let lista2: number[] = lista.map(x => +x);


//let diminui: number = lista2[0] - lista2[1];
//let final: number = Math.abs(diminui)

console.log(absoluto(lista2))
//"1 5" 