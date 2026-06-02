const readline = require("readline-sync");

let numeros = [];
let dobro = [];

for (let i = 0; i < 5; i++){
    let numero = readline.question("Digite um número: ");
    numeros.push(numero);
}

for (let i = 0; i < 5; i++){
    dobro.push(numeros[i] * 2);
}

console.log("Números:", numeros);
console.log("Dobro:", dobro);