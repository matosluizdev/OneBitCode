let nomeTurista = prompt("Olá, qual seu nome?");
let cidades = "";
let viajou = prompt("Você já visitou alguma cidade? (sim/não)").toLowerCase();

while (viajou === "sim") {
    let cidade = prompt("Qual cidade você visitou?");
    if (cidades === "") {
        cidades = cidade; 
    } else {
        cidades += ", " + cidade; 
    }
    
    viajou = prompt("Você já visitou alguma outra cidade? (sim/não)").toLowerCase();
}

if (cidades !== "") {
    alert(nomeTurista + ", você visitou as seguintes cidades: " + cidades + ".");
} else {
    alert(nomeTurista + ", você não visitou nenhuma cidade.");
}
