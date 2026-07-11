const formulario = document.querySelector("form");
const botaoAgendar = document.querySelector("#btnAgendar");

function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, "");
    return cpf.length === 11;
}

function validarTelefone(telefone) {
    telefone = telefone.replace(/\D/g, "");
    return telefone.length >= 10;
}

function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

botaoAgendar.addEventListener("click", function (e) {

    e.preventDefault();

    const nome = document.querySelector("#nome").value.trim();
    const cpf = document.querySelector("#cpf").value.trim();
    const email = document.querySelector("#email").value.trim();
    const telefone = document.querySelector("#telefone").value.trim();
    const sus = document.querySelector("#sus").value.trim();
    const exame = document.querySelector("#exame").value;
    const ubs = document.querySelector("#ubs").value;
    const data = document.querySelector("#data").value;
    const horario = document.querySelector("#horario").value;

    if (
        nome === "" ||
        cpf === "" ||
        email === "" ||
        telefone === "" ||
        sus === "" ||
        exame === "" ||
        ubs === "" ||
        data === "" ||
        horario === ""
    ) {
        alert("Preencha todos os campos obrigatórios.");
        return;
    }

    if (!validarCPF(cpf)) {
        alert("CPF inválido.");
        return;
    }

    if (!validarEmail(email)) {
        alert("E-mail inválido.");
        return;
    }

    if (!validarTelefone(telefone)) {
        alert("Telefone inválido.");
        return;
    }

    alert("Consulta agendada com sucesso!");

    formulario.reset();

    // Encaminha para a página de acompanhamento após o agendamento
    window.location.href = "acompanhamento.html";

});
