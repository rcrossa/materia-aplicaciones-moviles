
const obtenerPersonaFake = require("./library");

// Codigo funcion callback
function obtenerDatos(personaje) {
    dato1 = personaje.results[0];
    console.log("\nGenero: " + dato1.gender);
    console.log("\nTItulo: " + dato1.name.title + "\nNombre: " + dato1.name.first + "\nApellido: " + dato1.name.last);
    console.log("\nPais: " + dato1.location.country 
    + "\nEstado:" + dato1.location.state 
    + "\nCiudad: " + dato1.location.city
    +"\nCalle: " + dato1.location.street
    +"\nNro: " + dato1.location.street.number
    +"\nCódigo Postal: " + dato1.location.postcode);
    console.log("\nEmail: "+ dato1.email);
    console.log("\nUsuario: " + dato1.login.username + "\nClave: " + dato1.login.password);
   
}

// - Nombre
// - Genero
// - Pais, Estado, Ciudad, Calle, Nro, Código Postal
// - Email
// - Nombre de usuario
// - Password

// Fin codigo

// Usar la funcion obtenerPersonaFake(funcionCallback) en donde funcionCallback es una función que recibe el objeto persona extraido
obtenerPersonaFake(obtenerDatos);
