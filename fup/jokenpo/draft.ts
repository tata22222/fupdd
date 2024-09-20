let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

//write("qxcode");

let jog1: string = input();
let jog2: string = input();
//let letra: string = input();

if(jog1 === jog2) {
  //console.log("empate")
  console.log("empate")
} else if (
  (jog1 === "P" && jog2 === "S") ||
  (jog1 === "S" && jog2 === "R") ||
  (jog1 === "R" && jog2 === "P") ) {
  console.log("jog2") } else {
  console.log("jog1")
  }