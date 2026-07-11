let emailcerto = "andrey@gmail.com"
let senhacerta = "fernandes"



const registrar = document.getElementById("registrar")
if (registrar){    
registrar.addEventListener('click', function(){
        window.location.href = "registro.html"
    })
}


const naosei = document.getElementById("esqueci")
if (naosei){    
naosei.addEventListener('click', function(){
        window.location.href = "esqueci.html"
    })
}
const entrar = document.getElementById("logar")
if (entrar) {

entrar.addEventListener('click', function(){

    event.preventDefault()
    let emailNormal = document.getElementById("gemail").value
    let senhaNormal = document.getElementById("seinha").value

        if (emailNormal === emailcerto && senhaNormal === senhacerta) {
            alert("Bem vindo, senhor")
            window.location.href = "../principal/novapagina.html"
        } else {
            alert("Login inválido")
        }
    })
}

const versenhaL = document.getElementById("versenhaL")
const campoSenhaL = document.getElementById("seinha") // Mudado de 'novasenhaL' para 'seinha'

if (versenhaL && campoSenhaL) {
    versenhaL.addEventListener('click', function() {

        if (campoSenhaL.type === "password") {
            campoSenhaL.type = "text"
            versenhaL.textContent = "🔒"
        } else {
            campoSenhaL.type = "password"
            versenhaL.textContent = "👀"
        }
    })
}