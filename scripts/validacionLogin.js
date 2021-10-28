const login = require("./login.js");

let usuario = {
    tipoDocumento: "CC",
    numeroDocumento: "1001001001",
    correo: "hola@email.com",
    contrasena: "adios0Ñja",
};

let usuario2 = {
    tipoDocumento: "TI",
    numeroDocumento: "1002002002",
    correo: "hola@gmail.com",
    contrasena: "adios0Ñha",
};

login.registros = [usuario, usuario2];
login.login();

// ES6
// import { registros, login } from "./login.js";
// registros = [usuario, usuario2];
// console.log(registros);
// login();
// console.log(login());
