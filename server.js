const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res){
    const itemns = [
        {
            title: "D", 
            message: "Mamíferos noturnos de olhos vermelhos."
        },
        {
            title: "E",
            message: "Capaz de conversar com objetos inanimados."
        },
        {
            title: "V",
            message: "Converte café em código."
        },
        {
            title: "S",
            message: "Conhecidos como loucos, gênios, nerds ou <PROGRAMADORES>."
        },
    ];

    const subtitle = "EJS é uma linguagem de modelagem para criação de página HTML utilizando JS."
    res.render("pages/index", {
        qualitys: itemns,
        subtitle: subtitle,
    });
})

app.get("/sobre", function (req, res){
    res.render("pages/about");
})

app.listen(8080);
console.log("Rodando");