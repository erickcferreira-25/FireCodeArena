const readline = require("readline-sync")

let numeros = []

for(let i = 0; i < 10; i++){
    let numero = readline.question("Digite um número:")
    numeros.push(numero)
}
console.log(numeros)

let quantidadePositivos = 0

for(let i = 0; i < 10; i++){
    if(numeros[i] > 0){
        quantidadePositivos++
    }
}

console.log("Quantidade de números positivos:", quantidadePositivos)
