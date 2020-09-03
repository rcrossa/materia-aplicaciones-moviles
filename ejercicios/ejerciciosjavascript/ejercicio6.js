const notas = [{id:1,nota:8,nota:6,nota:2,nota:4},{id:2,nota:7,nota:9,nota:4,nota:5},{id:3,nota:6,nota:2,nota:4,nota:2},{id:4,nota:9,nota:6,nota:7,nota:10}];

  const quienesAprobaron = notas.filter(Element => Element.nota > 4 );

  console.log(quienesAprobaron);
  //   let nota =  [8,6,2,4,];
// console.log(notas);
// var aprobaron = notas.map(function(element){
//     if(element > 4){
//     return console.log(element);
// }
// })
