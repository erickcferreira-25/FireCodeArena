const readline = require("readline-sync");

let quantidade = readline.question("Quantos números deseja cadastrar? ");

let multiplosDe3 = [];
let outrosNumeros = [];

for (let i = 0; i < quantidade; i++){
    let numero = readline.question("Digite um número: ");
    if (numero % 3 == 0)
        multiplosDe3.push(numero);
    else
        outrosNumeros.push(numero);
}

console.log("Múltiplos de 3:", multiplosDe3);
console.log("Outros números:", outrosNumeros);
