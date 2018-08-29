"use strict";
exports.__esModule = true;
//push();
//length;
//splice() remove todos os elementos e deixa o que vc colocar;
//includes() indexOf()
var nomes = ['Bruno', 'Elaine', 'José', 'Matheus', 'Maria', 'Alana',
    'Erika', 'Alison', 'Lucas', 'Rickson', 'Alberto', 'Beatriz', 'Renata', 'Sayonara'];
/*
console.log("Você vai adicionar dois nomes huahauha!");

console.log("Adicione o 1º nome na lista:");
let  entrada:  string  =  readline.question('Qual  o  seu  nome?  ');
nomes.push(entrada);

console.log("Adicione o 2º nome na lista:");
let  entrada2:  string  =  readline.question('Qual  o  seu  nome?  ');
nomes.push(entrada2);


//imprimir tudo
console.log(nomes);

//B Obtenha a quantidade de nomes adicionados!
console.log("A quantidade de nomes é: "+ nomes.length);

//C Remova o terceiro nome da lista

nomes.splice(2, 1); //(posição,valoresAApagar,"Adicionar")
console.log(nomes);

//D Realize uma busca por um nome qualquer e diga qual posição dele na lista
let  entrada3:  string  =  readline.question("Digite um nome para saber a posição:");
console.log(nomes.indexOf(entrada3));
*/
//E Conte quantos números começam com a letra 'A'
var cont = 0;
for (var i in nomes) {
    if (nomes[i][0] === 'A') {
        cont += 1;
    }
    //console.log(nomes[i][0]);
}
console.log(cont);
