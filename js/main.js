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

