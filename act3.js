'use strict';

let datos = []
let datos2 
let numero 

do {
    numero = Number.parseInt(prompt("Díme un número"))
    console.log(isNaN(numero))
    if(!isNaN(numero)) 
    {
        
        datos2 = datos.sort((a, b) => a - b).reverse().filter(num=>num%3 == 0);
        datos.unshift(numero)
   
    }

} while (!isNaN(numero))

console.log(datos)
console.log(datos2)