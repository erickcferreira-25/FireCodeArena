const readline = require("readline-sync");

let quantidade = readline.question("Quantos números deseja cadastrar? ");

let pares = [];
let impares = [];

for (let i = 0; i < quantidade; i++){
    let numero = readline .question("digite um número:");
    if (numero % 2 == 0)
        pares.push(numero);
    else
        impares.push(numero);
}
console.log("Números pares:", pares);
console.log("Números ímpares:", impares);