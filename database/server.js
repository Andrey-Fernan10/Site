const express = require('express');
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(express.json()); 


const supabaseUrl = 'https://udpghperkopziksvqrcp.supabase.co';
const supabaseKey = 'sb_publishable_IMrZycfyZ8SIRIVfEj_Ndg_dQfrN-Bt'; 
const supabase = createClient(supabaseUrl, supabaseKey);


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

// 3. Ligando o servidor na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso na porta ${PORT}! 🚀`);
});