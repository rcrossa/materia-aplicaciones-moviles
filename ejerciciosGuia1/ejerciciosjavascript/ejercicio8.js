var cumple = [7,9,25,42];
var elementosCumplen=0;
// let par = numeros.map( num =>{if(num%2==0){ a++;console.log(num %2==0);} });
var quienCumple = cumple.filter(Element =>{if(Element%2==0){ elementosCumplen++;}} );
console.log("Los cumpleaños con numeros pares son: " + elementosCumplen);