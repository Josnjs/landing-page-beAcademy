const express = require("express");
const connection = require("./db");
const bodyParser = require("body-parser");


const app = express();


app.set("view engine", "hbs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/", (req, res) => {
    res.render("home");
});
app.get("/quemSomos", (req, res) => {
    res.render("quemSomos");
});
app.get("/nossaMissao", (req, res) => {
    res.render("nossaMissao");
});
app.get("/cursos", (req, res) => {
    res.render("cursos");
});



app.post("/register", (req, res) => {

    let name = req.body.name;
    let email = req.body.email;
    let lang = req.body.curso;

    if (name && email && lang) {

        insertsUsers = connection.query(`INSERT INTO users (name, email, curso) VALUES ('${name}','${email}','${lang}')`);

        res.send(`<h3>Parabéns ${name}, seu cadastro foi realizado com sucesso no curso de ${lang}</h3>`);
    } else {
        res.send("<h3>Dados não cadastrados, preencha todos os campos corretamente...</h3>"

        );
    }

});


app.get("/logs", (req, res) => {
    const find = connection.query(`SELECT * FROM users`, (err, rows, field) => {
        err ? console.log(err) : console.log("Busca bem sucedida...");
        res.render("logs", { field: rows })
    });
});



app.listen(8080, (err) => {
    err ? console.log(err) : console.log("Server inicializado...");
})