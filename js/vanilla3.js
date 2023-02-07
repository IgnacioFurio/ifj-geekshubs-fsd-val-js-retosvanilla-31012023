// 1. Pedir dos números y decir si son múltiplos o no.

let num1 = parseInt(prompt("Introduce un número"))
let num2 = parseInt(prompt("Introduce otro número"))

if(num1 % num2 === 0 || num2 % num1 === 0){
    console.log("Los números son múltiplos entre sí")
}else{
    console.log("Los números no son múltiplos entre sí")
}