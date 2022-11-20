const matricula = document.getElementById("matricula");
const newFormulario = document.getElementById("newFormulario");


matricula.addEventListener("click", matricular = () => {

    const createForm = `
    <form class="form" id="formulario">
    <div class="form-types">
        Nome completo:
        <input type="text">
    </div>
    <div class="form-types">
        CPF:
        <input type="number">
    </div>
    <div class="form-types">
        Email:
        <input type="email">
    </div>
    <div class="form-types">
        Telefone:
        <input type="tel">
    </div>
    <div>
        <input type="submit" value="Enviar" id="enviar">
    </div>
    </form>
    `;


    newFormulario.innerHTML = createForm;


});
