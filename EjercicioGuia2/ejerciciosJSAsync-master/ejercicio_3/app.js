
const obtenerPokemon = require("./library");

// Codigo funcion callback

nombrePokemon = "kakuna";
function detalle1(detalle){
    // console.log(nombre);
    return console.log(detalle);
}

// nombrePokemon= null;
// Fin codigo

// Usar la funcion obtenerPokemon(pokemon,funcionCallback) en donde:
// - nombrePokemon es un string con el nombre del pokemon
// - funcionCallback es una función que recibe el objeto con los datos del pokemon extraido

obtenerPokemon(nombrePokemon);

