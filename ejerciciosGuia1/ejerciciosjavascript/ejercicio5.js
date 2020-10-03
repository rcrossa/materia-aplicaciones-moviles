let notas = [8,6,6,5];
// notas.forEach(Element => Element > 4({ 
//     notas = notas.map
// }));
// var aprobaron = notas.every(function(element){
    
//     return console.log(element > 4);
// })


const aprobaron = (Element) => Element > 4;
console.log(notas.every(aprobaron));

