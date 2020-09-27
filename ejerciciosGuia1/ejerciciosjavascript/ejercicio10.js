const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
const numeroBuscado=8;

var contiene = numeros.find(function(element){
    if (numeroBuscado==element) {
        console.log(true);
    }
})