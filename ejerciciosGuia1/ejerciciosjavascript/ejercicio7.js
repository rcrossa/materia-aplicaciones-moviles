var numeros = [2,-3,9,-5,-6];
// const negativos = numeros.find(array.forEach(element => {
//     (Element => Element < 0);
// }));
var negativos = numeros.some((numero)=> numero < 0);

// console.log(numeros);
console.log(negativos);