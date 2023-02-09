// 1. Escribir un script que pida un valor entero y muestre en pantalla una lista de números desde el 0 al
// valor tecleado. Los números se separarán por comas.

// let cantidad = parseInt(prompt("¿Hasta que número quieres contar?"))

// let resultado = ""

// for(let i = 0; i <= cantidad; i++){

//     let string = i.toString()

//     resultado = string + "," + " " + resultado

// };

//     console.log(resultado);

// ///////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Hacer un programa que cuente de N en N hasta un número M proporcionado por el usuario. El usuario
// también ha de proporcionar N

// let M = parseInt(prompt("¿Hasta que número quieres contar?"));
// let N = parseInt(prompt("¿De cuanto en cuanto quieres contar?"));

// let contador = 0
// let resultado = ""
// while(contador <= M){

//     contador += N

//     resultado = resultado + "," + " " + contador

// };

// console.log(resultado);



// ///////////////////////////////////////////////////////////////////////////////////////////////////


// 3. Genera una lista con todos los números pares positivos por debajo del número tecleado por el
// usuario.

// let num = parseInt(prompt("Introduce un número"))
// let resultado = `Los números pares hasta el ${num} son el`;
// for(let i = 1; i <= num; i++){
    
//     if(i % 2 === 0){
//         resultado = resultado + "," + " " + i
//     };

// };
// console.log(resultado);


// ///////////////////////////////////////////////////////////////////////////////////////////////////

// 4. Escribe la tabla de multiplicar de un número introducido por el usuario

// let num = parseInt(prompt("¿De que número quieres saber su tabla de multiplicar?"))
// let resultado = 1

// for(let i = 1; i <= 10; i++){

//     resultado =  num * i
//     console.log(`${num} x ${i} es igual a ${resultado}`)

// };


// ///////////////////////////////////////////////////////////////////////////////////////////////////

// 5. Formar un triángulo de este estilo
// *
// **
// ***
// ****
// Con la cantidad de líneas que indique el usuario


// let num = parseInt(prompt("¿Cuantas lineas quieres que se rellenen con *?"))
// let asterisco = "*"

// for(let i = 1; i <= num; i++){

//     console.log(asterisco)
//     asterisco = "*" + asterisco
    
// };



// ///////////////////////////////////////////////////////////////////////////////////////////////////


// 6. Calcula la suma de todos los números enteros positivos entre 0 y el número tecleado por el usuario

// let num = parseInt(prompt("Introduce un número, luego el programa calculara la suma de todos los números enteros positivos hasta el número indicado."))
// let suma = 0

// for(let i = 1; i <= num; i++){

//     if(i % 2 === 0){
//         suma += i
//     };
    
// };

// console.log(suma)


// ///////////////////////////////////////////////////////////////////////////////////////////////////

// 7. Pide al usuario que teclee 4 números (uno cada vez). Con esos números el programa deberá calcular
// la media aritmética (la suma de todos ellos dividido por la cantidad de números)

// let suma = 0
// let media = 0

// for(let i = 1; i <= 4; i++){

//     let num = parseInt(prompt("Introduce un número entero"))

//     suma += num

    
//     media = suma / i

//     console.log(`La media aritmetica de los números introducidos es ${media}`)
// };



// ///////////////////////////////////////////////////////////////////////////////////////////////////


// 8. Saca por consola los números primos del 0 al número que introduzca un usuario por prompt

// const Primo = (numero) => {

//     for(let i = 2; i < numero; i++){

//         if(numero % i === 0){
//             return false;
//         };

//     };

//     if(numero > 1){
//         return numero;
//     };
// };


// let num = parseInt(prompt("Introduce un número, luego el programa extraerá todos los números primos hasta ese número"))

// let array = []

// for(let i = 2; i < num ; i++){

//     if(Primo(i)){
//         array.push(i);
//     };

// };

// console.log(array)



// ///////////////////////////////////////////////////////////////////////////////////////////////////

// 9. Dado un número entero, muestra una cuenta atrás desde el número tecleado hasta el 0. Modifica
// el programa para que el usuario introduzca dos números y se efectúe una cuenta atrás desde el
// primer número hasta el segundo. Modifícalo de nuevo para que el programa determine qué número es
// el mayor y cuente desde el mayor hasta el menor.

// A
// let num1 = parseInt(prompt("Cuanta atrás desde el número...(introduce el número)"))
// let cuenta = []

// for(let i = 0; i <= num1 ; i++){
//     cuenta.push(i)
// };

// console.log(`${cuenta.reverse()}`)

// B

// let num1 = parseInt(prompt("Cuanta atrás desde el número...(introduce el número)"))
// let num2 = parseInt(prompt("Hasta el número...(introduce el número)"))

// let cuenta = []

// for(let i = num2; i <= num1; i++){

//     cuenta.push(i)

// };

// console.log(`${cuenta.reverse()}`)

// C 

// let num1 = parseInt(prompt("Introduce un número"))
// let num2 = parseInt(prompt("Introduce otro número"))
// let cuenta = []

// let mayor = 0;
// let menor = 0;

// if(num1 < num2){
//     menor = num1
//     mayor = num2
// }else{
//     menor = num2
//     mayor = num1
// };

// for(let i = menor; i <= mayor ; i++){
//     cuenta.push(i)
// };

// console.log(`${cuenta.reverse()}`);

// ///////////////////////////////////////////////////////////////////////////////////////////////////


// 10. Pide al usuario cinco números, almacénalos en un array y muestra por consola el resultado de
// cada uno de ellos multiplicado por 3. Muestra también un array que contenga todos los resultados

// let almacen = []
// let almacenTriples = []

// for(let i = 1 ; i <= 5; i ++){

//     let num = parseInt(prompt("Introduce un número"))

//     almacen.push(num)


//     let numTriples = (num * 3);

//     almacenTriples.push(numTriples)

// };

// console.log(almacen)
// console.log(almacenTriples)