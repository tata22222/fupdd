let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

//write("qxcode");

let alvin: number = +input();
let simon: number = +input();
let teodoro: number = +input();

if(alvin > simon) {
    if(simon > teodoro) {
        console.log(simon)
    } else if(teodoro > alvin) {
        console.log(alvin)
    } else {
        console.log(teodoro)
    }
}
if(simon > alvin) {
    if(alvin > teodoro) {
        console.log(alvin)
    } else if (teodoro > simon) {
        console.log(simon)
    } else {
        console.log(teodoro)
    }
}