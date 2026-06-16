const readline = require("readline-sync")

let idades = []

for (let i = 0; i < 5; i++){
    let idade = readline.question("Digite a idade: ")
    idades.push(idade)
}
let quantidadeMaiores = 0
let quantidadeMenores = 0

for (let i = 0; i < 5; i++){
    if (idades[i] >= 18){
        quantidadeMaiores++
    } else {
        quantidadeMenores++
    }
}
console.log("Quantidade de pessoas maiores de idade:", quantidadeMaiores)
console.log("Quantidade de pessoas menores de idade:", quantidadeMenores)
