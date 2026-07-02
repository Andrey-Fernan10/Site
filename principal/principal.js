const falamuito = document.getElementById("falar-combot")

if(falamuito) {
    falamuito.addEventListener("input", function() {
        this.style.height = "auto"

        this.style.height = this.scrollHeight + "px"    
    })
}

const voltar = document.getElementById("btn-main")
    if (voltar) {
        voltar.addEventListener('click', function() {
            window.location.href = "../LOGIN/login.html"
        })
    }

// SEPARAÇÃO DE GUIAS

function chatao() {
    document.getElementById("principal").style.display = "block";
    document.getElementById("cronograma").style.display = "none";
    document.getElementById("biblioteca").style.display = "none";
    document.getElementById("progresso").style.display = "none";
}

function cronograma() {
    document.getElementById("principal").style.display = "none";
    document.getElementById("cronograma").style.display = "block";
    document.getElementById("biblioteca").style.display = "none";
    document.getElementById("progresso").style.display = "none";
}

function minhabiblioteca() {
    document.getElementById("principal").style.display = "none";
    document.getElementById("cronograma").style.display = "none";
    document.getElementById("biblioteca").style.display = "block";
    document.getElementById("progresso").style.display = "none";
}

function meuprogresso() {
    document.getElementById("principal").style.display = "none";
    document.getElementById("cronograma").style.display = "none";
    document.getElementById("biblioteca").style.display = "none";
    document.getElementById("progresso").style.display = "block";
}

