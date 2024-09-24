function converter() {
    const opcao = document.getElementById("opcao").value;
    const temperatura = parseFloat(document.getElementById("temperatura").value);
    let resultado;

    switch (opcao) {
        case "celsius-fahrenheit":
            resultado = (temperatura * 9/5) + 32;
            document.getElementById("resultado").innerText = `Temperatura em Fahrenheit: ${resultado.toFixed(2)}`;
            break;
        case "celsius-kelvin":
            resultado = temperatura + 273.15;
            document.getElementById("resultado").innerText = `Temperatura em Kelvin: ${resultado.toFixed(2)}`;
            break;
        case "fahrenheit-celsius":
            resultado = (temperatura - 32) * 5/9;
            document.getElementById("resultado").innerText = `Temperatura em Celsius: ${resultado.toFixed(2)}`;
            break;
        case "kelvin-celsius":
            resultado = temperatura - 273.15;
            document.getElementById("resultado").innerText = `Temperatura em Celsius: ${resultado.toFixed(2)}`;
            break;
        case "fahrenheit-kelvin":
            resultado = (temperatura - 32) * 5/9 + 273.15;
            document.getElementById("resultado").innerText = `Temperatura em Kelvin: ${resultado.toFixed(2)}`;
            break;
        case "kelvin-fahrenheit":
            resultado = (temperatura - 273.15) * 9/5 + 32;
            document.getElementById("resultado").innerText = `Temperatura em Fahrenheit: ${resultado.toFixed(2)}`;
            break;
        default:
            document.getElementById("resultado").innerText = "Opção inválida!";
    }
}
