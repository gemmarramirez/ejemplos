window.onload = iniciar;

function iniciar() {
    document.getElementById("btnConcatenar").addEventListener('click', concatenar, false);
    document.getElementById("btnSumar").addEventListener('click', sumar, false);
}

function concatenar() {
    var a = document.getElementById("txtA").value;
    var b = document.getElementById("txtB").value;
    var operacion = a + b;
    document.getElementById("txtResultado").value = operacion;
}

function sumar() {
    var a = document.getElementById("txtA").value;
    var b = document.getElementById("txtB").value;
    var suma = parseInt(a) + parseInt(b);
    document.getElementById("txtResultado").value = suma;
}
