const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
const numeros1=[]

const rechazar = numeros.filter((num) => {
    if (num%2==0) {
        numeros1.push(num);
    }
    
})
console.log(numeros1);