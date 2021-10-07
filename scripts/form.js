// Sprint 02
function checkNumDocumento(valor, tipo) {
    const ptr = new RegExp('[^0-9]+');
    const numeros = /[0-9]/g;
    const alfaNumerico = /[a-zA-ZÑñ0-9]/g;
    if (tipo === "TI" || tipo === "CC" || tipo === "RC") {
        if (valor.length >= 8 && valor.length <= 10) {
            if (!ptr.test(valor)) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}

function checkCorreo(valor) {
    const correo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (correo.test(valor)) {
        return true;
    } else {
        return false;
    }
}

function checkContrasena(valor) {
    const minusculas = /[a-zñ]/g;
    const mayusculas = /[A-ZÑ]/g;
    const numeros = /[0-9]/g;
    // var caracterEspecial = /[^a-zA-Z\d]/g;

    if (minusculas.test(valor) && mayusculas.test(valor) && numeros.test(valor) && (valor.length >= 8)) {
        return true;
    } else {
        return false;
    }
}

export { checkNumDocumento, checkCorreo, checkContrasena };
module.exports = { checkNumDocumento, checkCorreo, checkContrasena };
// module.exports.checkNumDocumento = checkNumDocumento;
// module.exports.checkCorreo = checkCorreo;
// module.exports.checkContrasena = checkContrasena;