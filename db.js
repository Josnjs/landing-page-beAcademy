const mysql = require("mysql");
const dotenv = require("dotenv");


dotenv.config({ path: './.env' });


const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

connection.connect((err) => {
    try {
        console.log("Conectado ao banco de dados...");
    } catch (error) {
        console.log("Falha na conexão...");
    }
});

module.exports = connection;