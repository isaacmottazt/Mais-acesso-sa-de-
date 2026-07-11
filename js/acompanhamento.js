document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("formVerificacao");
    const nome = document.getElementById("nomeVerificacao");
    const exame = document.getElementById("exameVerificacao");
    const local = document.getElementById("localVerificacao");

    const resultadoAnalise = document.getElementById("resultadoAnalise");
    const resultadoConfirmado = document.getElementById("resultadoConfirmado");

    const btnVoltar = document.getElementById("btnVoltarAcompanhamento");
    const btnDownload = document.getElementById("btnDownload");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (nome.value.trim() === "") {
            alert("Digite seu nome completo.");
            nome.focus();
            return;
        }

        if (exame.value === "") {
            alert("Selecione o tipo de exame.");
            exame.focus();
            return;
        }

        if (local.value.trim() === "") {
            alert("Digite a localidade.");
            local.focus();
            return;
        }

        // Esconde os dois estados antes de decidir qual mostrar
        resultadoAnalise.style.display = "none";
        resultadoConfirmado.style.display = "none";

        // Simulação: agendamentos já processados (nomes com número par de
        // caracteres) mostram os dados confirmados; os demais aparecem
        // como "em análise" — TODO: substituir por consulta real à API/banco.
        const jaProcessado = nome.value.trim().replace(/\s+/g, "").length % 2 === 0;

        if (jaProcessado) {
            document.getElementById("dadoData").innerText = "23/05/2026";
            document.getElementById("dadoHorario").innerText = "15h30";
            document.getElementById("dadoSenhaTexto").innerText = "Nº 15";
            document.getElementById("dadoSenha").innerText = "15";

            resultadoConfirmado.style.display = "block";
        } else {
            document.getElementById("msgNome").innerText = nome.value.trim();
            document.getElementById("msgExame").innerText = exame.value;
            document.getElementById("msgLocal").innerText = local.value.trim();

            resultadoAnalise.style.display = "block";
        }

        resultadoAnalise.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });

    if (btnDownload) {
        btnDownload.addEventListener("click", () => {
            alert("Download do comprovante (implementar integração com o backend).");
        });
    }

    if (btnVoltar) {
        btnVoltar.addEventListener("click", () => {
            window.location.href = "home.html";
        });
    }

});
