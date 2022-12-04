const express = require("express");

const app = express();

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