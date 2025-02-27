const baralho = []
let opcao = ""

do {
  let listaCartas = "Cartas no baralho:\n"
  if (baralho.length === 0) {
    listaCartas += "Nenhuma carta no baralho.\n"
  } else {
    listaCartas += baralho.join("\n") 
  }

  opcao = prompt(
    listaCartas +
    "\n\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair"
  )

  switch (opcao) {
    case "1":
      const novaCarta = prompt("Qual é a carta?")
      if (novaCarta) {
        baralho.unshift(novaCarta) 
      } else {
        alert("Nome da carta inválido!")
      }
      break
    case "2":
      const cartaPuxada = baralho.shift() 
      if (!cartaPuxada) {
        alert("Não há nenhuma carta no baralho!")
      } else {
        alert("Você puxou um(a) " + cartaPuxada)
      }
      break
    case "3":
      alert("Saindo...")
      break
    default:
      alert("Opção inválida!")
  }

} while (opcao !== "3");
