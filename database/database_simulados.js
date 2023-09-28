const Sequelize = require("sequelize");
//conexão com o banco de dados do mysql

const connection_simulados = new Sequelize("simulados", "aluno", "aluno", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = connection_simulados;
