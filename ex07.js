const readline = require("readline-sync")

let numeros = []

for(let i = 0; i < 10; i++){
    let numero = readline.question("Digite um número: ")
    numeros.push(numero)
}

let quantidadePares = 0

for(let i = 0; i < 10; i++){
    if(numeros[i] % 2 == 0){
        quantidadePares++
    }
}

console.log("Quantidade de números pares:", quantidadePares)

