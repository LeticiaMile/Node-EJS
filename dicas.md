/* Alterações que são feitas em EJS não precisa parar o node, mas caso haja alterações feitas em  arquivos Js precisa parar o servidor.

Em relação ao server.js:

 
*const express = require('express') - express vai criar um servidor para mostrar o que estou construindo
no navegador.
*const app = express(); - Está instanciando o express e guardando na variavel app.
*app.set("view engine", "ejs") - Está falando ao express que a view engine(ferramenta para rederizar o html),
vai usar o ejs para isso. 
*app.get("/", function (req, res){  "/" é a minha rota / res é a minha response(reposta)
    res.render("index"); não precisa colocar index.ejs, porque está aqui app.set("view engine", "ejs")
})
*app.listen(8080); - rodando na máquina e quando chamar a porta 8080 vai executar tudo acima

express - entende que os arquivos EJS estão na pasta views 


<p>Página: <%= typeof pagina !== 'undefined' ? pagina: 'Home' %></p> - Está perguntando se pagina é diferente de undefined, se não vai passar a home para o objeto pagina. Quando o header não receber o pagina, ele vai sempre mostrar HOME. */