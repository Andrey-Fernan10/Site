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