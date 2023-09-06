const express = require("express");
const app = express();
const notifier = require('node-notifier');


//definição do bodyParser
const bodyParser = require("body-parser");


//definição do view engine
app.set("view engine", "ejs");

//definição da pasta public para css, js e img
app.use(express.static("public"));

//configuração do bodyParser - serve para trabalhar com os formulários
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//conexão com o banco de dados
const connection = require("./database/database");

//model do BD para receber as respostas do gabaritos da turma 303
const Turma303_bim_3 = require("./database/Turma303_bim_3");


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

//rota para a página da atividade sobre frações
app.get("/fracao", (req, res) => {
    res.render("fracao");
});

//rota para a página DO LIVRO A VIAGEM DE VOLTA
app.get("/a-viagem", (req, res) => {
   res.render("a-viagem");
});

//rota para a página do teste de leitura 06 agosto
app.get("/teste-leitura-agosto", (req, res) => {
    res.render("teste-leitura-agosto");
 });
 //rota para a página do teste de leitura 05 agosto
app.get("/teste-leitura-julho", (req, res) => {
    res.render("teste-leitura-julho");
 });

 //rota para a página do teste de leitura 07 setembro
app.get("/teste-leitura-setembro", (req, res) => {
    res.render("teste-leitura-setembro");
 });
 
  //rota para a página dos trabalhos
app.get("/trabalhos", (req, res) => {
    res.render("trabalhos");
 });

  //rota para a página das atividades do meu saeb digital
  app.get("/meu-saeb", (req, res) => {
    res.render("meu-saeb");
 });
//rota para a página DO LIVRO DA CAPOEIRA AO CARIMBÓ
app.get("/da_capoeira_ao_carimbo", (req, res) => {
    res.render("da_capoeira_ao_carimbo");
 });

 //rota para a página DO LIVRO DA CAPOEIRA AO CARIMBÓ
app.get("/estados", (req, res) => {
    res.render("caca_palavras_estados");
 });

 //rota para a página DO LIVRO O SEGUNDO E ÚLTIMO IMPERADOR DO BRASIL
app.get("/o_segundo_e_ultimo", (req, res) => {
    res.render("o_segundo_e_ultimo");
 });

  //rota para a página DO LIVRO CICATRIZ E O MÃO DE FERRO
app.get("/cicatriz", (req, res) => {
    res.render("cicatriz");
 });

 //Rotas para as páginas das turmas América Sarmento 61
 app.get("/61", (req, res) => {
    res.render("61");
 });
  //Rotas para as páginas das turmas América Sarmento 62
  app.get("/62", (req, res) => {
    res.render("62");
 });
  //Rotas para as páginas das turmas América Sarmento 63
  app.get("/63", (req, res) => {
    res.render("63");
 });
  //Rotas para as páginas das turmas América Sarmento 64
  app.get("/64", (req, res) => {
    res.render("64");
 });
  //Rotas para as páginas das turmas América Sarmento 101
  app.get("/101", (req, res) => {
    res.render("101");
 });
  //Rotas para as páginas das turmas América Sarmento 102
  app.get("/102", (req, res) => {
    res.render("102");
 });
  //Rotas para as páginas das turmas América Sarmento 303
  app.get("/303", (req, res) => {
    res.render("303");
 });
  //Rotas para as páginas das turmas América Sarmento 304
  app.get("/304", (req, res) => {
    res.render("304");
 });

   //Rotas para as páginas dos trabalhos do terceiro bimestre 303
   app.get("/303_teceiro_bimestre", (req, res) => {
    res.render("303_terceiro_bimestre");
 });

    //Rotas para receber os gabaritos das turmas 303
      app.post("/gabarito_303_bim_3", (req, res) => {
        const respostasCorretas = ["A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", 
        "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B"];
        var total = 0;
        var nome = req.body.name;
        var turma = req.body.turma;
        var q1 = req.body.q1;
        var q2 = req.body.q2;
        var q3 = req.body.q3;
        var q4 = req.body.q4;
        var q5 = req.body.q5;
        var q6 = req.body.q6;
        var q7 = req.body.q7;
        var q8 = req.body.q8;
        var q9 = req.body.q9;
        var q10 = req.body.q10;
        var q11 = req.body.q11;
        var q12 = req.body.q12;
        var q13 = req.body.q13;
        var q14 = req.body.q14;
        var q15 = req.body.q15;
        var q16 = req.body.q16;
        var q17 = req.body.q17;
        var q18 = req.body.q18;
        var q19 = req.body.q19;
        var q20 = req.body.q20;
        var q21 = req.body.q21;
        var q22 = req.body.q22;
        var q23 = req.body.q23;
        var q24 = req.body.q24;
        var q25 = req.body.q25;
        var q26 = req.body.q26;
        var q27 = req.body.q27;
        var q28 = req.body.q28;
        var q29 = req.body.q29;
        var q30 = req.body.q30;
        const respostasEnviadas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22, q23, q24,
        q25, q26, q27, q28, q29, q30];
        
        if(nome==""||turma==""||q1==null||q2==null||q3==null||q4==null||q5==null||q6==null
        ||q7==null||q8==null||q9==null||q10==null||q11==null||q12==null||q13==null||q14==null||q15==null
        ||q16==null||q17==null||q18==null||q19==null||q20==null||q21==null||q22==null||q23==null||q24==null
        ||q25==null||q26==null||q27==null||q28==null||q29==null||q30==null){
            notifier.notify({
                title: 'RESPONDA TODAS AS PERGUNTAS',
                message: 'Você não pode deixar nenhum campo em branco.'
              });
            res.redirect("303_terceiro_bimestre");
        }else {
       
            Turma303_bim_3.create({
                nome: nome.toUpperCase(),
                turma: turma,
                q1: q1,
                q2: q2,
                q3: q3,
                q4: q4,
                q5: q5,
                q6: q6,
                q7: q7,
                q8: q8,
                q9: q9,
                q10: q10,
                q11: q11,
                q12: q12,
                q13: q13,
                q14: q14,
                q15: q15,
                q16: q16,
                q17: q17,
                q18: q18,
                q19: q19,
                q20: q20,
                q21: q21,
                q22: q22,
                q23: q23,
                q24: q24,
                q25: q25,
                q26: q26,
                q27: q27,
                q28: q28,
                q29: q29,
                q30: q30
            }).then(() => {
                notifier.notify({
                    title: 'GABARITO SALVO COM SUCESSO',
                    message: 'Parabéns você preencheu tudo.'
                  });
                  res.render("confirmacao", {
                    nome: nome,
                    turma: turma,
                    q1: q1,
                    q2: q2,
                    q3: q3,
                    q4: q4,
                    q5: q5,
                    q6: q6,
                    q7: q7,
                    q8: q8,
                    q9: q9,
                    q10: q10,
                    q11: q11,
                    q12: q12,
                    q13: q13,
                    q14: q14,
                    q15: q15,
                    q16: q16,
                    q17: q17,
                    q18: q18,
                    q19: q19,
                    q20: q20,
                    q21: q21,
                    q22: q22,
                    q23: q23,
                    q24: q24,
                    q25: q25,
                    q26: q26,
                    q27: q27,
                    q28: q28,
                    q29: q29,
                    q30: q30,
                    res: respostasCorretas,
                    respostas: respostasEnviadas
                });
            });
        }
    });

    //rota para apagar um registro da tabela da 303
app.post("/deletarturma303", (req, res) => {
    var id = req.body.id;
    if(id != undefined){
        Turma303_bim_3.destroy({
            where: {
                id: id
            }
            
        }).then(()=>{
            res.redirect("/gabaritos");
        });
    }
    
    });
//rota para exibição da página com todos os gabaritos
app.get("/gabaritos", (req, res) => {
    var total = 0;
    const gabaritoTerceiroAnobim3 = ["303", "Tony Costa", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", 
    "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B"];
    var nome = req.body.name;
    var turma = req.body.turma;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    var q11 = req.body.q11;
    var q12 = req.body.q12;
    var q13 = req.body.q13;
    var q14 = req.body.q14;
    var q15 = req.body.q15;
    var q16 = req.body.q16;
    var q17 = req.body.q17;
    var q18 = req.body.q18;
    var q19 = req.body.q19;
    var q20 = req.body.q20;
    var q21 = req.body.q21;
    var q22 = req.body.q22;
    var q23 = req.body.q23;
    var q24 = req.body.q24;
    var q25 = req.body.q25;
    var q26 = req.body.q26;
    var q27 = req.body.q27;
    var q28 = req.body.q28;
    var q29 = req.body.q29;
    var q30 = req.body.q30;
    const  respostasTerceiroAnobim3 = [nome, turma, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22, q23, q24,
    q25, q26, q27, q28, q29, q30];
    Turma303_bim_3.findAll({order: [['nome', 'ASC']]}).then(turma303 => {
        res.render("gabaritos", {
            nome: nome,
            turma: turma,
            total: total,
            turma303: turma303,
            gabaritoTerceiroAnobim3: gabaritoTerceiroAnobim3,
            respostasTerceiroAnobim3: respostasTerceiroAnobim3
        }); 
    });
});

//servidor
app.listen(1313, ()=>{
    console.log("Servidor Rodando na porta 1313");
});