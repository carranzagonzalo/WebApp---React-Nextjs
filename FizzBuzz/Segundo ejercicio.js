/* Segundo ejercicio
Se debe entregar el código fuente (o repo git) junto con la documentación que crea necesaria
para comunicar el diseño, si lo considera útil, también se pueden agregar test unitarios.
Escriba un script que a partir de un array de ints devuelva un array de strings aplicando las
siguientes reglas:
● Devuelve Fizz si el número es divisible por 3 o si incluye un 3 en el número.
● Devuelve Buzz si el número es divisible por 5 o si incluye un 5 en el número.
● Devuelve FizzBuzz si el número es divisible por 3 y por 5.
 */


for ( var numbers = 1; numbers <= 100; numbers++) {  

    
if (numbers % 15 === 0 ) {  //si el número es divisible por 3 o si incluye un 3 en el número.
    console.log("FizzBuzz") }
else if (numbers % 5 === 0) { // Devuelve Buzz si el número es divisible por 5 o si incluye un 5 en el número.
    console.log("Buzz") }
else if (numbers % 3 === 0 ) { //Devuelve FizzBuzz si el número es divisible por 3 y por 5.
    console.log("Fizz") }
else {
    console.log(numbers) } // ninguno imprime

}