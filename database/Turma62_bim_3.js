const Sequelize = require("sequelize");
const connection = require("./database");

const Turma62 = connection.define("Turma62", {
    nome:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    turma:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    q1:{
        type: Sequelize.STRING,
        allowNull: false
    },
    q2:{
        type: Sequelize.STRING,
        allowNull: false
    },
    q3:{
        type: Sequelize.STRING,
        allowNull: false
    },
    q4:{
        type: Sequelize.STRING,
        allowNull: false
    },
    q5:{
        type: Sequelize.STRING,
        allowNull: false
    },
    q6:{
        type: Sequelize.STRING,
        allowNull: false
    },
    q7:{
        type: Sequelize.STRING,
        allowNull: false
    },
    q8:{
        type: Sequelize.STRING,
        allowNull: false
    },
    q9:{
        type: Sequelize.STRING,
        allowNull: false
    },
    q10:{
        type: Sequelize.STRING,
        allowNull: false
    },
    q11:{
        type: Sequelize.STRING,
        allowNull: false
    },
    q12:{
        type: Sequelize.STRING,
        allowNull: false
    },
    q13:{
        type: Sequelize.STRING,
        allowNull: false
    },   
    q14:{
        type: Sequelize.STRING,
        allowNull: false
    },
    q15:{
        type: Sequelize.STRING,
        allowNull: false
    },
    q16:{
        type: Sequelize.STRING,
        allowNull: false
    },
    q17:{
        type: Sequelize.STRING,
        allowNull: false
    },
    q18:{
        type: Sequelize.STRING,
        allowNull: false
    },
    q19:{
        type: Sequelize.STRING,
        allowNull: false
    },
    q20:{
        type: Sequelize.STRING,
        allowNull: false
    },
    q21:{
        type: Sequelize.STRING,
        allowNull: false
    },
    q22:{
        type: Sequelize.STRING,
        allowNull: false
    },
    q23:{
        type: Sequelize.STRING,
        allowNull: false
    },
    q24:{
        type: Sequelize.STRING,
        allowNull: false
    },
    q25:{
        type: Sequelize.STRING,
        allowNull: false
    },
    q26:{
        type: Sequelize.STRING,
        allowNull: false
    },
    q27:{
        type: Sequelize.STRING,
        allowNull: false
    },
    q28:{
        type: Sequelize.STRING,
        allowNull: false
    },
    q29:{
        type: Sequelize.STRING,
        allowNull: false
    },
    q30:{
        type: Sequelize.STRING,
        allowNull: false
    }   
});

Turma62.sync({force: false}).then(() => {});

module.exports = Turma62;