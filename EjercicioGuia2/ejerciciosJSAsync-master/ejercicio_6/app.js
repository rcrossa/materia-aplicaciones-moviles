
const obtenerPersonaFake = require("./library");

// Usar la funcion obtenerPersonaFake() la cual devuelve la promesa de traer el objeto persona extraido
// obtenerPersonaFake().then(x => console.log(x));

obtenerPersonaFake().then(function(detalle){
    dato1=detalle.results[0];
    return console.log(dato1.gender);
}).then(function(datos1){
    return console.log(dato1.name);
}).catch(function(err){
    return console.log(err);
});