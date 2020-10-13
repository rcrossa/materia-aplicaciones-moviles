
const obtenerChiste = require("./library");

// Usar la funcion obtenerChiste() la cual devuelve la promesa de traer el objeto chiste extraido
obtenerChiste();

obtenerChiste().then(function(primerElemento){
    return console.log(primerElemento[0].type + " - "
     + primerElemento[0].setup + " - " + primerElemento[0].punchline);
}).catch(function(err){
    console.error("Hay un error" + err);
});
