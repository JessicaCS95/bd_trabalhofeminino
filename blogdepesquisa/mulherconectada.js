// Importa o módulo 'mysql' para se conectar ao banco de dados MySQL
var mysql = require("mysql");

// Configura a conexão com o banco de dados
var conecteBanco = mysql.createConnection({
    host: "localhost", // Especifica o host do banco de dados (neste caso, o servidor local)
    user: "root", // Nome de usuário para acessar o banco de dados (neste caso, 'root')
    password: "", // Senha para acessar o banco de dados (vazia neste exemplo)
    database: "trabalhofeminino" // Nome do banco de dados ao qual queremos nos conectar
});

// Exporta a conexão para que outros arquivos possam utilizá-la
module.exports = conecteBanco;