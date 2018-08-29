import * as readline from 'readline-sync';

console.log("Programa que adivinha um número");

/*  obtém  um  inteiro  no  intervalo  (min,  max)  incluindo  min  e  max  */
function obterInt(min:  number,  max:  number)  :  number  {
    min  =  Math.ceil(min);  //arredonda  pra  cima        
    max  =  Math.floor(max);  //arredonda  para  baixo        
    return Math.floor(Math.random()  *  (max  -  min  +  1))  +  min;
}
let n: number = obterInt(0,30);

for(let i=0;i<5;i++){
let palpite  =  readline.questionInt('Digite  um  numero  (0  a  30):  ');
if (palpite === n){
    console.log("Acertou!");
    break;
}
else if (i==4){
    console.log("ERROU! O numero era "+ n);
}
else if(palpite < n){
    console.log("Seu palpite foi menor");
}
else  if(palpite > n){
    console.log("Seu palpite foi maior");
}
}



