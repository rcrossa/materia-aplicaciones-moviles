
const obtenerPersonaFake = require("./library");

// Usar la funcion obtenerPersonaFake() la cual devuelve la promesa de traer el objeto persona extraido
// obtenerPersonaFake().then(x => console.log(x));

obtenerPersonaFake().then(function(detalle){
    dato1=detalle.results[0];
     console.log("\nGenero: " + dato1.gender);
     console.log("\nNombre: " + dato1.name.first + "\nApellido: " + dato1.name.last);
      console.log("\nPais: " + dato1.location.country 
    + "\nEstado:" + dato1.location.state 
    + "\nCiudad: " + dato1.location.city
    +"\nCalle: " + dato1.location.street
    +"\nNro: " + dato1.location.street.number
    +"\nCódigo Postal: " + dato1.location.postcode);
    console.log("\nEmail: "+ dato1.email);
    console.log("\nUsuario: " + dato1.login.username + "\nClave: " + dato1.login.password);
});

   