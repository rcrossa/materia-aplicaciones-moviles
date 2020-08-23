let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
let a =0;
//  let par = numeros.map(function(num){
//      if(num%2==0){
//          a++;   
//      console.log(num %2==0);
//     }
//  })
let par = numeros.map( num =>{if(num%2==0){ a++;console.log(num %2==0);} });
console.log("Hay " + a +" numeros pares.");
