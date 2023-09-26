function validaLogon() {
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if (usuario === "" || senha === "") {
        mensagemErro.textContent = "Campos em branco";
    } else {
        window.location.href = "./Home/index.html";
    }
}