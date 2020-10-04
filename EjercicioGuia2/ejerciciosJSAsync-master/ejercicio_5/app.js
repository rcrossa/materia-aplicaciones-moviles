
const obtenerPersonaFake = require("./library");

// Codigo funcion callback
function obtenerDatos(personaje) {
    return console.log(personaje);
}


// Fin codigo

// Usar la funcion obtenerPersonaFake(funcionCallback) en donde funcionCallback es una función que recibe el objeto persona extraido
obtenerPersonaFake(obtenerDatos);
