let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

//write("qxcode");

function num_to_nome(value: number): string {
    let nomes: string[] = ["", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
}