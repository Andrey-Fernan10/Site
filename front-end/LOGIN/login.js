// 1. Elementos do Modal
const modal = document.getElementById("meuModal");
const modalTitulo = document.getElementById("modalTitulo");
const modalMensagem = document.getElementById("modalMensagem");
const fecharModal = document.getElementById("fecharModal");

// Função para exibir o modal personalizado no lugar do alert()
function mostrarAlerta(mensagem, titulo = "Aviso") {
    modalTitulo.textContent = titulo;
    modalMensagem.textContent = mensagem; // Corrigido uma pequena atribuição dupla aqui
    modal.showModal(); // Abre o dialog nativo do HTML5
}

// Fechar o modal quando clicar no botão "Entendido"
if (fecharModal) {
    fecharModal.addEventListener('click', () => {
        modal.close();
    });
}

// 2. Redirecionamentos de tela
const registrar = document.getElementById("registrar");
if (registrar){    
    registrar.addEventListener('click', function(){
        window.location.href = "registro.html";
    });
}

const naosei = document.getElementById("esqueci");
if (naosei){    
    naosei.addEventListener('click', function(){
        window.location.href = "esqueci.html";
    });
}

// 3. Processo de Login
const entrar = document.getElementById("logar");
if (entrar) {
    entrar.addEventListener('click', async function(event){
        event.preventDefault(); // Evita que a página recarregue
        
        let emailNormal = document.getElementById("gemail").value;
        let senhaNormal = document.getElementById("seinha").value;

        // Validação básica com o modal personalizado
        if (!emailNormal || !senhaNormal) {
            mostrarAlerta("Por favor, preencha todos os campos.", "Campos Vazios");
            return;
        }

        try {
            const resposta = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: emailNormal,
                    senha: senhaNormal
                })
            });

            if (resposta.ok) {
                const dados = await resposta.json();
                
                if (dados.sessao && dados.sessao.access_token) {
                    localStorage.setItem('token', dados.sessao.access_token);
                }
                
                // Redireciona imediatamente sem mostrar modal de sucesso
                window.location.href = "../principal/nova_pagina.html";

            } else {
                let mensagemErro = "Login inválido";
                try {
                    const dadosErro = await resposta.json();
                    mensagemErro = dadosErro.erro || mensagemErro;
                } catch(e) {
                    // Ignora erro de parsing se o servidor não retornar JSON
                }
                mostrarAlerta(mensagemErro, "Falha no Login");
            }

        } catch (error) {
            console.error("Erro ao conectar com o servidor:", error);
            mostrarAlerta("Não foi possível conectar ao servidor de login.", "Erro de Conexão");
        }
    });
}

// 4. Mostrar/Esconder Senha (Olhinho)
const versenhaL = document.getElementById("versenhaL");
const campoSenhaL = document.getElementById("seinha");

if (versenhaL && campoSenhaL) {
    versenhaL.addEventListener('click', function() {
        if (campoSenhaL.type === "password") {
            campoSenhaL.type = "text";
            versenhaL.textContent = "🔒";
        } else {
            campoSenhaL.type = "password";
            versenhaL.textContent = "👀";
        }
    });
}