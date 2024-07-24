
let altura = parseFloat(prompt("Ingresa tu altura en centímetros."));
if (altura <= 0) {
    alert("Por favor, ingresa una altura válida en centímetros.");
} else {
    let peso = parseFloat(prompt("Ingresa tu peso en kilogramos."));
    if (peso <= 0) {
        alert("Por favor, ingresa un peso válido en kilogramos.");
    } else {
        let imc = calcularIMC(peso, altura);
        console.log("Tu IMC es: " + imc.toFixed(2));
    }
}

// Función para calcular el IMC
function calcularIMC(peso, altura) {
    altura = altura / 100;
    return peso / (altura * altura);
}
