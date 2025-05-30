
document.getElementById("consulta-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const placa = document.getElementById("placa").value.trim().toUpperCase();
    const resultado = document.getElementById("resultado");

    if (!placa) {
        resultado.innerText = "Por favor, insira uma placa ou chassi.";
        return;
    }

    // Simulação de resposta
    resultado.innerText = "Resultado da avaliação para " + placa + ": R$ 120.000 (estimativa)";
});
