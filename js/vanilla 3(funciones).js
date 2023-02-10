// 1. Crea una función que convierta grados celsius a grados fahrenheit.

// const Fahrenheit = (numero) => {

//     let temperatura = numero + 32;
//     return temperatura;
// };

// let resultado = Fahrenheit(20)

// console.log(resultado)

////////////////////////////////////////////////////

// 2. Crea una función que determine si un número es par o impar.

// const Paridad = (num) => {

//     if(num % 2 === 0){
//         return `El número ${num} es par`;
//     }else{
//         return `El número ${num} es impar`;
//     };
// };

// let resultado = Paridad(3)
// console.log(resultado)


////////////////////////////////////////////////////


// 3. Crea una función que determine si un número es primo o no

// const Primo = (num) => {

//     for(let i = 2; i < num ; i++){
//         if(num % i === 0){
//             return false;
//         }
//         };

//     if(num > 1){
//         return true; 
//     };
// };

// let numero = parseInt(prompt("Introduce número para comprobar si es primo"))

// let resultado = Primo(numero)

// resultado === true ? console.log(`El número ${numero} es primo`) : console.log(`El número ${numero} no es primo`); 




////////////////////////////////////////////////////


// 4. Crea una función que reciba un número de dni como parámetro, y devuelva la letra del mismo.
// Si el dni tiene algún error debe comunicarlo. Recuerda que el array de letras de DNI es
// [TRWAGMYFPDXBNJZSQVHLCKE].



// const DNI = (num) => {

//     let letra = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"]

//     let numero = num % 23

//     return num + letra[numero]
// };

// let dniNum = parseInt(prompt("Introduce número del DNI"))

// let dni = DNI(dniNum)
// console.log(dni)



////////////////////////////////////////////////////


// 5. Crea una función que reciba 2 parámetros, precio e iva, y devuelva el precio con iva incluido. Si
// no recibe el iva, aplicará el 21 por ciento por defecto

// const IVA = (base, tasa = 0.21) => {

//     let precio = base + (base * tasa)

//     return precio;

// };


// let precioCompra = IVA(10, 0)

// console.log(precioCompra)


////////////////////////////////////////////////////



// 6. Crea una función que determine si una letra es una vocal o una consonante

// const VocalConsonante = (letra) => {

//     let vocales = ["a","e","i","o","u"]
    
//     switch(vocales[letra]){
//         case "a":
//         case "e":
//         case "i":
//         case "o":
//         case "u":
        
//         console.log(`La letra ${vocales[letra]} es una vocal`)
//         break;
//         default:
//             console.log(`La letra ${letra} es una consonante`)
//     };

// };

// let comprobacion = prompt("Introduce una letra").toLowerCase()
// let consulta = VocalConsonante(comprobacion)


////////////////////////////////////////////////////

// 7. Crea una función que, dada una frase, convierta las A en 4, las E en 3, las I en 1 y las O en 0.



// const Conversor = (frase) => {

//     let cambioA = frase.replaceAll("a","4");
//     frase = cambioA;

//     let cambioE = frase.replaceAll("e", "3");
//     frase = cambioE;

//     let cambioI = frase.replaceAll("i", "1");
//     frase = cambioI

//     let cambioO = frase.replaceAll("o", "0");
//     frase = cambioO

//     return frase;

// };

// let frase = prompt("Introduce una frase.").toLowerCase()

// let resultado = Conversor(frase)

// console.log(resultado)



//////////////////////////////////////////////////////////////////////////////

// 8. Crea una función que, dada una frase, cuente la cantidad de una letra en la misma. Por
// ejemplo, dada la palabra “javascript” y la letra “a”, debería devolver un 2

let frase = prompt("Introduce una frase")
let letra = prompt("Introduce una letra, el programa contará las veces que se repite esta letra en la frase.")


// const AnalizarLetra = (frase, letra) => {

//     let cantidad = frase.length()



// };

// let resultado = AnalizarLetra(frase, letra)
// console.log(resultado)
