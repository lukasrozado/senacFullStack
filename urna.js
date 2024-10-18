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

let titulosEleitores = []; 

function registrarLog(mensagem) {
    var data = new Date();
    var horario = data.toISOString(); 
    console.log(`[${horario}] ${mensagem}`);
}

function contadorVotos(valor) {
    var voto = Number(prompt("Digite o número do seu candidato a prefeito: "));
    if (valor === true) {
        if (voto == 11) {
            contadorZe += 1;
            alert("Voto validado para Zé");
            registrarLog("Voto registrado para Zé");
        } else if (voto == 12) {
            contadorAna += 1;
            alert("Voto validado para Ana");
            registrarLog("Voto registrado para Ana");
        } else {
            contadorNulo += 1;
            alert("Voto nulo");
            registrarLog("Voto nulo registrado");
        }
    } else {
        contadorBranco += 1;
        alert("Voto em branco validado");
        registrarLog("Voto em branco registrado");
    }
}

function contadorVereador(valor) {
    var voto = Number(prompt("Digite o número do seu candidato a vereador: "));
    if (valor === true) {
        if (voto == 11300) {
            contadorPaula += 1;
            alert("Voto validado para Paula");
            registrarLog("Voto registrado para Paula");
        } else if (voto == 12100) {
            contadorMarcos += 1;
            alert("Voto validado para Marcos");
            registrarLog("Voto registrado para Marcos");
        } else {
            contadorNuloVereador += 1;
            alert("Voto nulo para vereador");
            registrarLog("Voto nulo registrado para vereador");
        }
    } else {
        contadorBrancoVereador += 1;
        alert("Voto em branco para vereador validado");
        registrarLog("Voto em branco registrado para vereador");
    }
}

function verificarTituloEleitor(tituloEleitor) {
    if (titulosEleitores.includes(tituloEleitor)) {
        alert("Este título de eleitor já foi utilizado para votar!");
        registrarLog(`Tentativa de votar com título duplicado: ${tituloEleitor}`);
        return false;
    } else {
        titulosEleitores.push(tituloEleitor);
        return true;
    }
}

function confirmarVoto(prefeito, vereador) {
    var confirmar = confirm(`Confirme seu voto:\nPrefeito: ${prefeito}\nVereador: ${vereador}`);
    if (confirmar) {
        alert("Voto registrado com sucesso!");
        registrarLog(`Voto confirmado: Prefeito ${prefeito}, Vereador ${vereador}`);
        return true;
    } else {
        alert("Você optou por corrigir seu voto.");
        registrarLog("Voto corrigido pelo eleitor");
        return false;
    }
}

function gerarRelatorioFinal() {
    alert(`
        Relatório Final de Votação:
        Total de votos para Prefeito:
        Zé: ${contadorZe} votos
        Ana: ${contadorAna} votos
        Nulos: ${contadorNulo}
        Brancos: ${contadorBranco}
        
        Total de votos para Vereador:
        Paula: ${contadorPaula} votos
        Marcos: ${contadorMarcos} votos
        Nulos: ${contadorNuloVereador}
        Brancos: ${contadorBrancoVereador}
    `);
    registrarLog("Relatório final gerado");
}

function iniciarVotacao() {
    while (localStorage.getItem("iniciar_urna") === "true") {
        var tituloEleitor = prompt("Digite o número do seu título de eleitor:");
        
        if (verificarTituloEleitor(tituloEleitor)) {
            var valorPrefeito = confirm("Deseja escolher um prefeito?");
            var prefeito = valorPrefeito ? prompt("Digite o número do prefeito: (11 = Zé, 12 = Ana)") : "Voto em Branco";
            contadorVotos(valorPrefeito);

            var valorVereador = confirm("Deseja escolher um vereador?");
            var vereador = valorVereador ? prompt("Digite o número do vereador: (11300 = Paula, 12100 = Marcos)") : "Voto em Branco";
            contadorVereador(valorVereador);
            
            if (confirmarVoto(prefeito, vereador)) {
                alert("Voto concluído.");
                registrarLog(`Voto concluído para Título: ${tituloEleitor}`);
            }
        }

        if (localStorage.getItem("iniciar_urna") === "false") {
            gerarRelatorioFinal(); 
            break;
        }
    }
}
