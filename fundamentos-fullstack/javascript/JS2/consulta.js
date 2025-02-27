let pacientes = [];
let opcao;

do {
    let listaPacientes = "Fila de espera:\n";
    if (pacientes.length === 0) {
        listaPacientes += "Nenhum paciente na fila.\n";
    } else {
        for (let i = 0; i < pacientes.length; i++) {
            listaPacientes += (i + 1) + "º " + pacientes[i] + "\n";
        }
    }
    opcao = prompt(
        listaPacientes +
        "\nEscolha uma opção:\n" +
        "1 - Adicionar Paciente\n" +
        "2 - Consultar Paciente\n" +
        "3 - Sair"
    );

    switch (opcao) {
        case "1":
            let novoPaciente = prompt("Digite o nome do paciente:");
            if (novoPaciente !== null && novoPaciente !== "") {
                pacientes.push(novoPaciente);
            }
            break;

        case "2":
            if (pacientes.length > 0) {
                let pacienteConsultado = pacientes.shift();
                alert("O paciente " + pacienteConsultado + " foi consultado.");
            } else {
                alert("Não há pacientes na fila.");
            }
            break;

        case "3":
            alert("Volte sempre!");
            break;

        default:
            alert("Opção inválida. Tente novamente.");
    }
} while (opcao !== "3");
