const readline = require("readline-sync")

let quantidade = readline.question("Quantas notas deseja cadastrar? ")

let notas = []

for (let i = 0; i < quantidade; i++){
    let nota = readline.question("Digite a nota: ")
    notas.push(nota)
}

let maiorNota = notas[0]
let menorNota = notas[0]
let soma = 0
let aprovados = 0
let reprovados = 0

for (let i = 0; i < quantidade; i++){
    if (notas[i] > maiorNota){
        maiorNota = notas[i]
    }
    if (notas[i] < menorNota){
        menorNota = notas[i]
    }
    soma += notas[i]
    if (notas[i] >= 7){
        aprovados++
    } else {
        reprovados++
    }
}

let media = soma / quantidade

console.log("Maior nota:", maiorNota)
console.log("Menor nota:", menorNota)
console.log("Média da turma:", media)
console.log("Quantidade de aprovados:", aprovados)
console.log("Quantidade de reprovados:", reprovados)
