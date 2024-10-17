let listaPrefeito = ["Zé", "Ana"];
let idPrefeito = [11, 12];
let listaVereador = ["Paula", "Marcos"];
let idVereador = [11300, 12100];
var contadorZe = 0;
var contadorAna = 0;
var contadorPaula = 0;
var contadorMarcos = 0;
var contadorNuloVereador = 0;
var contadorBrancoVereador = 0;
var contadorNulo = 0;
var contadorBranco = 0;

function contadorVotos(valor) {
    var voto = Number(prompt("Digite o número do seu candidato: "));
    if (valor === true) {
        if (voto == 11) {
            contadorZe += 1;
            alert("Voto validado");
        } else if (voto == 12) {
            contadorAna += 1;
            alert("Voto validado");
        } else {
            contadorNulo += 1;
            alert("Voto nulo");
        }
    } else {
        contadorBranco += 1;
        alert("Voto em branco validado");
    }
}

function contadorVereador(valor) {
    var voto = Number(prompt("Digite o número do vereador: "));
    if (valor === true) {
        if (voto == 11300) {
            contadorPaula += 1;
        } else if (voto == 12100) {
            contadorMarcos += 1;
        } else {
            contadorNuloVereador += 1;
        }
    } else {
        contadorBrancoVereador += 1;
    }
}

function main() {
    var iniciar_urna = localStorage.getItem("iniciar_urna") === "true"; 
    if (iniciar_urna) {
        while (iniciar_urna) {
            var valor = confirm("Deseja iniciar a votação?");
            if (valor) {
                var ask_voto = confirm("Deseja escolher um prefeito?");
                contadorVotos(ask_voto);
                var ask_votoVereador = confirm("Deseja escolher um vereador?");
                contadorVereador(ask_votoVereador);
            }
            iniciar_urna = localStorage.getItem("iniciar_urna") === "true";
        }
    } else {
        alert("A urna não está aberta.");
    }
}

main();
