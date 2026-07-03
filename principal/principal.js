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

//CHAT

const campoTexto = document.getElementById("falar-combot")
const botaoEnviar = document.getElementById("btn-enviar")
const muralChat = document.getElementById("janela-chat")

if (botaoEnviar && muralChat && campoTexto) {
    botaoEnviar.addEventListener("click", function() {

        let mensagemUsuario = campoTexto.value.trim()

        if (mensagemUsuario !== "") {
            let novoParagrafo = document.createElement("p")
            novoParagrafo.innerHTML = `<strong>User: </strong> ${mensagemUsuario}`
            muralChat.appendChild(novoParagrafo)
            campoTexto.value = ''
            campoTexto.style.height = '16px'

        }

    })
}

// AGENDA

const botaoGerar = document.getElementById('btn-gerar')
const inputConteudo = document.getElementById("input-conteudo")
const containerData = document.getElementById("calendario")

    if (botaoGerar && containerData && inputConteudo) {
        botaoGerar.addEventListener("click", function() {
            let materiaDigitada = inputConteudo.value.trim()

            if (materiaDigitada !== "") {
                let novoCalendario = document.createElement("div")
                novoCalendario.classList.add("bloco-calendario")
                novoCalendario.style.borderBottom = "2px dashed #ccc"
                novoCalendario.style.marginBottom = "20px"
                novoCalendario.style.paddingBottom = "20px"

                novoCalendario.innerHTML = `
                <h3 style="color: #fff; margin-top: 15px;">Cronograma de: ${materiaDigitada}</h3>
    
    <div class="semana-cabecalho" style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 5px; font-weight: bold; text-align: center; margin-bottom: 5px; width: 100%; color: #fff;">
        <div>Dom</div><div>Seg</div><div>Ter</div><div>Qua</div><div>Qui</div><div>Sex</div><div>Sáb</div>
    </div>

    <div class="dias-grade" style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 5px; width: 100%; box-sizing: border-box;">
        <div style="border: 1px solid #ccc; min-height: 60px; padding: 5px; background: #3b6374; text-align: center; font-size: 12px; color: #ffffff;"><strong>1</strong><div>Introdução</div></div>
        <div style="border: 1px solid #ccc; min-height: 60px; padding: 5px; background: #3b6374; text-align: center; font-size: 12px; color: #ffffff;"><strong>2</strong><div>Aprofundamento</div></div>
        <div style="border: 1px solid #ccc; min-height: 60px; padding: 5px; background: #3b6374; text-align: center; font-size: 12px; color: #ffffff;"><strong>3</strong><div>Prática</div></div>
        <div style="border: 1px solid #ccc; min-height: 60px; padding: 5px; background: #3b6374; text-align: center; font-size: 12px; color: #ffffff;"><strong>4</strong><div>Revisão</div></div>
        <div style="border: 1px solid #ccc; min-height: 60px; padding: 5px; background: #3b6374; text-align: center; font-size: 12px; color: #ffffff;"><strong>5</strong><div>Simulado</div></div>
        <div style="border: 1px solid #ccc; min-height: 60px; padding: 5px; background: #3b6374; text-align: center; font-size: 12px; color: #ffffff;"><strong>6</strong><div>Descanso</div></div>
        <div style="border: 1px solid #ccc; min-height: 60px; padding: 5px; background: #3b6374; text-align: center; font-size: 12px; color: #ffffff;"><strong>7</strong><div>Fim</div></div>
    </div>
`

                containerData.style.display = "block"
                containerData.prepend(novoCalendario)

                let calendarioAtual = containerData.querySelectorAll(".bloco-calendario")
                if (calendarioAtual.length > 5) { 
                    calendarioAtual[calendarioAtual.length - 1].remove()
                }

                inputConteudo.value = ""
            } else {
                alert("Digite a matéria no cronograma")
            }
        })
    }