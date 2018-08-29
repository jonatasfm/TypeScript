"use strict";
exports.__esModule = true;
var readline = require("readline-sync");
console.log("Programa que adivinha um número");
/*  obtém  um  inteiro  no  intervalo  (min,  max)  incluindo  min  e  max  */
function obterInt(min, max) {
    min = Math.ceil(min); //arredonda  pra  cima        
    max = Math.floor(max); //arredonda  para  baixo        
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var n = obterInt(0, 30);
for (var i = 0; i < 5; i++) {
    var palpite = readline.questionInt('Digite  um  numero  (0  a  30):  ');
    if (palpite === n) {
        console.log("Acertou!");
        break;
    }
    else if (i == 4) {
        console.log("ERROU! O numero era " + n);
    }
    else if (palpite < n) {
        console.log("Seu palpite foi menor");
    }
    else if (palpite > n) {
        console.log("Seu palpite foi maior");
    }
}
