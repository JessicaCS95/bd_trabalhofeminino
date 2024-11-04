// Importando o módulo Express para criar o servidor e gerenciar rotas
const express = require('express');

// Importando a conexão com o banco de dados do arquivo 'mulherconectada'
var conexao = require("./blogdepesquisa/mulherconectada");

const app = express(); // Cria uma aplicação Express
const path = require('path'); // Importa o módulo 'path' para lidar com diretórios de arquivos

// Configura o diretório onde as views (templates) estão localizadas
app.set('views', path.join(__dirname, 'views'));
// Define EJS como o motor de visualização (view engine) para renderizar templates
app.set('view engine', 'ejs');


// Importando o body-parser para lidar com dados de formulários
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // Configura o body-parser para interpretar dados JSON

app.use(bodyParser.urlencoded({ extended: true })); // Configura o body-parser para interpretar dados de formulários enviados via URL



// Rota GET para a página 'cadastroleitura' – exibe o formulário de cadastro
app.get('/cadastroleitura', (req, res) => {
    res.render('cadastroleitura'); // Renderiza a view 'cadastroleitura.ejs'
});


// Rota POST para receber os dados do formulário e inseri-los no banco de dados
app.post('/cadastroleitura', function(req, res){
     // Pega os valores enviados pelo formulário
    var nome = req.body.nome;
    var sobrenome = req.body.sobrenome;
    var email = req.body.email;
    var paragrafo = req.body.paragrafo;
    
// Conecta ao banco de dados
conexao.connect(function (error) {
    if (error) throw error; // Lança um erro se a conexão falhar

    // SQL de inserção para adicionar os dados no banco
    var sql = "INSERT INTO pesquisadores (nome, sobrenome, email, paragrafo) VALUES (?, ?, ?, ?)";

    // Executa a query com os dados do formulário
    conexao.query(sql, [nome, sobrenome, email,paragrafo], function(error,result){
        if(error) throw error;// Lança um erro se a query falhar

        // Envia uma resposta para o usuário confirmando o cadastro e exibindo o parágrafo
        res.send( `${nome}, seus dados foram cadastrados com sucesso! Seu parágrafo inserido foi: <b> ${paragrafo} </b>`);

        });
        
    });
});

//continuar criar READ do banco de dados
app.get('/pesquisadores', function(req, res){
    conexao.connect(function(error){
    if(error) console.log(error);
    
    var sql = "select * from pesquisadores";
    //comando de consulta
    conexao.query(sql, function(error,result){
        if(error) console.log(error);
        //console.log(result); Mostra no terminal o select
    
        res.render("pesquisadores",{pesquisadores:result});
    });
    });
    
    });
    

    



// Configura o servidor para rodar na porta 5000
app.listen(5000);
