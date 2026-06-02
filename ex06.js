const readline = require("readline-sync");

let notas = [];

for (let i = 0; i < 4; i++){
    let nota = readline.question("Digite a nota: ");
    notas.push(nota);
}

let soma = 0;

for (let i = 0; i < 4; i++){
    soma += Number(notas[i]);
}

let media = soma / 4;
console.log("A média é:", media);
if (media >= 7){
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}
