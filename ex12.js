const readline = require("readline-sync");

let numeros = [];

for (let i = 0; i < 5; i++){
    let numero = readline.question("Digite um número: ");
    numeros.push(numero);
}

let soma = 0;

for (let i = 0; i < 5; i++){
    soma += numeros[i];
}

let media = soma / 5;

console.log("Média:", media);
console.log("Números acima da média:");

for (let i = 0; i < 5; i++){
    if (numeros[i] > media){
        console.log(numeros[i]);
    }
}

