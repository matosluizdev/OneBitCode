const atacante = prompt("Qual é o nome do personagem atacante?")
const poderDeAtaque = parseFloat(prompt("Qual é o seu poder de ataque?"))

const defensor = prompt("Qual é o nome do personagem defensor?")
const vida = parseFloat(prompt("Qual o tamanho dos pontos de vida?"))
const defesa = parseFloat(prompt("Qual poder da defesa?"))
const possuiEscudo = prompt("O personagem possui escudo? (Sim ou Não)")

let danoCausado

if(poderDeAtaque > defesa && possuiEscudo === "Não") {
    danoCausado = poderDeAtaque - defesa
} else if (poderDeAtaque > defesa && possuiEscudo === "Sim") {
    danoCausado = (poderDeAtaque - defesa) * 0.5
} else if (poderDeAtaque <= defesa) {
    danoCausado = 0
}

let vidaAtual = vida - danoCausado

alert(`${atacante} atacou ${defensor} causando ${danoCausado} de dano.`)
alert (atacante + "\n Poder de Ataque: " + poderDeAtaque + "\n" + defensor + "\n Vida: " + vida + "\n Defesa: " + defesa + "\n Escudo: " + possuiEscudo + "\n Dano Causado: " + danoCausado + "\n Vida Atual: " + vidaAtual)