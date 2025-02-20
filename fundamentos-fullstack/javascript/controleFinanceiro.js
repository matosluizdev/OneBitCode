let saldo = 0 
do{
    alert("Seu saldo atual é: " + saldo)
    opcao = prompt("Escolha uma opção:\n1-Adicionar dinheiro \n2-Retirar Dinheiro \n3-Sair")
    switch(opcao){
        case "1":
            saldo += parseFloat(prompt("Digite o valor a ser adicionado:"))
            break
        case "2":
            saldo -= parseFloat(prompt("Digite o valor a ser retirado:"))
            break
        case "3":
            alert("Seu saldo final é: " + saldo)
            break
        default:
            alert("Opção inválida")
    }
}while(opcao != "3")