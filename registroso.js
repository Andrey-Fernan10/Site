const novoRegistro = document.getElementById("voltar")
if (novoRegistro){
    novoRegistro.addEventListener("click", function(){

    let nomeR = document.getElementById("nome").value
    let sobrenomeR = document.getElementById("sobrenome").value
    let gmailR = document.getElementById("gmail").value
    let senhaR = document.getElementById("senhaN").value

    if (nomeR.trim() !== "" && sobrenomeR.trim() !== "" && gmailR.trim !== "" && senhaR.trim() !== ""){
        alert("Registro concluído com sucesso")
        window.location.href = "login.html"
    } else {
        alert("Preencha todos os campos")
    }


    })
}