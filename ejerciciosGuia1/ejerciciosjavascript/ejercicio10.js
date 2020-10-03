const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
const numeroBuscado=8;
function contiene(numeros,numeroBuscado) {

    var numeroEncontrado = numeros.find((numero)=> numero==numeroBuscado);
    if (numeroEncontrado != numeroBuscado) {
        return false;
    }
    return numeroEncontrado;
};
console.log(contiene(numeros,numeroBuscado));