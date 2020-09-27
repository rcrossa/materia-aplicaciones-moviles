
const obtenerChiste = require("./library");

// Codigo funcion callback
function test(obtenerChiste) {
  console.log("prueba");    
}


// Fin codigo

// Usar la funcion obtenerChiste(funcionCallback) en donde funcionCallback es una función que recibe el objeto chiste extraido
obtenerChiste(test);
