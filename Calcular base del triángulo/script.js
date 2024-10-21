function calcularSuperficie() {
    // Obtener valores del DOM
    let base = parseFloat(document.getElementById('base').value);
    let altura = parseFloat(document.getElementById('altura').value);
    
    // Validar que ambos valores son correctos
    if (isNaN(base) || isNaN(altura)) {
        document.getElementById('resultado').innerText = "Por favor, introduce valores válidos.";
        return;
    }

    // Calcular el área del triángulo
    let area = (base * altura) / 2;

    // Mostrar el resultado con 2 decimales
    document.getElementById('resultado').innerText = 
        "La superficie del triángulo es: " + area.toFixed(2) + " m²";
}
