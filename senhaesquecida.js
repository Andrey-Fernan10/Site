    const naoLembro = document.getElementById("forget") 
    if (naoLembro){
    naoLembro.addEventListener('click', function(){
    alert("Não achamos seu Email, mas precisamos testar se tá funcionando :)")
    window.location.href = "novasenha.html"

    })
}
  

const confirmado = document.getElementById("confirmada")
if (confirmado){    
confirmado.addEventListener('click', function(){
        let novapass = document.getElementById("novasenha").value
        let novapassI = document.getElementById("novasenhaI").value

        if (novapass === novapassI && novapass !== "") {
        alert("Senha alterada com sucesso (mentira)")
        window.location.href = "login.html"
        } else if (novapass === "") {
        alert("Digite a nova senha")
        } else {
            alert("Digite a mesma senha em ambos os campos")
        }
    })
}