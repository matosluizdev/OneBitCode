const arr = ["Harry", "Rony", "Hermione"]
console.log(arr)

// push: Adiciona um elemento no final do array e devolve o novo tamanho do array
let tamanho = arr.push("Voldemort")
console.log(arr)
console.log(tamanho)

// unshift: Adiciona um elemento no começo do array e devolve o novo tamanho do array
tamanho = arr.unshift("Dumbledore")
console.log(arr)
console.log(tamanho)

// pop: Remove um elemento no final do array e devolve o elemento removido
let elementoRemovido = arr.pop("Voldemort")
console.log(arr)
console.log(elementoRemovido)

// shift: Remove um elemento no começo do array e devolve o elemento removido
elementoRemovido = arr.shift("Dumbledore")
console.log(arr)
console.log(elementoRemovido)

// includes: Verifica se um certo elemento está presente no array 
const inclui = arr.includes("Hermione")
console.log(inclui)

// indexOf: Encontra o índice que possui o elemento indicado, ou -1 caso ele não exista no array
const indice = arr.indexOf("Rony")
console.log(indice)

// slice: Copia uma parte do array e devolve a parte copiada sem alterar o array original

const bruxos = arr.slice(0, 2)

const resto = arr.slice(-1)

console.log(arr)
console.log(bruxos)
console.log(resto)


// concat: Junta dois ou mais arrays e/ou itens e devolve o resultado (sem alterar nenhum dos arrays)
const grifinoria = bruxos.concat(resto, "Fred", "Jorge", "Simas", "Neville", "Gina")
console.log(grifinoria)


// splice: Permite remover elementos em qualquer posição do array e substituir por novos
const elementosRemovidos = grifinoria.splice(indice, 1, "Rony Weasley")
console.log(elementosRemovidos)
console.log(grifinoria)

// Usando o for para percorrer cada elemento do array
for (let indice = 0; indice < grifinoria.length; indice++) {
    const elemento = grifinoria[indice]
    console.log(elemento + " se encontra na posição " + indice)
  }