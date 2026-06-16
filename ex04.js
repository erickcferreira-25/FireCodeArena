const readline = require("readline-sync")

let numeros = []

for (let i = 0; i < 5; i++){
    let numero = readline.question("digite um número: ")
    numeros.push(numero)
}

let maior = numeros[0]

for (let i = 1; i < 5; i++){
    if (numeros[i] > maior){
        maior = numeros[i]
    }
}

console.log("O maior número é:", maior)
