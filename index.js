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
const connection_simulados = require("./database/database_simulados");

//model do BD para receber as respostas do gabaritos da turma 61
const Turma61_bim_3 = require("./database/Turma61_bim_3");

//model do BD para receber as respostas do gabaritos da turma 62
const Turma62_bim_3 = require("./database/Turma62_bim_3");

//model do BD para receber as respostas do gabaritos da turma 63
const Turma63_bim_3 = require("./database/Turma63_bim_3");

//model do BD para receber as respostas do gabaritos da turma 64
const Turma64_bim_3 = require("./database/Turma64_bim_3");

//model do BD para receber as respostas do gabaritos da turma 101
const Turma101_bim_3 = require("./database/Turma101_bim_3");

//model do BD para receber as respostas do gabaritos da turma 101
const Turma102_bim_3 = require("./database/Turma102_bim_3");

//model do BD para receber as respostas do gabaritos da turma 303
const Turma303_bim_3 = require("./database/Turma303_bim_3");

//model do BD para receber as respostas do gabaritos da turma 303
const Turma304_bim_3 = require("./database/Turma304_bim_3");

//model do DB do trabaho do terceiro bimestre de geografia
const Geografia3bim = require("./database/Geografia3Bim");

//model do DB do trabaho do terceiro bimestre de história
const Historia3bim = require("./database/Historia3Bim");

//model do DB do trabaho do terceiro bimestre de história
const Primeiro_simulado = require("./database/Primeiro_simulado")

//model do DB do trabaho do terceiro bimestre de história
const Segundo_simulado = require("./database/Segundo_simulado")

//model do DB do trabaho do terceiro bimestre de história
const Terceiro_simulado = require("./database/Terceiro_simulado")

//model do DB do trabaho do terceiro bimestre de história
const Quarto_simulado = require("./database/Quarto_simulado")

//model do DB do trabaho do terceiro bimestre de história
const Quinto_simulado = require("./database/Quinto_simulado")

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

  //rota para a página do teste de leitura 07 setembro
app.get("/teste-leitura-outubro", (req, res) => {
    res.render("teste-leitura-outubro");
 });

   //rota para a página do teste de leitura 07 setembro
app.get("/teste-leitura-novembro", (req, res) => {
    res.render("teste-leitura-novembro");
 });

    //rota para a página do teste de leitura 07 setembro
app.get("/teste-leitura-dezembro", (req, res) => {
    res.render("teste-leitura-dezembro");
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
   //Rotas para as páginas dos trabalhos do terceiro bimestre 61
   app.get("/61_teceiro_bimestre", (req, res) => {
    res.render("61_terceiro_bimestre");
 });
    //Rotas para as páginas dos trabalhos do terceiro bimestre 62
    app.get("/62_teceiro_bimestre", (req, res) => {
        res.render("62_terceiro_bimestre");
     });
   //Rotas para as páginas dos trabalhos do terceiro bimestre 63
   app.get("/63_teceiro_bimestre", (req, res) => {
    res.render("63_terceiro_bimestre");
 });

    //Rotas para as páginas dos trabalhos do terceiro bimestre 64
    app.get("/64_teceiro_bimestre", (req, res) => {
        res.render("64_terceiro_bimestre");
     });

         //Rotas para as páginas dos trabalhos do terceiro bimestre 101
    app.get("/101_teceiro_bimestre", (req, res) => {
        res.render("101_terceiro_bimestre");
     });

             //Rotas para as páginas dos trabalhos do terceiro bimestre 102
    app.get("/102_teceiro_bimestre", (req, res) => {
        res.render("102_terceiro_bimestre");
     });

   //Rotas para as páginas dos trabalhos do terceiro bimestre 303
   app.get("/303_teceiro_bimestre", (req, res) => {
    res.render("303_terceiro_bimestre");
 });

   //Rotas para as páginas dos trabalhos do terceiro bimestre 303
   app.get("/304_teceiro_bimestre", (req, res) => {
    res.render("304_terceiro_bimestre");
 });

 //Rotas para as páginas dos trabalhos do terceiro bimestre 303
    app.get("/geografiaBim3", (req, res) => {
        res.render("geografia3Bim");
     });

      //Rotas para as páginas dos trabalhos do terceiro bimestre 303
    app.get("/historiaBim3", (req, res) => {
        res.render("historia3Bim");
     });

         //Rotas para as páginas dos simulados
    app.get("/simulados", (req, res) => {
        res.render("simulados");
     });

//Rotas para as páginas dos simulados
    app.get("/primeiro_simulado", (req, res) => {
        res.render("primeiro_simulado");
     });

     //Rotas para as páginas dos simulados
    app.get("/segundo_simulado", (req, res) => {
        res.render("segundo_simulado");
     });

        //Rotas para as páginas dos simulados
    app.get("/terceiro_simulado", (req, res) => {
        res.render("terceiro_simulado");
     });

        //Rotas para as páginas dos simulados
    app.get("/quarto_simulado", (req, res) => {
        res.render("quarto_simulado");
     });
        //Rotas para as páginas dos simulados
    app.get("/quinto_simulado", (req, res) => {
        res.render("quinto_simulado");
     });

            //Rotas para as páginas DAS ATIVIDADES DIÁRIAS
    app.get("/atividades_diarias", (req, res) => {
        res.render("atividades_diarias");
     });

     
            //Rotas para as páginas DAS ATIVIDADES DIÁRIAS
    app.get("/divisao", (req, res) => {
        res.render("divisao");
     });
//************************************************************* */
  //Rotas para receber os gabaritos das turmas 61
  app.post("/gabarito_61_bim_3", (req, res) => {
    const respostasCorretas = ["C", "E", "A", "C", "E", "A", "C", "D", "C", "C", "E", 
    "B", "B", "E", "D", "C", "C", "E", "C", "C", "B", "D", "B", "A", "D", "A", "B", "D", "D", "C"];
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
        res.redirect("61_terceiro_bimestre");
    }else {
   
        Turma61_bim_3.create({
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

  //Rotas para receber os gabaritos das turmas 62
  app.post("/gabarito_62_bim_3", (req, res) => {
    const respostasCorretas = ["C", "E", "A", "C", "E", "A", "C", "D", "C", "C", "E", 
    "B", "B", "E", "D", "C", "C", "E", "C", "C", "B", "D", "B", "A", "D", "A", "B", "D", "D", "C"];
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
        res.redirect("62_terceiro_bimestre");
    }else {
   
        Turma62_bim_3.create({
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

  //Rotas para receber os gabaritos das turmas 63
  app.post("/gabarito_63_bim_3", (req, res) => {
    const respostasCorretas = ["C", "E", "A", "C", "E", "A", "C", "D", "C", "C", "E", 
    "B", "B", "E", "D", "C", "C", "E", "C", "C", "B", "D", "B", "A", "D", "A", "B", "D", "D", "C"];
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
        res.redirect("63_terceiro_bimestre");
    }else {
   
        Turma63_bim_3.create({
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

  //Rotas para receber os gabaritos das turmas 64
  app.post("/gabarito_64_bim_3", (req, res) => {
    const respostasCorretas = ["C", "E", "A", "C", "E", "A", "C", "D", "C", "C", "E", 
    "B", "B", "E", "D", "C", "C", "E", "C", "C", "B", "D", "B", "A", "D", "A", "B", "D", "D", "C"];
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
        res.redirect("64_terceiro_bimestre");
    }else {
   
        Turma64_bim_3.create({
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

  //Rotas para receber os gabaritos das turmas 101
  app.post("/gabarito_101_bim_3", (req, res) => {
    const respostasCorretas = ["C", "B", "A", "B", "A", "C", "C", "C", "B", "C", "B", 
    "D", "B", "B", "D", "C", "B", "D", "D", "B", "D", "C", "C", "D", "C", "B", "B", "B", "D", "B"];
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
        res.redirect("101_terceiro_bimestre");
    }else {
   
        Turma101_bim_3.create({
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

  //Rotas para receber os gabaritos das turmas 102
  app.post("/gabarito_102_bim_3", (req, res) => {
    const respostasCorretas = ["C", "B", "A", "B", "A", "C", "C", "C", "B", "C", "B", 
    "D", "B", "B", "D", "C", "B", "D", "D", "B", "D", "C", "C", "D", "C", "B", "B", "B", "D", "B"];
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
        res.redirect("102_terceiro_bimestre");
    }else {
   
        Turma102_bim_3.create({
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

//Rotas para receber os gabaritos das turmas 303
app.post("/gabarito_303_bim_3", (req, res) => {
        const respostasCorretas = ["A", "A", "D", "E", "C", "C", "C", "B", "D", "C", "D", 
        "D", "E", "D", "D", "A", "E", "C", "B", "C", "B", "A", "D", "A", "A", "B", "C", "C", "C", "C"];
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

//Rotas para receber os gabaritos das turmas 303
app.post("/gabarito_304_bim_3", (req, res) => {
            const respostasCorretas = ["A", "A", "D", "E", "C", "C", "C", "B", "D", "C", "D", 
            "D", "E", "D", "D", "A", "E", "C", "B", "C", "B", "A", "D", "A", "A", "B", "C", "C", "C", "C"];
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
                res.redirect("304_terceiro_bimestre");
            }else {
           
                Turma304_bim_3.create({
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

//Rotas para receber os gabaritos do trabalho de geografia
app.post("/gabarito_geografia3Bim", (req, res) => {
            const respostasCorretas = ["A", "B", "B", "B", "B", "A", "C", "A", "A", "A", "B", "D", "A", "A", "A"];
            var total = 0;
            var nome = req.body.name;
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
            
            const respostasEnviadas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15];
            
            if(nome==""||q1==null||q2==null||q3==null||q4==null||q5==null||q6==null
            ||q7==null||q8==null||q9==null||q10==null||q11==null||q12==null||q13==null||q14==null||q15==null){
                notifier.notify({
                    title: 'RESPONDA TODAS AS PERGUNTAS',
                    message: 'Você não pode deixar nenhum campo em branco.'
                  });
                res.redirect("geografia3Bim");
            }else {
           
                Geografia3bim.create({
                    nome: nome.toUpperCase(),
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
                    q15: q15
                }).then(() => {
                    notifier.notify({
                        title: 'GABARITO SALVO COM SUCESSO',
                        message: 'Parabéns você preencheu tudo.'
                      });
                      res.render("confirmacao15", {
                        nome: nome,
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
                        res: respostasCorretas,
                        respostas: respostasEnviadas
                    });
                });
            }
});

//Rotas para receber os gabaritos do trabalho de geografia
app.post("/gabarito_historia3Bim", (req, res) => {
    const respostasCorretas = ["A", "A", "C", "B", "B", "A", "C", "B", "B", "A", "B", "D", "C", "A", "B"];
    var total = 0;
    var nome = req.body.name;
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
    
    const respostasEnviadas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15];
    
    if(nome==""||q1==null||q2==null||q3==null||q4==null||q5==null||q6==null
    ||q7==null||q8==null||q9==null||q10==null||q11==null||q12==null||q13==null||q14==null||q15==null){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("historia3Bim");
    }else {
   
        Historia3bim.create({
            nome: nome.toUpperCase(),
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
            q15: q15
        }).then(() => {
            notifier.notify({
                title: 'GABARITO SALVO COM SUCESSO',
                message: 'Parabéns você preencheu tudo.'
              });
              res.render("confirmacao15", {
                nome: nome,
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
                res: respostasCorretas,
                respostas: respostasEnviadas
            });
        });
    }
});

//Rotas para receber os gabaritos do primeiro simulado
app.post("/envio_primeiro_simulado", (req, res) => {
    const respostasLinguaPortuguesa = [
        "A", "B", "C",
        "A", "D", "A",
        "A", "C", "B",
        "B", "D",
        "A", "B", "C",
        "C", "B", "D",
        "D", "C", "B",
        "C", "D"];
    const respostasMatematica = [
        "C", "B", "B",
        "C", "A", "A",
        "D", "C", "C",
        "B", "C",
        "B", "A", "A",
        "C", "B", "A",
        "D", "C", "C",
        "C", "C"];
    var nota_matematica = 0;
    var nota_lingua_portuguesa = 0;
    var nome = req.body.name;
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
    var q31 = req.body.q31;
    var q32 = req.body.q32;
    var q33 = req.body.q33;
    var q34 = req.body.q34;
    var q35 = req.body.q35;
    var q36 = req.body.q36;
    var q37 = req.body.q37;
    var q38 = req.body.q38;
    var q39 = req.body.q39;
    var q40 = req.body.q40;
    var q41 = req.body.q41;
    var q42 = req.body.q42;
    var q43 = req.body.q43;
    var q44 = req.body.q44;
    const respostasEnviadasLinguaPortuguesa = [
        q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, 
        q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, 
        q21, q22
    ];

    const respostasEnviadasMatematica = [
        q23, q24, q25, q26, q27, q28, q29, q30, 
        q31, q32, q33, q34, q35, q36, q37, q38, q39, q40, 
        q41, q42, q43, q44
    ];

    for (let i = 0; i < respostasEnviadasLinguaPortuguesa.length; i++) {
        if (respostasEnviadasLinguaPortuguesa[i].toUpperCase() === respostasLinguaPortuguesa[i]) {
            nota_lingua_portuguesa++;
        }
    };

    for (let i = 0; i < respostasEnviadasMatematica.length; i++) {
        if (respostasEnviadasMatematica[i].toUpperCase() === respostasMatematica[i]) {
            nota_matematica++;
        }
    };
    
    if(nome=="" || q1==null || q2==null || q3==null || q4==null || q5==null || q6==null
    || q7==null || q8==null || q9==null || q10==null || q11==null || q12==null || q13==null || q14==null || q15==null
    || q16==null || q17==null || q18==null || q19==null || q20==null || q21==null || q22==null || q23==null || q24==null
    || q25==null || q26==null || q27==null || q28==null || q29==null || q30==null || q31==null || q32==null || q33==null
    || q34==null || q35==null || q36==null || q37==null || q38==null || q39==null || q40==null || q41==null || q42==null
    || q43==null || q44==null){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("primeiro_simulado");
    }else {
   
        Primeiro_simulado.create({
            nome: nome.toUpperCase(),
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
            q31: q31,
            q32: q32,
            q33: q33,
            q34: q34,
            q35: q35,
            q36: q36,
            q37: q37,
            q38: q38,
            q39: q39,
            q40: q40,
            q41: q41,
            q42: q42,
            q43: q43,
            q44: q44,
            nota_lingua_portuguesa: nota_lingua_portuguesa,
            nota_matematica: nota_matematica
        }).then(() => {
            notifier.notify({
                title: 'GABARITO SALVO COM SUCESSO',
                message: 'Parabéns você preencheu tudo.'
              });
              res.render("confirmacao_simulado", {
                nome: nome,
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
                q31: q31,
                q32: q32,
                q33: q33,
                q34: q34,
                q35: q35,
                q36: q36,
                q37: q37,
                q38: q38,
                q39: q39,
                q40: q40,
                q41: q41,
                q42: q42,
                q43: q43,
                q44: q44,
                nota_lp: nota_lingua_portuguesa,
                nota_mat: nota_matematica
            });
        });
    }
});

//Rotas para receber os gabaritos do segundo simulado
app.post("/envio_segundo_simulado", (req, res) => {
    const respostasLinguaPortuguesa = [
        "A", "A", "C",
        "D", "B", "D",
        "C", "D", "B",
        "D", "C", "A", 
        "B", "C", "B",
        "B", "C", "D",
        "A", "C", "C", "D"];
    const respostasMatematica = [
        "D", "A", "A",
        "D", "D", "B",
        "B", "C", "B",
        "B", "B", "C", 
        "D", "C", "D",
        "C", "C", "D", 
        "C", "B", "C", "D"];
    var nota_matematica = 0;
    var nota_lingua_portuguesa = 0;
    var nome = req.body.name;
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
    var q31 = req.body.q31;
    var q32 = req.body.q32;
    var q33 = req.body.q33;
    var q34 = req.body.q34;
    var q35 = req.body.q35;
    var q36 = req.body.q36;
    var q37 = req.body.q37;
    var q38 = req.body.q38;
    var q39 = req.body.q39;
    var q40 = req.body.q40;
    var q41 = req.body.q41;
    var q42 = req.body.q42;
    var q43 = req.body.q43;
    var q44 = req.body.q44;
    const respostasEnviadasLinguaPortuguesa = [
        q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, 
        q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, 
        q21, q22
    ];

    const respostasEnviadasMatematica = [
        q23, q24, q25, q26, q27, q28, q29, q30, 
        q31, q32, q33, q34, q35, q36, q37, q38, q39, q40, 
        q41, q42, q43, q44
    ];

    for (let i = 0; i < respostasEnviadasLinguaPortuguesa.length; i++) {
        if (respostasEnviadasLinguaPortuguesa[i].toUpperCase() === respostasLinguaPortuguesa[i]) {
            nota_lingua_portuguesa++;
        }
    };

    for (let i = 0; i < respostasEnviadasMatematica.length; i++) {
        if (respostasEnviadasMatematica[i].toUpperCase() === respostasMatematica[i]) {
            nota_matematica++;
        }
    };
    
    if(nome=="" || q1==null || q2==null || q3==null || q4==null || q5==null || q6==null
    || q7==null || q8==null || q9==null || q10==null || q11==null || q12==null || q13==null || q14==null || q15==null
    || q16==null || q17==null || q18==null || q19==null || q20==null || q21==null || q22==null || q23==null || q24==null
    || q25==null || q26==null || q27==null || q28==null || q29==null || q30==null || q31==null || q32==null || q33==null
    || q34==null || q35==null || q36==null || q37==null || q38==null || q39==null || q40==null || q41==null || q42==null
    || q43==null || q44==null){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("segundo_simulado");
    }else {
   
        Segundo_simulado.create({
            nome: nome.toUpperCase(),
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
            q31: q31,
            q32: q32,
            q33: q33,
            q34: q34,
            q35: q35,
            q36: q36,
            q37: q37,
            q38: q38,
            q39: q39,
            q40: q40,
            q41: q41,
            q42: q42,
            q43: q43,
            q44: q44,
            nota_lingua_portuguesa: nota_lingua_portuguesa,
            nota_matematica: nota_matematica
        }).then(() => {
            notifier.notify({
                title: 'GABARITO SALVO COM SUCESSO',
                message: 'Parabéns você preencheu tudo.'
              });
              res.render("confirmacao_simulado", {
                nome: nome,
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
                q31: q31,
                q32: q32,
                q33: q33,
                q34: q34,
                q35: q35,
                q36: q36,
                q37: q37,
                q38: q38,
                q39: q39,
                q40: q40,
                q41: q41,
                q42: q42,
                q43: q43,
                q44: q44,
                nota_lp: nota_lingua_portuguesa,
                nota_mat: nota_matematica
            });
        });
    }
});

//Rotas para receber os gabaritos do terceiro simulado
app.post("/envio_terceiro_simulado", (req, res) => {
    const respostasLinguaPortuguesa = [
        "A", "B", "B",
        "D", "B", "D",
        "C", "B", "A",
        "A", "A", "B", 
        "D", "A", "C",
        "A", "D", "A",
        "C", "C", "D", "A"];
    const respostasMatematica = [
        "D", "A", "A",
        "C", "D", "B",
        "A", "C", "C",
        "B", "B", "D", 
        "A", "D", "D",
        "A", "C", "A", 
        "D", "D", "A", "A"];
    var nota_matematica = 0;
    var nota_lingua_portuguesa = 0;
    var nome = req.body.name;
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
    var q31 = req.body.q31;
    var q32 = req.body.q32;
    var q33 = req.body.q33;
    var q34 = req.body.q34;
    var q35 = req.body.q35;
    var q36 = req.body.q36;
    var q37 = req.body.q37;
    var q38 = req.body.q38;
    var q39 = req.body.q39;
    var q40 = req.body.q40;
    var q41 = req.body.q41;
    var q42 = req.body.q42;
    var q43 = req.body.q43;
    var q44 = req.body.q44;
    const respostasEnviadasLinguaPortuguesa = [
        q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, 
        q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, 
        q21, q22
    ];

    const respostasEnviadasMatematica = [
        q23, q24, q25, q26, q27, q28, q29, q30, 
        q31, q32, q33, q34, q35, q36, q37, q38, q39, q40, 
        q41, q42, q43, q44
    ];

    for (let i = 0; i < respostasEnviadasLinguaPortuguesa.length; i++) {
        if (respostasEnviadasLinguaPortuguesa[i].toUpperCase() === respostasLinguaPortuguesa[i]) {
            nota_lingua_portuguesa++;
        }
    };

    for (let i = 0; i < respostasEnviadasMatematica.length; i++) {
        if (respostasEnviadasMatematica[i].toUpperCase() === respostasMatematica[i]) {
            nota_matematica++;
        }
    };
    
    if(nome=="" || q1==null || q2==null || q3==null || q4==null || q5==null || q6==null
    || q7==null || q8==null || q9==null || q10==null || q11==null || q12==null || q13==null || q14==null || q15==null
    || q16==null || q17==null || q18==null || q19==null || q20==null || q21==null || q22==null || q23==null || q24==null
    || q25==null || q26==null || q27==null || q28==null || q29==null || q30==null || q31==null || q32==null || q33==null
    || q34==null || q35==null || q36==null || q37==null || q38==null || q39==null || q40==null || q41==null || q42==null
    || q43==null || q44==null){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("terceiro_simulado");
    }else {
   
        Terceiro_simulado.create({
            nome: nome.toUpperCase(),
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
            q31: q31,
            q32: q32,
            q33: q33,
            q34: q34,
            q35: q35,
            q36: q36,
            q37: q37,
            q38: q38,
            q39: q39,
            q40: q40,
            q41: q41,
            q42: q42,
            q43: q43,
            q44: q44,
            nota_lingua_portuguesa: nota_lingua_portuguesa,
            nota_matematica: nota_matematica
        }).then(() => {
            notifier.notify({
                title: 'GABARITO SALVO COM SUCESSO',
                message: 'Parabéns você preencheu tudo.'
              });
              res.render("confirmacao_simulado", {
                nome: nome,
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
                q31: q31,
                q32: q32,
                q33: q33,
                q34: q34,
                q35: q35,
                q36: q36,
                q37: q37,
                q38: q38,
                q39: q39,
                q40: q40,
                q41: q41,
                q42: q42,
                q43: q43,
                q44: q44,
                nota_lp: nota_lingua_portuguesa,
                nota_mat: nota_matematica
            });
        });
    }
});

//Rotas para receber os gabaritos do terceiro simulado
app.post("/envio_quarto_simulado", (req, res) => {
    const respostasLinguaPortuguesa = [
        "B", "A", "B",
        "D", "D", "A",
        "C", "A", "A",
        "A", "C", "D", 
        "A", "D", "B",
        "B", "B", "D",
        "B", "C", "C", "B"];
    const respostasMatematica = [
        "A", "C", "A",
        "C", "C", "C",
        "C", "C", "B",
        "B", "D", "D", 
        "D", "D", "A",
        "A", "C", "C", 
        "A", "B", "B", "B"];
    var nota_matematica = 0;
    var nota_lingua_portuguesa = 0;
    var nome = req.body.name;
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
    var q31 = req.body.q31;
    var q32 = req.body.q32;
    var q33 = req.body.q33;
    var q34 = req.body.q34;
    var q35 = req.body.q35;
    var q36 = req.body.q36;
    var q37 = req.body.q37;
    var q38 = req.body.q38;
    var q39 = req.body.q39;
    var q40 = req.body.q40;
    var q41 = req.body.q41;
    var q42 = req.body.q42;
    var q43 = req.body.q43;
    var q44 = req.body.q44;
    const respostasEnviadasLinguaPortuguesa = [
        q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, 
        q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, 
        q21, q22
    ];

    const respostasEnviadasMatematica = [
        q23, q24, q25, q26, q27, q28, q29, q30, 
        q31, q32, q33, q34, q35, q36, q37, q38, q39, q40, 
        q41, q42, q43, q44
    ];

    for (let i = 0; i < respostasEnviadasLinguaPortuguesa.length; i++) {
        if (respostasEnviadasLinguaPortuguesa[i] === respostasLinguaPortuguesa[i]) {
            nota_lingua_portuguesa++;
        }
    };

    for (let i = 0; i < respostasEnviadasMatematica.length; i++) {
        if (respostasEnviadasMatematica[i] === respostasMatematica[i]) {
            nota_matematica++;
        }
    };
    
    if(nome=="" || q1==null || q2==null || q3==null || q4==null || q5==null || q6==null
    || q7==null || q8==null || q9==null || q10==null || q11==null || q12==null || q13==null || q14==null || q15==null
    || q16==null || q17==null || q18==null || q19==null || q20==null || q21==null || q22==null || q23==null || q24==null
    || q25==null || q26==null || q27==null || q28==null || q29==null || q30==null || q31==null || q32==null || q33==null
    || q34==null || q35==null || q36==null || q37==null || q38==null || q39==null || q40==null || q41==null || q42==null
    || q43==null || q44==null){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("quarto_simulado");
    }else {
   
        Quarto_simulado.create({
            nome: nome.toUpperCase(),
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
            q31: q31,
            q32: q32,
            q33: q33,
            q34: q34,
            q35: q35,
            q36: q36,
            q37: q37,
            q38: q38,
            q39: q39,
            q40: q40,
            q41: q41,
            q42: q42,
            q43: q43,
            q44: q44,
            nota_lingua_portuguesa: nota_lingua_portuguesa,
            nota_matematica: nota_matematica
        }).then(() => {
            notifier.notify({
                title: 'GABARITO SALVO COM SUCESSO',
                message: 'Parabéns você preencheu tudo.'
              });
              res.render("confirmacao_simulado", {
                nome: nome,
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
                q31: q31,
                q32: q32,
                q33: q33,
                q34: q34,
                q35: q35,
                q36: q36,
                q37: q37,
                q38: q38,
                q39: q39,
                q40: q40,
                q41: q41,
                q42: q42,
                q43: q43,
                q44: q44,
                nota_lp: nota_lingua_portuguesa,
                nota_mat: nota_matematica
            });
        });
    }
});

//Rotas para receber os gabaritos do terceiro simulado
app.post("/envio_quinto_simulado", (req, res) => {
    const respostasLinguaPortuguesa = [
        "C", "B", "D",
        "C", "C", "B",
        "C", "A", "A",
        "B", "A", "B", 
        "A", "D", "A",
        "A", "B", "B",
        "A", "B", "A", "A"];
    const respostasMatematica = [
        "B", "C", "B",
        "B", "A", "A",
        "C", "B", "D",
        "C", "C", "A", 
        "A", "B", "D",
        "B", "C", "D", 
        "D", "B", "B", "A"];
    var nota_matematica = 0;
    var nota_lingua_portuguesa = 0;
    var nome = req.body.name;
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
    var q31 = req.body.q31;
    var q32 = req.body.q32;
    var q33 = req.body.q33;
    var q34 = req.body.q34;
    var q35 = req.body.q35;
    var q36 = req.body.q36;
    var q37 = req.body.q37;
    var q38 = req.body.q38;
    var q39 = req.body.q39;
    var q40 = req.body.q40;
    var q41 = req.body.q41;
    var q42 = req.body.q42;
    var q43 = req.body.q43;
    var q44 = req.body.q44;
    const respostasEnviadasLinguaPortuguesa = [
        q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, 
        q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, 
        q21, q22
    ];

    const respostasEnviadasMatematica = [
        q23, q24, q25, q26, q27, q28, q29, q30, 
        q31, q32, q33, q34, q35, q36, q37, q38, q39, q40, 
        q41, q42, q43, q44
    ];

    for (let i = 0; i < respostasEnviadasLinguaPortuguesa.length; i++) {
        if (respostasEnviadasLinguaPortuguesa[i].toUpperCase() === respostasLinguaPortuguesa[i]) {
            nota_lingua_portuguesa++;
        }
    };

    for (let i = 0; i < respostasEnviadasMatematica.length; i++) {
        if (respostasEnviadasMatematica[i].toUpperCase() === respostasMatematica[i]) {
            nota_matematica++;
        }
    };
    
    if(nome=="" || q1==null || q2==null || q3==null || q4==null || q5==null || q6==null
    || q7==null || q8==null || q9==null || q10==null || q11==null || q12==null || q13==null || q14==null || q15==null
    || q16==null || q17==null || q18==null || q19==null || q20==null || q21==null || q22==null || q23==null || q24==null
    || q25==null || q26==null || q27==null || q28==null || q29==null || q30==null || q31==null || q32==null || q33==null
    || q34==null || q35==null || q36==null || q37==null || q38==null || q39==null || q40==null || q41==null || q42==null
    || q43==null || q44==null){
        notifier.notify({
            title: 'RESPONDA TODAS AS PERGUNTAS',
            message: 'Você não pode deixar nenhum campo em branco.'
          });
        res.redirect("quinto_simulado");
    }else {
   
        Quinto_simulado.create({
            nome: nome.toUpperCase(),
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
            q31: q31,
            q32: q32,
            q33: q33,
            q34: q34,
            q35: q35,
            q36: q36,
            q37: q37,
            q38: q38,
            q39: q39,
            q40: q40,
            q41: q41,
            q42: q42,
            q43: q43,
            q44: q44,
            nota_lingua_portuguesa: nota_lingua_portuguesa,
            nota_matematica: nota_matematica
        }).then(() => {
            notifier.notify({
                title: 'GABARITO SALVO COM SUCESSO',
                message: 'Parabéns você preencheu tudo.'
              });
              res.render("confirmacao_simulado", {
                nome: nome,
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
                q31: q31,
                q32: q32,
                q33: q33,
                q34: q34,
                q35: q35,
                q36: q36,
                q37: q37,
                q38: q38,
                q39: q39,
                q40: q40,
                q41: q41,
                q42: q42,
                q43: q43,
                q44: q44,
                nota_lp: nota_lingua_portuguesa,
                nota_mat: nota_matematica
            });
        });
    }
});

//Rotas para receber os gabaritos doS SIMULADOS
app.get("/gabarito_simulados", (req, res) => {

    var seg_simulado, ter_simulado, qua_simulado, quin_simulado;

    Quinto_simulado.findAll({order: [['nome', 'ASC']]}).then(quinto_simulado => {
        quin_simulado = quinto_simulado;
    });

    Quarto_simulado.findAll({order: [['nome', 'ASC']]}).then(quarto_simulado => {
        qua_simulado = quarto_simulado;
    });

    Terceiro_simulado.findAll({order: [['nome', 'ASC']]}).then(terceiro_simulado => {
        ter_simulado = terceiro_simulado;
    });

    Segundo_simulado.findAll({order: [['nome', 'ASC']]}).then(segundo_simulado => {
        seg_simulado = segundo_simulado;
    });

    Primeiro_simulado.findAll({order: [['nome', 'ASC']]}).then(primeiro_simulado => {
        res.render("gabarito_simulados", {

            primeiro_simulado: primeiro_simulado,
            segundo_simulado: seg_simulado,
            terceiro_simulado: ter_simulado,
            quarto_simulado: qua_simulado,
            quinto_simulado: quin_simulado
     
        }); 
    });
    
});

//Rotas para receber os gabaritos doS SIMULADOS DE LÍNGUA PORTUGUESA
app.get("/gabarito_simulado_lp", (req, res) => {
    var seg_simulado, ter_simulado, qua_simulado, quin_simulado;

    Quinto_simulado.findAll({order: [['nome', 'ASC']]}).then(quinto_simulado => {
        quin_simulado = quinto_simulado;
    });

    Quarto_simulado.findAll({order: [['nome', 'ASC']]}).then(quarto_simulado => {
        qua_simulado = quarto_simulado;
    });

    Terceiro_simulado.findAll({order: [['nome', 'ASC']]}).then(terceiro_simulado => {
        ter_simulado = terceiro_simulado;
    });

    Segundo_simulado.findAll({order: [['nome', 'ASC']]}).then(segundo_simulado => {
        seg_simulado = segundo_simulado;
    });

    Primeiro_simulado.findAll({order: [['nome', 'ASC']]}).then(primeiro_simulado => {
        res.render("gabarito_simulado_lp", {

            primeiro_simulado: primeiro_simulado,
            segundo_simulado: seg_simulado,
            terceiro_simulado: ter_simulado,
            quarto_simulado: qua_simulado,
            quinto_simulado: quin_simulado
     
        }); 
    });
});

//Rotas para receber os gabaritos doS SIMULADOS DE LÍNGUA MATEMÁTICA
app.get("/gabarito_simulado_mat", (req, res) => {
    var seg_simulado, ter_simulado, qua_simulado, quin_simulado;

    Quinto_simulado.findAll({order: [['nome', 'ASC']]}).then(quinto_simulado => {
        quin_simulado = quinto_simulado;
    });

    Quarto_simulado.findAll({order: [['nome', 'ASC']]}).then(quarto_simulado => {
        qua_simulado = quarto_simulado;
    });

    Terceiro_simulado.findAll({order: [['nome', 'ASC']]}).then(terceiro_simulado => {
        ter_simulado = terceiro_simulado;
    });

    Segundo_simulado.findAll({order: [['nome', 'ASC']]}).then(segundo_simulado => {
        seg_simulado = segundo_simulado;
    });

    Primeiro_simulado.findAll({order: [['nome', 'ASC']]}).then(primeiro_simulado => {
        res.render("gabarito_simulado_mat", {

            primeiro_simulado: primeiro_simulado,
            segundo_simulado: seg_simulado,
            terceiro_simulado: ter_simulado,
            quarto_simulado: qua_simulado,
            quinto_simulado: quin_simulado
     
        }); 
    });
});

//pagina que lista todos as páginas de gabaritos
app.get("/todogabarito", (req, res) => {

    res.render("todogabarito");
    
});


//****************************************************************************************** */
    //rota para apagar um registro da tabela da 61
    app.post("/deletarturma61", (req, res) => {
        var id = req.body.id;
        if(id != undefined){
            Turma61_bim_3.destroy({
                where: {
                    id: id
                }
                
            }).then(()=>{
                res.redirect("/gabaritos");
            });
        }
        
        });

           //rota para apagar um registro da tabela da 62
    app.post("/deletarturma62", (req, res) => {
        var id = req.body.id;
        if(id != undefined){
            Turma62_bim_3.destroy({
                where: {
                    id: id
                }
                
            }).then(()=>{
                res.redirect("/gabaritos");
            });
        }
        
        });
 //rota para apagar um registro da tabela da 63
    app.post("/deletarturma63", (req, res) => {
        var id = req.body.id;
        if(id != undefined){
            Turma63_bim_3.destroy({
                where: {
                    id: id
                }
                
            }).then(()=>{
                res.redirect("/gabaritos");
            });
        }
        
        });
         //rota para apagar um registro da tabela da 64
    app.post("/deletarturma64", (req, res) => {
        var id = req.body.id;
        if(id != undefined){
            Turma64_bim_3.destroy({
                where: {
                    id: id
                }
                
            }).then(()=>{
                res.redirect("/gabaritos");
            });
        }
        
        });

                 //rota para apagar um registro da tabela da 101
    app.post("/deletarturma101", (req, res) => {
        var id = req.body.id;
        if(id != undefined){
            Turma101_bim_3.destroy({
                where: {
                    id: id
                }
                
            }).then(()=>{
                res.redirect("/gabaritos");
            });
        }
        
        });

                         //rota para apagar um registro da tabela da 102
    app.post("/deletarturma102", (req, res) => {
        var id = req.body.id;
        if(id != undefined){
            Turma102_bim_3.destroy({
                where: {
                    id: id
                }
                
            }).then(()=>{
                res.redirect("/gabaritos");
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

        //rota para apagar um registro da tabela da 303
app.post("/deletarturma304", (req, res) => {
    var id = req.body.id;
    if(id != undefined){
        Turma304_bim_3.destroy({
            where: {
                id: id
            }
            
        }).then(()=>{
            res.redirect("/gabaritos");
        });
    }
    
    });
//rota para apagar um registro da tabela Geografia 3 Bim
app.post("/deletargeografia3Bim", (req, res) => {
            var id = req.body.id;
            if(id != undefined){
                Geografia3bim.destroy({
                    where: {
                        id: id
                    }
                    
                }).then(()=>{
                    res.redirect("/gab_atividade_avaliativa_3bim");
                });
            }
    });
//rota para apagar um registro da tabela História 3 Bim
app.post("/deletarhistoria3Bim", (req, res) => {
    var id = req.body.id;
    if(id != undefined){
        Historia3bim.destroy({
            where: {
                id: id
            }
            
        }).then(()=>{
            res.redirect("/gab_atividade_avaliativa_3bim");
        });
    }
});

//rota para apagar um registro da tabela História 3 Bim
app.post("/deletarsimulados", (req, res) => {
    var id = req.body.id;
    if(id != undefined){
        Primeiro_simulado.destroy({
            where: {
                id: id
            }
            
        }).then(()=>{
            res.redirect("/gabarito_simulados");
        });
    }
});

//rota para apagar um registro da tabela História 3 Bim
app.post("/deletar_simulado_lingua_portuguesa", (req, res) => {
    var id = req.body.id;
    if(id != undefined){
        Primeiro_simulado.destroy({
            where: {
                id: id
            }
            
        }).then(()=>{
            res.redirect("/gabarito_simulado_lp");
        });
    }
});

//rota para apagar um registro da tabela História 3 Bim
app.post("/deletar_simulado_matematica", (req, res) => {
    var id = req.body.id;
    if(id != undefined){
        Primeiro_simulado.destroy({
            where: {
                id: id
            }
            
        }).then(()=>{
            res.redirect("/gabarito_simulado_mat");
        });
    }
});

//rota para apagar um registro da tabela História 3 Bim
app.post("/deletar_segundo_simulado", (req, res) => {
    var id = req.body.id; 
    if(id != undefined){
        Segundo_simulado.destroy({
            where: {
                id: id
            }
            
        }).then(()=>{
            res.redirect("/gabarito_simulados");
        });
    }
});

//rota para apagar um registro da tabela História 3 Bim
app.post("/deletar_terceiro_simulado", (req, res) => {
    var id = req.body.id; 
    if(id != undefined){
        Terceiro_simulado.destroy({
            where: {
                id: id
            }
            
        }).then(()=>{
            res.redirect("/gabarito_simulados");
        });
    }
});

//rota para apagar um registro da tabela História 3 Bim
app.post("/deletar_quarto_simulado", (req, res) => {
    var id = req.body.id; 
    if(id != undefined){
        Quarto_simulado.destroy({
            where: {
                id: id
            }
            
        }).then(()=>{
            res.redirect("/gabarito_simulados");
        });
    }
});

//rota para apagar um registro da tabela História 3 Bim
app.post("/deletar_quinto_simulado", (req, res) => {
    var id = req.body.id; 
    if(id != undefined){
        Quinto_simulado.destroy({
            where: {
                id: id
            }
            
        }).then(()=>{
            res.redirect("/gabarito_simulados");
        });
    }
});

//rota para exibição da página com todos os gabaritos
app.get("/gabaritos", (req, res) => {
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
    var gabarito_turma304, gabarito_turma102, gabarito_turma101, gabarito_turma61, gabarito_turma62, gabarito_turma63, gabarito_turma64;
    const  respostasTerceiroAnobim3 = [nome, turma, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22, q23, q24,
    q25, q26, q27, q28, q29, q30];
    
    Turma304_bim_3.findAll({order: [['nome', 'ASC']]}).then(turma304 => {
        gabarito_turma304 = turma304;
    });

    Turma102_bim_3.findAll({order: [['nome', 'ASC']]}).then(turma102 => {
        gabarito_turma102 = turma102;
    });

    Turma101_bim_3.findAll({order: [['nome', 'ASC']]}).then(turma101 => {
        gabarito_turma101 = turma101;
    });

    Turma64_bim_3.findAll({order: [['nome', 'ASC']]}).then(turma64 => {
        gabarito_turma64 = turma64;
    });

    Turma63_bim_3.findAll({order: [['nome', 'ASC']]}).then(turma63 => {
        gabarito_turma63 = turma63;
    });

    Turma62_bim_3.findAll({order: [['nome', 'ASC']]}).then(turma62 => {
        gabarito_turma62 = turma62;
    });

    Turma61_bim_3.findAll({order: [['nome', 'ASC']]}).then(turma61 => {
        gabarito_turma61 = turma61;
    });

    Turma304_bim_3.findAll({order: [['nome', 'ASC']]}).then(turma304 => {
        gabarito_turma304 = turma304;
    });
        
    Turma303_bim_3.findAll({order: [['nome', 'ASC']]}).then(turma303 => {
        res.render("gabaritos", {
            nome: nome,
            turma: turma,
            total: total,
            turma303: turma303,
            turma304: gabarito_turma304,
            turma102: gabarito_turma102,
            turma101: gabarito_turma101,
            turma64: gabarito_turma64,
            turma63: gabarito_turma63,
            turma62: gabarito_turma62,
            turma61: gabarito_turma61,
            respostasTerceiroAnobim3: respostasTerceiroAnobim3
        }); 
    });
});

//rota para exibição da página com os gabaritos da atividade avaliativa do terceiro bimestre 5º A
app.get("/gab_atividade_avaliativa_3bim", (req, res) => {
    var total = 0;
    var nome = req.body.name;
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

    var gabarito_historia;

    const  respostas = [nome, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15];

    Historia3bim.findAll({order: [['nome', 'ASC']]}).then(historia => {
        gabarito_historia = historia;
    });
         
    Geografia3bim.findAll({order: [['nome', 'ASC']]}).then(geografia => {
        res.render("gab_atividade_avaliativa_3bim", {
            nome: nome,
            total: total,
            geografia: geografia,
            historia: gabarito_historia,
            respostas: respostas
        }); 
    });
});

//servidor
app.listen(1313, ()=>{
    console.log("Servidor Rodando na porta 1313");
});