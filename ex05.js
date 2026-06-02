const readline = require("readline-sync");

let numeros = [];

for (let i = 0; i < 5; i++){
    let numero = readline.question("Digite um número: ");
    numeros.push(numero);
}

let menor = numeros[0];

for (let i = 1; i < 5; i++){
    if (numeros[i] < menor){
        menor = numeros[i];
    }
}

console.log("O menor número é:", menor);