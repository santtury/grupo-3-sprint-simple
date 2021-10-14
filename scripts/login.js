// Sprint 5
let registros = [];

function login() {

}

function agregarRegistro() {
    let registro = {
        tipoDocumento: document.getElementById("tipo-documento").value,
        numeroDocumento: document.getElementById("numero-documento").value,
        correo: document.getElementById("correo").value,
        contrasena: document.getElementById("contrasena").value,
    };
    registros.push(registro);
}

function validarCAPTCHA(valor) {

}

module.exports = { login, registros, agregarRegistro, validarCAPTCHA };
// module.exports.login = login;
// module.exports.registros = registros;
// module.exports.agregarRegistro = agregarRegistro;
// module.exports.validarCAPTCHA = validarCAPTCHA;
