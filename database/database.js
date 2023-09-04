const Sequelize = require("sequelize");
//conexão com o banco de dados do mysql
const connection = new Sequelize("asr_terceiro_bim", "aluno", "aluno", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = connection;
