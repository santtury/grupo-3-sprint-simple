// Sprint 03
let registros = [];

function agregarRegistro() {
    let registro = {
        tipoDocumento: document.getElementById("tipo-documento").value,
        numeroDocumento: document.getElementById("numero-documento").value,
        correo: document.getElementById("correo").value,
        contrasena: document.getElementById("contrasena").value,
    }
    registros.push(registro);

    console.log(`Tipo: ${registro.tipoDocumento}
                 Número: ${registro.numeroDocumento}
                 Correo: ${registro.correo}
                 Contraseña ${registro.contrasena}`);
}

function obtenerRegPasaporte(arreglo) {
    let pasaporte = arreglo.filter(function (registro) {
        return registro.tipoDocumento === "P";
    });

    console.log(pasaporte);

    return pasaporte;
}

function ordenarArreglo(arreglo) {
    // Ordenar el arreglo por numero de documento usando funcion de comparacion
    arreglo.sort(function (a, b) {
        return a.numeroDocumento - b.numeroDocumento;
    });

    // Constancia de informacion
    console.log("Arreglo ordenado por numero de documento: ")
    console.log(arreglo);

    return arreglo;
}

function filtrarCorreo(arreglo) {
    let correo = arreglo.filter(function (registro) {
        return registro.correo.includes("email.com");
    });

    console.log("Usuarios con dominio 'email.com': ")
    console.log(correo);

    return correo;
}

export { registros, agregarRegistro, obtenerRegPasaporte, ordenarArreglo, filtrarCorreo };
module.exports = { registros, agregarRegistro, obtenerRegPasaporte, ordenarArreglo, filtrarCorreo };
// module.exports.registros = registros;
// module.exports.agregarRegistro = agregarRegistro;
// module.exports.obtenerRegPasaporte = obtenerRegPasaporte;
// module.exports.ordenarArreglo = ordenarArreglo;
// module.exports.filtrarCorreo = filtrarCorreo;
