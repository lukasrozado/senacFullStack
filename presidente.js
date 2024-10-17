var userPresidente = "admin";
var passwordPresidente = "1234";

function abrirUrna() {
    var ask_user = prompt("Usuário: ");
    if (userPresidente == ask_user) {
        var ask_password = prompt("Senha: ");
        if (passwordPresidente == ask_password) {
            localStorage.setItem("iniciar_urna", true);
            alert("Urna aberta.");
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
            localStorage.setItem("iniciar_urna", false);  // Armazena estado no localStorage
            alert("Urna fechada.");
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
