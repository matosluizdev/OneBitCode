let opcao

do{
    opcao = prompt("Escolha uma opção:\n1-Opção 1\n2-Opção 2\n3-Opção 3\n4-Opção 4\n5-Sair")
    switch(opcao){
        case "1":
            alert("Você escolheu a opção 1")
            break
        case "2":
            alert("Você escolheu a opção 2")
            break
        case "3":
            alert("Você escolheu a opção 3")
            break
        case "4":
            alert("Você escolheu a opção 4")
            break
        case "5":
            alert("Você escolheu Sair")
            break
        default:
            alert("Opção inválida")
    }
}while(opcao != "5")