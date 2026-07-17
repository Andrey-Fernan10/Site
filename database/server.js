const path = require('path');
const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
const WebSocket = require('ws');

globalThis.WebSocket = WebSocket;

const app = express();

app.use(cors()); 
app.use(express.json()); 

// Serve os arquivos do front-end
app.use(express.static(path.join(__dirname, '../front-end')));

const supabaseUrl = 'https://udpghperkopziksvqrcp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkcGdocGVya29wemlrc3ZxcmNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM3MTk5NDgsImV4cCI6MjA5OTI5NTk0OH0.CIRK1DNMIsQgQcvBHipAdHFHH0ErKSChutybOfG459k'; 

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false 
  }
});

// --- ROTA DE CADASTRO ---
app.post('/cadastro', async (req, res) => {
    const { primeiro_nome, ultimo_nome, email, senha } = req.body;

    if (!primeiro_nome || !email || !senha) {
        return res.status(400).json({ erro: 'Por favor, preencha os campos obrigatórios.' });
    }

    try {
        const { data, error } = await supabase
            .from('users') 
            .insert([
                { 
                    primeiro_nome: primeiro_nome, 
                    ultimo_nome: ultimo_nome, 
                    email: email, 
                    senha: senha 
                }
            ])
            .select(); 

        if (error) {
            return res.status(400).json({ erro: error.message });
        }

        return res.status(201).json({ 
            mensagem: 'Usuário cadastrado com sucesso!', 
            usuario: data[0] 
        });

    } catch (err) {
        return res.status(500).json({ erro: 'Erro interno no servidor.' });
    }
});

// --- ROTA DE LOGIN (Sem duplicações e usando o maybeSingle) ---
app.post('/login', async (req, res) => {
    const { email, senha } = req.body;

    try {
        // 1. Busca o usuário pelo e-mail no Supabase de forma segura
        const { data: usuario, error } = await supabase
            .from('users')
            .select('*')
            .eq('email', email)
            .maybeSingle();

        // 2. Se não achar o usuário ou houver erro
        if (error || !usuario) {
            return res.status(400).json({ erro: 'E-mail ou senha incorretos.' });
        }

        // 3. Compara a senha informada com a do banco de dados
        if (usuario.senha !== senha) {
            return res.status(400).json({ erro: 'E-mail ou senha incorretos.' });
        }

        // 4. Retorna sucesso caso as credenciais estejam corretas
        return res.status(200).json({ 
            mensagem: 'Login realizado com sucesso! 🎉',
            usuario: {
                primeiro_nome: usuario.primeiro_nome,
                email: usuario.email
            }
        });

    } catch (err) {
        console.error("Erro no login:", err);
        return res.status(500).json({ erro: 'Erro interno no servidor.' });
    }
});

// --- INICIANDO O SERVIDOR ---
app.get('/teste', (req, res) => {
    res.send('O servidor está funcionando e respondendo requisições GET! 🚀');
});

// Redireciona a raiz para a página de login
app.get('/', (req, res) => {
    res.redirect('/LOGIN/login.html');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso na porta ${PORT}! 🚀`);
});