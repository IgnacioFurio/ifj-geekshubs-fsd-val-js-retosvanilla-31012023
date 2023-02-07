/* 1 --> Calculo de areas; círculo, triángulo o cuadrado*/

// let figure = parseInt(prompt("Selecciona la figura a la cúal desea calcular el área introduzciendo el número correspondiente; 1 para círculo, 2 para triángulo o 3 para cuadrado"));

// console.log(figure)

// if (figure < 1 || figure > 3 || isNaN(figure)) {
//     console.log("Este número no esta representando ninguna figura.")
// }else if (figure === 1) {
//     let radio = parseInt(prompt("Introduce el valor del radio."));
//     console.log(Math.PI*(radio**2) + " es el área del círculo.");
// }else if (figure === 2) {
//     let base = parseInt(prompt("Introduce el valor de la base."));
//     let altura = parseInt(prompt("Introduce el valor de la altura."));
//     console.log((base*altura)/2 + " es el área del triángulo.");
// }else if (figure === 3) {
//     let lado = parseInt(prompt("Introduce el valor del lado."));
//     console.log(lado**2 + " es el área del cuadrado.")
// }


// -------------------------------------------------------------------------------------------

// // 2 --> Crea una aplicación que nos genere una cantidad de números enteros aleatorios
// pasados por el usuario (prompt). Crea un método donde pasamos como parámetros
// entre que números queremos que los genere, podemos pedirlas al usuario antes de
// generar los números. Este método devolverá un número entero aleatorio. Muestra
// estos números por consola.



// let num1 = parseInt(prompt("Introduce el número más pequeño"))
// let num2 = parseInt(prompt("Introduce el número más grande"))


// const numAleatorioEntre = (max, min) => {

//     return Math.round(Math.random() * (max - min) + min);

// }
// 
// console.log(numAleatorioEntre(num1, num2))


//-----------------------------------------------------------------------------------------------

// 3 --> Crea una aplicación que nos pida un número por prompt y con un método se lo
// pasamos por parámetro para que nos indique si es o no un número primo, debe
// devolver true si es primo sino false. Un número primo es aquel solo puede dividirse
// entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin
// embargo, 17 si es primo

// let cantidad = parseInt(prompt("Introduce el número que quieras saber si es primo"))


// const NumPrimo = (num) => {

//     for(let i = 2; i < num; i++){
//         if(num % i === 0){
//             return false;
//         }return true
//     }
// }
// let primo = NumPrimo(cantidad)

// console.log(primo)


//-----------------------------------------------------------------------------------------------


// 4 --> Crea una aplicación que nos calcule el factorial de un número pedido por prompt, lo
// realizara mediante un método al que le pasamos el número como parámetro. Para
// calcular el factorial, se multiplica los números anteriores hasta llegar a uno. Por
// ejemplo, si introducimos un 5, realizara esta operación 5*4*3*2*1=120

// let fact = parseInt(prompt("Introduce un número a factorizar"))

// const Factorial = (num)=>{

//     let total = 1

//     for(let i = 1; i <= num ; i++){
//         total *=i
//     };
//     return total
// };

// let resultado = Factorial(fact)
// console.log(resultado)



//-----------------------------------------------------------------------------------------------

// // 5 -- >Crea una aplicación que nos convierta un número en base decimal a binario. Esto lo
// realizará un método al que le pasaremos el número como parámetro, devolverá un
// String con el numero convertido a binario. Para convertir un número decimal a
// binario, debemos dividir entre 2 el número y el resultado de esa división se divide
// entre 2 de nuevo hasta que no se pueda dividir más, el resto que obtengamos de
// cada división formara el número binario, de abajo a arriba.

//     let numDecimal = parseInt(prompt("Introduce un número en base decimal"))


// const Binary = (num) => {


//     let bin = (num % 2).toString();

//     while(num > 1){
//         num = parseInt( num / 2);

//         bin = (num % 2) + (bin)
        
//     }
//     return bin;
// };

// let resultado = Binary(numDecimal)
// console.log(resultado)



