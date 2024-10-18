var userPresidente = "admin";
var passwordPresidente = "1234";

function abrirUrna() {
    var ask_user = prompt("Usuário: ");
    if (userPresidente == ask_user) {
        var ask_password = prompt("Senha: ");
        if (passwordPresidente == ask_password) {
            localStorage.setItem("iniciar_urna", true);
            alert("Urna aberta.");
            window.location.href = "urna.html"; 
        } else {
            alert("Password Inválido");
        }
    } else {
        alert("Usuário Inválido");
    }
}

function fecharUrna() {
    var ask_user = prompt("Usuário: ");
    if (userPresidente == ask_user) {
        var ask_password = prompt("Senha: ");
        if (passwordPresidente == ask_password) {
            localStorage.setItem("iniciar_urna", false); 
            alert("Urna fechada.");
            gerarRelatorioFinal();  
        } else {
            alert("Password Inválido");
        }
    } else {
        alert("Usuário Inválido");
    }
}

function main() {
    var iniciar = confirm("Deseja abrir a urna? Se sim, confirme. Caso queira fechar, cancele.");
    if (iniciar) {
        abrirUrna();  
    } else {
        fecharUrna(); 
    }
}

main();
