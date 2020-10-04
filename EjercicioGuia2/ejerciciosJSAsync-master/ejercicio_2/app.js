
const obtenerChiste = require("./library");

// Usar la funcion obtenerChiste() la cual devuelve la promesa de traer el objeto chiste extraido
obtenerChiste();

obtenerChiste().then(function(primerElemento){
    return console.log(primerElemento[0].id);
}).then(function(segundoElemento){
    return segundoElemento[0].setup;
}).then(function(tercerElemento){
    return tercerElemento[0].punchline;
}).catch(function(err){
    console.error();
});
// console.log("--------------------------------------------------");

// obtenerChiste()
// .then((primerElemento)=>console.log(primerElemento[0].id))
// .then((segundoElemento)=>console.log(segundoElemento[0].type))
// .then((tercerElemento)=>console.log(tercerElemento[0].setup))
// .catch((e)=> console.log("Hay un problema"+ e));