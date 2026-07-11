// ==========================
// SELEÇÃO DOS DIAS
// ==========================

const dias = document.querySelectorAll(".dia");

dias.forEach((dia) => {
    dia.addEventListener("click", () => {

        dias.forEach((d) => {
            d.classList.remove("ativo");
        });

        dia.classList.add("ativo");

    });
});


// ==========================
// SELEÇÃO DOS HORÁRIOS
// ==========================

const horarios = document.querySelectorAll(".horario");

horarios.forEach((horario) => {

    horario.addEventListener("click", () => {

        horarios.forEach((h) => {
            h.classList.remove("selecionado");
        });

        horario.classList.add("selecionado");

    });

});


// ==========================
// BOTÃO AGENDAR
// ==========================

const btnAgendar = document.querySelector(".agendar");

if (btnAgendar) {

    btnAgendar.addEventListener("click", () => {

        const diaSelecionado = document.querySelector(".dia.ativo");
        const horarioSelecionado = document.querySelector(".horario.selecionado");

        if (!diaSelecionado || !horarioSelecionado) {
            alert("Selecione uma data e um horário.");
            return;
        }

        const diaSemana = diaSelecionado.querySelector("span").textContent;
        const numero = diaSelecionado.querySelector("strong").textContent;
        const mes = diaSelecionado.querySelector("small").textContent;

        const horario = horarioSelecionado.textContent.trim();

        alert(
            `Agendamento realizado!\n\nData: ${diaSemana}, ${numero} de ${mes}\nHorário: ${horario}`
        );

        window.location.href = "acompanhamento.html";

    });

}


// ==========================
// BOTÃO VOLTAR
// ==========================

const btnVoltar = document.querySelector(".voltar");

if (btnVoltar) {

    btnVoltar.addEventListener("click", () => {

        window.location.href = "home.html";

    });

}


// ==========================
// BOTÃO PRÓXIMO (SETA)
// ==========================

const btnProximo = document.querySelector(".proximo");

if (btnProximo) {

    btnProximo.addEventListener("click", () => {

        alert("Próxima semana (implementar integração com o banco de dados).");

    });

}
