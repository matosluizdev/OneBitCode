
const nomecarro1 = prompt('Qual o nome do primeiro carro?')
const nomecarro2 = prompt('Qual o nome do segundo carro?')

const velocidade1 = parseFloat(prompt('Qual a velocidade do primeiro carro?'))
const velocidade2 = parseFloat(prompt('Qual a velocidade do segundo carro?'))

if(velocidade1 > velocidade2){
    alert(`O carro ${nomecarro1} é mais rápido que o carro ${nomecarro2}`)
}else if(velocidade2 > velocidade1){
    alert(`O carro ${nomecarro2} é mais rápido que o carro ${nomecarro1}`)
} else {
    alert(`Os carros ${nomecarro1} e ${nomecarro2} tem velocidades iguais`)
}