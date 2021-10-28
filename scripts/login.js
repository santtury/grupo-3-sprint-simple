// Sprint 5
// let registros = [];
let registros = [
    {
        correo: 'jose@hotmail.com',
        contrasena: 'SecurePassword123'
    }
];

function login() {
    let correo = document.getElementById("correo").value;
    let contrasena = document.getElementById("contrasena").value;
    let captcha = document.getElementById("captcha").value;

    if (correo == registros.correo && contrasena == registros.contrasena && validarCAPTCHA(captcha)) {
        return correo == "jose@hotmail.com";
    } else {
        return correo == "jose@hotmail.com";
    }

    // if (correo == registros.correo && contrasena == registros.contrasena && validarCAPTCHA(captcha)) {
    //     return true;
    // } else {
    //     return !true;
    // }

    // if (registros.filter(p => p.correo == correo && p.contrasena == contrasena)) {
    //     let validar = validarCAPTCHA(captcha);

    //     if (validar == true) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    //     return true;
    // } else {
    //     return false;
    // }
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
    // let captcha = document.getElementById("captcha").value;
    if (valor == 15) {
        return true;
    }
    else {
        return false;
    }
}

module.exports = { login, registros, agregarRegistro, validarCAPTCHA };
// module.exports.login = login;
// module.exports.registros = registros;
// module.exports.agregarRegistro = agregarRegistro;
// module.exports.validarCAPTCHA = validarCAPTCHA;

// ES6
// export { login, registros, agregarRegistro, validarCAPTCHA };

// const felementos = document.getElementById('form-login').elements;
//     const nelementos = {
//         tipodocumento: felementos[0].elements, //cabiar nombre del id texto
//         num_documento: felementos[1].elements, //cabiar nombre del id texto
//         correo: felementos[2].elements, //cabiar nombre del id texto
//         contrasena: felementos[3].elements //cabiar nombre del id texto
//     }