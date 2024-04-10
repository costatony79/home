const Sequelize = require("sequelize");
//conexão com o banco de dados do mysql
const connection = new Sequelize("trabalhos_bimestrais_jf", "aluno", "aluno", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = connection;
