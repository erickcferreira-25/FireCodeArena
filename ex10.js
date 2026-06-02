const readline = require("readline-sync");

let notas = [];
let aprovados = [];
let reprovados = [];

for (let i = 0; i < 8; i++){
    let nota = readline.question("Digite a nota: ");
    notas.push(nota);
}

for (let i = 0; i < 8; i++){
    if (notas[i] >= 7){
        aprovados.push(notas[i]);
    } else {
        reprovados.push(notas[i]);
    }
}

console.log("Aprovados:", aprovados);
console.log("Reprovados:", reprovados);
