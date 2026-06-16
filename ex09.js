const redline = require("readline-sync")

let nomes = []

for (let i = 0; i < 5; i++){
    let nome = readline.question("Digite um nome: ")
    nomes.push(nome)
}

let nomeProcurado = readline.question("Digite o nome que deseja procurar: ")

let encontrado = false

for (let i = 0; i < 5; i++){
    if (nomes[i] === nomeProcurado){
        encontrado = true
        break
    }
}

if (encontrado){
    console.log("Nome encontrado!")
} else {
    console.log("Nome não encontrado!")
}
