// 1. Pedir dos números y decir si son múltiplos o no.

// let num1 = parseInt(prompt("Introduce un número"))
// let num2 = parseInt(prompt("Introduce otro número"))

// if(num1 % num2 === 0 || num2 % num1 === 0){
//     console.log("Los números son múltiplos entre sí")
// }else{
//     console.log("Los números no son múltiplos entre sí")
// }

//////////////////////////////////////////////////////////////////////

// 2. Pedir dos números y decir cual es el mayor

// let num1 = parseInt(prompt("Introduce un número"))
// let num2 = parseInt(prompt("Introduce otro número"))

// num1 < num2 ? console.log(`el ${num2} es mayor`) : console.log (`El ${num1} es mayor`) ;

//////////////////////////////////////////////////////////////////////

// 3. Pedir un número y decir si es un número negativo, si es positivo o cero.

// let num = parseInt(prompt("Introduce un número"))


// if(num < 0){
//     console.log(`El ${num} es negativo`)
// }else if (num === 0){
//     console.log(`El ${num} es 0`)
// }else if (num > 0){
//     console.log(`El ${num} es positivo`)
// }


//////////////////////////////////////////////////////////////////////

// 4. Pedir un string y determinar si tiene cinco caracteres o más

// let word = prompt("Introduce una palabra")

// console.log(`La palabra ${word} tiene ${word.length} letras`)


//////////////////////////////////////////////////////////////////////


// 5. Pedir tres números enteros con un valor del 1 al 10, sacar el promedio de los tres números y
// determinar si el promedio es mayor que cinco.

// let min = 1
// let max = 10

// let num1 = parseInt(prompt("Introduce un número entre el 1 y el 10, ambos incluidos"))
// let num2 = parseInt(prompt("Introduce un número entre el 1 y el 10, ambos incluidos"))
// let num3 = parseInt(prompt("Introduce un número entre el 1 y el 10, ambos incluidos"))

// let promedio = (num1 + num2 + num3) / 3

// promedio >= 5 ? console.log(`${promedio} es mayor que 5`) : console.log(`${promedio} es menor que 5`) ;


//////////////////////////////////////////////////////////////////////

// 6. Pedir una cadena de texto y comprobar que todas sus letras estén en minúsculas.

// let string = prompt("Introduce una frase")

// console.log(string)
// console.log(string.toLowerCase())

// string === string.toLowerCase() ? console.log ("Todas las letras están en minúsculas") : console.log("Todas las letras NO están en minúsculas");


//////////////////////////////////////////////////////////////////////


// 7. Crear un número aleatorio entre el 1 y 20 y comprobar si es par o impar. Mostrar además el
// número.

// let min = 1
// let max = 20

// let random = Math.round(Math.random() * (max-min) + min);

// random % 2 === 0 ? console.log(`${random}, y es un número par`): console.log(`${random}, y es un número impar`);


//////////////////////////////////////////////////////////////////////


// 8. Crea un programa que lea tres notas de un alumno, calcule la media e indique si ha aprobado
// o no.

// let mates1 = 7;
// let mates2 = 3;
// let mates3 = 4;

// let mediaMates = ((mates1 + mates2 + mates3)/3);

// mediaMates <= 5 ? console.log(`El alumno ha aprobado con una media de ${mediaMates}`) : console.log(`El alumno ha suspendido con una media de ${mediaMates}`);

//////////////////////////////////////////////////////////////////////

// 9. Crea un programa para una tienda de coches: si el coche a la venta es un Ford Fiesta, el
// descuento es de un 5 %. Si el coche a la venta es un Ford Focus, el descuento es del 10 %. El
// // usuario introduce marca y modelo y el programa saca el descuento correspondiente por
// // pantalla.


// let buscador = prompt("¿Que coche te gustaría comprobar si tiene descuento?")

// switch(buscador){
//     case `ford fiesta`:
//     case `fordfiesta`:
//     case `Ford Fiesta`:
//         console.log(`El ${buscador} tiene un 5% de descuento`)
//     break;
//     case `ford focus`:
//     case `fordfocus`:
//     case `Ford Focus`:
//         console.log(`El ${buscador} tiene un 10% de descuento`)
//     break;
//     default:
//         console.log(`El ${buscador} no tiene descuento`)
// }

//////////////////////////////////////////////////////////////////////


// 10. Crea un programa en el que el usuario introduzca el número del mes (del 1 al 12) y el código
// responda cuántos días tiene ese mes

// let mes = (prompt("Introduce un número del 1 al 12"))
// console.log(mes);

// switch(mes){
//     case `1`:
//     case `3`:
//     case `5`:
//     case `7`:
//     case `8`:
//     case `10`:
//     case `12`:
//         console.log(`El mes número ${mes} tiene 31 días`)
//     break;

//     case `4`:
//     case `6`:
//     case `9`:
//     case `11`:
//         console.log(`El mes número ${mes} tiene 30 días`)
//     break;
//     case `2`:
//         console.log(`El mes número ${mes} tiene 28 días`)
//     break;
//     default:
//         console.log(`El mes número ${mes} no existe`)
// };

//////////////////////////////////////////////////////////////////////

// 11. Crea un script que pida al usuario el diámetro de una rueda y su grosor (en metros) y realice las
// siguientes operaciones:
// a) Si el diámetro es superior a 1.4 metros debe mostrarse el mensaje “La rueda es para un vehículo
// grande”. Si es menor o igual a 1.4 metros pero mayor que 0.8 debe mostrarse el mensaje “La rueda
// es para un vehículo mediano”. Si no se cumplen ninguna de las condiciones anteriores debe
// mostrarse por pantalla el mensaje “La rueda es para un vehículo pequeño”.
// b) Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, o si el diámetro es menor o igual a 1.4
// pero mayor que 0.8, con un grosor inferior a 0.25, deberá mostrarse el mensaje “El grosor para esta
// rueda es inferior al recomendado”


// let diametro = parseFloat(prompt("Introduce diamétro de la rueda"))
// let grosor = parseFloat(prompt("Introduce grosor de la rueda"))

// if(diametro > 1.4){
//     console.log("La rueda es para un vehículo grande")
// }else if(diametro > 0.8 && diametro <= 1.4){
//     console.log("La rueda es para un vehículo mediano")
// }else{
//     "La rueda es para un vehículo pequeño"
// };

// if(diametro > 1.4 && grosor < 0.4){
//     console.log("El grosor de la rueda es inferior al recomendado")
// }else if(diametro > 0.8 && diametro <= 1.4 && grosor < 0.25){
//     console.log("El grosor de la rueda es inferior al recomendado")
// }


//////////////////////////////////////////////////////////////////////


// 12. Crea un programa en que se definan variables para el precio por kilómetro, el vehículo y los
// kilómetros recorridos. El vehículo y los kilómetros recorridos deben ser proporcionados por el usuario. A
// continuación, el programa debe realizar los cálculos para obtener el total a pagar, teniendo en cuenta las
// siguientes consideraciones: si el vehículo es “coche”, el precio por kilómetro ha de ser 0.10, si es “moto”
// ha de ser 0.20 y si es “autobús”, 0.5

// let km = parseFloat(prompt("Distancia a recorrer"))
// let vehiculo = prompt("Tipo de vehículo (moto, turismo, autobús)").toLowerCase()

// const gasMoto = 0.20
// const gasTurismo = 0.10
// const gasAutobus = 0.20

// let gasto = 0

// switch(vehiculo){
//     case `moto`:
//         gasto = gasMoto * km
//         console.log(gasto + "€")
//     break;

//     case`turismo`:
//         gasto = gasTurismo * km
//         console.log(gasto, "€")
//     break;

//     case`autobus`:
//     case `autobús`:
//         gasto = gasTurismo * km
//         console.log(gasto, "€")
//     break;
//     default:
//         console.log("No tenemos datos para el vehíchulo introducido")
// };