const readline = require("readline-sync");

let idades = [];

for (let i = 0 ; i < 5; i++){
    let idade = readline.question("Digite a idade da pessoa; ");
    idades.push(idade);
}