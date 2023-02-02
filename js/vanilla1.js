/* 1 --> Declara 2 variables numéricas, e indica cúal es el mayor de los dos.
Si son iguales indicarlo tambíen. Ves cambiando los valores para comprobar
que funciona. */

// let numUno = parseInt(prompt("Introduce un número"))
// let numDos = parseInt(prompt("Introduce otro número"))

// if (numUno === numDos) {
//     console.log("Los números son iguales");
// }else if (numUno < numDos) {
//     console.log(numDos + " es mayor que " + numUno)
// }else {
//     console.log(numUno + " es mayor que " + numDos )
// }


// ---------------------------------------------------------------------


/* 2 y 3 --> Declara un string que contenga tu nombre, después muestra un mensaje de 
bienvenida por consola. Por ejemplo: si introduzco "Fernando", me aparezca
"Bienvenido Fernando". */

// let nombre = prompt("¿Cómo te llamas?")

// console.log("Te damos la bienvenida, " + nombre)


// ---------------------------------------------------------------------


/* 4 --> HAz una aplicación que calcule el área de un círculo. El radio se pedirá
por teclado. Usa la constante PI*/


// let radio = prompt("Introduce el radio en valor numérico")

// console.log(Math.PI*(radio**2));

/* 5 --> Lee un número por teclado e indica si es divisible entre 2, Sino lo es también debemos indicarlo.*/

// let numero = parseInt(prompt("Introduce un número"))

// if (numero%2 === 0) {
//     console.log(numero + " es par")
// } else {
//     console.log(numero + " es impar")
// }


// ---------------------------------------------------------------------


/* 6 --> Lee un número por teclado que pida el rpecio de un producto y calcule el precio final con IVA. El Iva será 
una constante que sera del 21%*/

// const IVA = 21/100;
// let precio = parseInt(prompt("Introduce el precio del producto que desea comprar."))

// console.log((precio*IVA)+precio + " es el precio del producto con IVA")


// ---------------------------------------------------------------------

// 7 --> Muestra los números del 1 al 100 (ambos incluidos). Usa un bucle while.

// let control = 1

// while (control <= 100) {

//     console.log(control)
//     control++
// };


// ---------------------------------------------------------------------

// 8 --> Haz el mismo ejercicio anterior con un bucle for.

// for (let control = 1 ; control <= 100 ; control++){
//     console.log(control)
// }


// ---------------------------------------------------------------------

// 9 --> Muestra los números del 1 al 100 (ambos incluidos) divisibles entre 2 y 3. Utiliza
// el bucle que desees.

// for (let control = 1 ; control <= 100 ; control++){

//     if(control % 2 === 0 && control % 3 === 0){
//         console.log(`${control} es divisible entre 2 y 3`)
//     }else{

//     }
// }



// ---------------------------------------------------------------------


// 10 --> Realiza una aplicación que nos pida un número de ventas a introducir, después
// nos pedirá tantas ventas por teclado como número de ventas se hayan indicado.
// Al final mostrara la suma de todas las ventas. Piensa que es lo que se repite y lo
// que no.


// let ventas = parseInt(prompt("Introduce cuantas ventas has realizado"))

// let sVentas = 0

// for(let i = 1 ; i <= ventas ; i++){
//     let num = parseInt(prompt(`Venta numero ${i}`))
//     sVentas += num
// };

// console.log(sVentas)


// ---------------------------------------------------------------------


// 11 --> Crea una aplicación que nos pida un día a la semana y que nos diga si es laboral o no. 

// let dia = prompt("Introduce un día de la semana").toLowerCase();

// switch (dia){
//     case "lunes" :
//     case "martes" :
//     case "miercoles" :
//     case "jueves" :
//     case "viernes" :

//         console.log("Es día laborable");
//     break;

//     case "sabado":
//     case "domingo":
//         console.log("No es laborable");

//     break;
// };


// // ---------------------------------------------------------------------

// 12 --> Escribe una aplicación con un String que contenga una contraseña cualquiera.
// Después se te pedirá que introduzcas la contraseña, con 3 intentos. Cuando
// aciertes ya no pedirá más la contraseña y mostrará un mensaje diciendo
// “Enhorabuena”. Piensa bien en la condición de salida (3 intentos y si acierta sale,
// aunque le queden intentos)


// const password = "cu4lqui3r4";

// let intentos = 2

// while (intentos >= 0){

//     let intPass = prompt("Introduce la contraseña.")

//     if(intPass === password){
//         console.log("Contraseña correcta")
//         intentos = 0
//     }else{
//         intentos > 0 ? (
//             console.log(`Contraseña incorrecta, quedan ${intentos} intentos`)
//             ) : (console.log(`Contraseña incorrecta, inténtelo de nuevo más tarde`)
//             ) ;
//     }; 

//     intentos--;
// }


// // ---------------------------------------------------------------------


// 13 --> Crea una aplicación llamada CalculadoraInversa, nos pedirá 2 operandos (int) y
// un signo aritmético (String), según este último se realizará la operación
// correspondiente. Al final mostrara el resultado en un cuadro de dialogo.
// Los signos aritméticos disponibles son:
// +: suma los dos operandos.
// -: resta los operandos.
// *: multiplica los operandos.
// /: divide los operandos, este debe dar un resultado con decimales (double)
// ^: 1º operando como base y 2º como exponente.
// %: módulo, resto de la división entre operando1 y operando2.


// let num1 = parseInt(prompt("Introduce un número"))
// let num2 = parseInt(prompt("Introduce otro número"))

// let operacion = prompt("Introduce signo aritmético; +: suma los dos operandos. -: resta los operandos. *: multiplica los operandos. /: divide los operandos. ^: 1º operando como base y 2º como exponente. %: módulo, resto de la división entre operando1 y operando2").toLowerCase();

// switch(operacion){
//     case "+":
//     case "sumar":
//         console.log(num1 + num2)
//     break;

//     case "-":
//     case "restar":
//         console.log(num1 - num2)
//     break;

//     case "*":
//     case "multiplicar":
//         console.log(num1 * num2)
//     break;

//     case "/":
//     case "dividir":
//         console.log((Math.round(num1 / num2)))
//     break;

//     case "^":
//     case "elevar a":
//         console.log(Math.pow(num1, num2))
//     break;

//     case "%":
//     case "resto de su división":
//         console.log(num1 % num2)
//     break;
// }