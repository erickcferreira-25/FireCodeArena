const readline = require("readline-sync");

let quantidade = readline.question("Quantos números deseja cadastrar? ");

let positivos = [];
let negativos = [];

for (let i = 0; i < quantidade; i++){
    let numero = readline.question("Digite um número: ");
    if (numero > 0)
        positivos.push(numero);
    else if (numero < 0)
        negativos.push(numero);
}
console.log("Números positivos:", positivos);
console.log("Números negativos:", negativos);