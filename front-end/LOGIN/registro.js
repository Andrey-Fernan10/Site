const form = document.getElementById('formCadastro');

form.addEventListener('submit', async (event) => {
    // 1. Impede a página de recarregar (comportamento padrão do form)
    event.preventDefault(); 

    // 2. Pega os valores digitados pelo usuário nos inputs
    const primeiro_nome = document.getElementById('nome').value;
    const ultimo_nome = document.getElementById('sobrenome').value;
    const email = document.getElementById('gmail').value;
    const senha = document.getElementById('senhaN').value;

    try {
        // 3. Faz a requisição para o seu servidor local (rodando na porta 3000)
        const resposta = await fetch('http://localhost:3000/cadastro', {
            method: 'POST', // Tipo da rota que criamos no back-end
            headers: {
                'Content-Type': 'application/json' // Avisa o servidor que estamos enviando JSON
            },
            body: JSON.stringify({
                primeiro_nome: primeiro_nome,
                ultimo_nome: ultimo_nome,
                email: email,
                senha: senha
            })
        });

        // 4. Transforma a resposta do servidor em um objeto JS
        const dados = await resposta.json();

        if (resposta.ok) {
            alert('Cadastro realizado com sucesso! 🎉');
            // Aqui você pode redirecionar o usuário para a tela de login ou chat:
            window.location.href = 'login.html';
        } else {
            // Mostra o erro retornado pelo back-end ou Supabase (ex: "E-mail já cadastrado")
            alert(`Erro no cadastro: ${dados.erro}`);
        }

    } catch (erro) {
        console.error('Erro ao conectar com o servidor:', erro);
        alert('Não foi possível conectar ao servidor. O seu back-end está rodando?');
    }
});

const versenhaR = document.getElementById("versenhaR")
const campoSenhaR = document.getElementById("senhaN")

if (versenhaR && campoSenhaR) {
    versenhaR.addEventListener('click', function() {

        if (campoSenhaR.type === "password") {
            campoSenhaR.type = "text"
            versenhaR.textContent = "🔒"
        } else {
            campoSenhaR.type = "password"
            versenhaR.textContent = "👀"
        }
    })
}