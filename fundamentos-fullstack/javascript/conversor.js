let medida = prompt('Para qual medida deseja converter? \n 1 - quilômetro \n 2 - hectômetro \n 3 - decâmetro \n 4 - decímetro \n 5 - centímetro \n 6 - milímetro');
let distancia;

let valor = parseFloat(prompt('Digite o valor para conversão:'));

switch (medida) {
    case '1': 
        distancia = valor * 1000; 
        break;
    case '2': 
        distancia = valor * 100; 
        break;
    case '3': 
        distancia = valor * 10; 
        break;
    case '4': 
        distancia = valor / 10;
        break;
    case '5': 
        distancia = valor / 100; 
        break;
    case '6':
        distancia = valor / 1000; 
        break;
    default:
        alert('Opção inválida');
}

alert('Resultado da conversão: ' + distancia);