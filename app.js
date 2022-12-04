const express = require("express");
const connection = require("./db");


const app = express();


app.get("/logs", (req, res) => {
    const find = connection.query(`SELECT * FROM users`, (err, rows, field) => {
        err ? res.send(err) : res.send(rows);
    });
})


app.set("view engine", "hbs");
app.use(express.static("public"));


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

app.listen(8080, (err) => {
    err ? console.log(err) : console.log("Server inicializado...");
})