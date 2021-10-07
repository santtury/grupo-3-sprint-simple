// var validacion = require("./form.js"); //Node.js

import * as datos from "./form.js";
import { checkNumDocumento, checkCorreo, checkContrasena } from "./form.js"; //ES6
import { registros, agregarRegistro } from "./registro"; //ES6


var tipo = document.getElementById("tipo-documento").value;
var documento = document.getElementById("numero-documento").value;
var respuesta = checkNumDocumento(documento, tipo);
console.log(respuesta);

var correo = document.getElementById("correo").value;
var correoValido = checkCorreo(correo);
console.log(correoValido);

var contrasena = document.getElementById("contrasena").value;
var contrasenaValida = checkContrasena(contrasena);
console.log(contrasenaValida);

console.log(registros);