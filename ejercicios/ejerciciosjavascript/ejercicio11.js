// const nombre;
// const edad;

let Persona = class {
    constructor (nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
      get person() {
          return this.soyPersona();
      }
      soyPersona (){
          return this.nombre + ' ' + this.edad;
      }      
  }
  const persona1 = new Persona('Roberto',38);
  console.log(persona1.person);
//   const person1 = new Persona(1);
//   console.log(person1.presentarse); // 100
// var persona1 = Persona.nombre('Roberto');



// const test = new persona(roberto, 38);
// console.log(test);