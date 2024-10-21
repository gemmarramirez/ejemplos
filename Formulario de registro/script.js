window.onload = function () {
    const btnEnviar = document.getElementById("enviar");
    btnEnviar.onclick = validarFormulario;
    generarSuma();
};

/**
 * Genera 2 números aleatorios y los muestra en el formulario
 */
function generarSuma() {
    const a = Math.round(Math.random() * 10);
    const b = Math.round(Math.random() * 10);
    document.getElementById("a").value = a;
    document.getElementById("b").value = b;
}

/**
 * Comprueba que el resultado de la suma es correcto
 */
function verificarSuma() {
    const a = parseInt(document.getElementById("a").value);
    const b = parseInt(document.getElementById("b").value);
    const resultado = parseInt(document.getElementById("resultado").value);
    return a + b === resultado;
}

/**
 * Valida el formulario completo antes de enviarlo
 */
function validarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const clave = document.getElementById("clave").value;
    const reclave = document.getElementById("reclave").value;
    const resultado = document.getElementById("resultado").value;
    let valido = true;

    // Validación del nombre de usuario
    if (nombre.length < 3 || nombre.length > 15) {
        alert("El nombre de usuario debe tener entre 3 y 15 caracteres");
        valido = false;
    }

    // Validación de la clave
    if (clave.length < 6 || clave.length > 15) {
        alert("La clave debe tener entre 6 y 15 caracteres");
        valido = false;
    } else if (clave !== reclave) {
        alert("Las contraseñas no coinciden");
        valido = false;
    }

    // Validación del resultado de la suma
    if (resultado === "") {
        alert("Debe introducir el resultado de la suma");
        valido = false;
    } else if (isNaN(resultado)) {
        alert("El campo de resultado sólo puede contener números");
        valido = false;
    } else if (!verificarSuma()) {
        alert("El resultado de la suma es incorrecto, por favor intente de nuevo");
        generarSuma(); // Regenerar la suma si el resultado es incorrecto
        valido = false;
    }

    // Envío del formulario si es válido
    if (valido) {
        alert("El formulario se ha enviado correctamente");
        document.getElementById("formulario").submit();
    }
}
