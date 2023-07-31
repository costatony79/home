const express = require("express");
const app = express();
const notifier = require('node-notifier');
const pdfjsLib = require('pdfjs-dist');




//definição do bodyParser
const bodyParser = require("body-parser");


//definição do view engine
app.set("view engine", "ejs");

//definição da pasta public para css, js e img
app.use(express.static("public"));

//configuração do bodyParser - serve para trabalhar com os formulários
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



//rota para a página inicial
app.get("/", (req, res) => {
    res.render("index");
});

//rota para a página juslany
app.get("/juslany", (req, res) => {
    res.render("juslany");
});

//rota para a página testes
app.get("/testes", (req, res) => {
    res.render("testes");
});


//rota para a página america
app.get("/america", (req, res) => {
    res.render("america");
});

//rota para a página leituras
app.get("/leituras", (req, res) => {
    res.render("leituras");
});

//rota para a página DO LIVRO A VIAGEM DE VOLTA
app.get("/a-viagem", (req, res) => {
   res.render("a-viagem");
});





//servidor
app.listen(1313, ()=>{
    console.log("Servidor Rodando na porta 1313");
});