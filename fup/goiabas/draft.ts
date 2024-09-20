var readlineSync = require('readline-sync');
let input = () : string => readlineSync.question();

console.log("Qual o seu nome?")
let user: string = input();
//console.log("Legal " + user + "," + " agora tente adivinhar o número que eu pensei");
let menor = 0;
let maior = 100;
let numero = Math.floor(Math.random() * 100);

for(;;) {
    console.log(`chute um valor entre ${menor} e ${maior}: `, "")
    let chute = +input();
    if (chute == numero) {
        console.log("acertou")
        break;
    }
    if(numero < chute) {
        console.log("eh menor")
        maior = chute;
    } 
    else {
        console.log("eh maior")
        menor = chute;
    }
    if(maior - menor == 2) {
        console.log("Você perdeu!")
        break;
    }

}

/*for(let i = 0; i <= 10; i++) {
    let chute = +input();
    if (chute == numero) {
        console.log("acertou miseravi")
        break;
    } else {
        if(chute < numero) {
            console.log("mais alto!")
        } else {
            console.log("menor!")
        }
    }
}*/