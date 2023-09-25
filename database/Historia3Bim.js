const Sequelize = require("sequelize");
const connection = require("./database");

const Historia3bim = connection.define("Historia3bim", {
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
    }
});

Historia3bim.sync({force: false}).then(() => {});

module.exports = Historia3bim;