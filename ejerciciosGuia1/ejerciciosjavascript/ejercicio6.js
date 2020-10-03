const quienesAprobaron = [[8,6,2,4],[7,9,4,5],[6,2,4,2],[9,6,7,10]];

var condicionDeaprobacion = (notas) => notas >= 4 ;


for (const x of quienesAprobaron) {
}

var aprobaron;
function a (quienesAprobaron) {
  var alumnosAprobados;
  alumnosAprobados = quienesAprobaron.filter((alumno)=> alumno.every(condicionDeaprobacion));
  return alumnosAprobados;
}

aprobaron = a(quienesAprobaron);


for (const iterator of aprobaron) {
  
  console.log(iterator);
}
