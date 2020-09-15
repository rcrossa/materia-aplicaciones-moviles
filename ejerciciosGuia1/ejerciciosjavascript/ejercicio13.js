class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

class Estudiante extends Persona{
     
  constructor(nombre,edad){
     super(nombre,edad);
  }
  estudiando(){
      return + "Estudiando con: "+ setprofesor();
  }
  setprofesor(profe){
      return + profe;
  }

  
}

var estudiantes = ["pepe", "juan", "carlos"];
class Profesor extends Persona {
  constructor(nombre,edad) {
   super(nombre,edad);
  }
  enseñando() {
    return  estudiante;
  }
  addEstudiante() {
    estudiante.push();
  }
}

var estudiante1 = new Estudiante("Alex",15);
console.log(estudiante1);


const profesor1 = new Profesor('Roberto',40);
estudiantes.push('ramon');
console.log(profesor1 + "\nEs profesor de: " + estudiantes);

// console.log(estudiantes);
