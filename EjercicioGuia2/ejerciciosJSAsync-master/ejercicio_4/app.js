
const obtenerPokemon = require("./library");
nombrePokemon="kakuna";
function obtenerChiste(nombre) {
    return console.log(nombre);
}


// Usar la funcion obtenerChiste(nombrePokemon) la cual recibe como string un nombre de pokemon y devuelve la promesa de traer el objeto pokemon extraido
obtenerPokemon(nombrePokemon,obtenerChiste)
.then(function(nombrePokemon,obtenerChiste){
    return console.log(nombrePokemon.forms,obtenerChiste);
}).catch(function(err){
    console.error(err);
});
