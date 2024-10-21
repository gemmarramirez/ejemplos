function verificarParImpar() {
    // Obtener el valor introducido por el usuario
    let num = parseInt(document.getElementById('numero').value);

    // Verificar si el valor es un número válido
    if (isNaN(num)) {
        document.getElementById('resultado').innerText = "Por favor, introduce un número válido.";
        return;
    }

    // Verificar si es par o impar
    if (num % 2 === 0) {
        document.getElementById('resultado').innerText = "El número " + num + " es par.";
    } else {
        document.getElementById('resultado').innerText = "El número " + num + " es impar.";
    }
}
