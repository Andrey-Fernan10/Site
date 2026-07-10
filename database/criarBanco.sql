CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    primeiro_nome VARCHAR(100) NOT NULL,
    ultimo_nome VARCHAR(100),
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL, 
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status_usuario VARCHAR(20) DEFAULT 'ativo'
);

