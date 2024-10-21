window.onload = inicio;

function inicio() {
    // Asignar eventos de click a los botones
    document.getElementById("btn1").addEventListener('click', pulsar, false);
    document.getElementById("btn2").addEventListener('click', pulsar, false);
    document.getElementById("btn3").addEventListener('click', pulsar, false);
}

// Función para cambiar el color de la caja y mostrar alerta
function pulsar() {
    var btn = this.value;  // Valor del botón (ej. "1 Rojo")
    var caja = document.getElementById("caja");  // Referencia a la caja

    // Cambiar color de la caja según el botón presionado y mostrar alerta
    if (btn === "1 Rojo") {
        alert('Pulsado botón 1');
        caja.style.backgroundColor = "red";
    } else if (btn === "2 Verde") {
        alert('Pulsado botón 2');
        caja.style.backgroundColor = "green";
    } else if (btn === "3 Azul") {
        alert('Pulsado botón 3');
        caja.style.backgroundColor = "blue";
    }
}
