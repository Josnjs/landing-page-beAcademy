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

    let namePerson = req.body.name;
    let emailPerson = req.body.email;
    let commentPerson = req.body.comment;

    if (namePerson && emailPerson && commentPerson) {

        insertsUsers = connection.query(`INSERT INTO users (name, email, comments) VALUES ('${namePerson}','${emailPerson}','${commentPerson}')`);

        res.send("<h2>Dados cadastrados com sucesso!!!</h2>");
    } else {
        res.send("<h2>Dados não cadastrados...</h2>"

        );
    }

});


app.get("/logs", (req, res) => {
    const find = connection.query(`SELECT * FROM users`, (err, rows, field) => {
        err ? res.send(err) : res.send(rows);
    });
});



app.listen(8080, (err) => {
    err ? console.log(err) : console.log("Server inicializado...");
})