
const obtenerPokemon = require("./library");
nombrePokemon="kakuna";
function obtenerChiste(nombre) {
    return console.log(nombre);
}
// obtenerChiste().then(function(primerElemento) {
//     return console.log(primerElemento);
// }).then(function(segundoElemento) {
//     return console.log(segundoElemento);
// }).then(function(tercerElemento){
//     return console.log(tercerElemento);
// }).catch(function(err) {
//    console.error(); 
// });

// obtenerChiste().then(function(primerElemento){
//     return console.log(primerElemento[0].id);
// }).then(function(segundoElemento){
//     return segundoElemento[0].setup;
// }).then(function(tercerElemento){
//     return tercerElemento[0].punchline;
// }).catch(function(err){
//     console.error();
// });
// Usar la funcion obtenerChiste(nombrePokemon) la cual recibe como string un nombre de pokemon y devuelve la promesa de traer el objeto pokemon extraido
obtenerPokemon(nombrePokemon,obtenerChiste)
.then(function(nombrePokemon,obtenerChiste){
    return console.log(nombrePokemon,obtenerChiste);
}).catch(function(err){
    console.error();
});
