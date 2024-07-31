
const imcCategorias = [
    { min: null, max: 18.4, categoria: "bajo peso" },
    { min: 18.5, max: 24.9, categoria: "peso normal" },
    { min: 25, max: 29.9, categoria: "sobrepeso" },
    { min: 30, max: Infinity, categoria: "obesidad" }
];

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
console.log('Ese valor representa: ' + obtenerCategoria(imc))
        
    }
}

// Función para calcular el IMC
function calcularIMC(peso, altura) {
    altura = altura / 100;
    return peso / (altura * altura);
}

// Función para obtener la categoría basada en un IMC dado
function obtenerCategoria(imc) {
    for (const categoria of imcCategorias) {
        if ((imc >= categoria.min) && (imc <= categoria.max)) {
            return categoria.categoria;
        }
    }
    return "Categoría desconocida";
}