let numero = parseInt(window.prompt("Informe um número para que seja exibida sua tabuada"))

let resultado = " "

for (let i = 1; i <= 10; i++) {
    resultado += `${numero} x ${i} = ${numero * i}\n`
}

alert(resultado)

