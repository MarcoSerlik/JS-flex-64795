// --------- Clase 1 - Sintaxis y variables ---------

// Declaración de variable
let nombre

// Asignación
nombre = "Marco Serlik"

// Inicialización
const rol = "Profesor"

console.log(nombre)


// ---------- Tipos de Datos ---------

/* let notaUno = 8

let notaDos = 6

let notaTres = 10

let promedio = (notaUno + notaDos + notaTres) / 3

console.log(typeof promedio)  */


// ------ Concatenación de Strings --------

let textoUno = "Hola"

let textoDos = "mundo"

console.log(textoUno + " " + textoDos)

console.log(10 + "10")


// ==== Métodos del navegador ===


/* let numeroUno = parseInt(prompt("Por favor, ingrese un número:"))

let numeroDos = prompt("Por favor, ingrese el segundo número:")


let valorFinal = parseInt(numeroUno) + parseInt(numeroDos)


alert("Su numero es: " + valorFinal) */

// ===== Ultimo Ejemplo: Calculadora =====

let nombreUsuario = prompt(" Por favor, para continuar le solicitamos que ingre su nombre:")

alert("¡Hola " + nombreUsuario + "! Bienvenido al simulador de promedios. A continuación le solicitaremos que ingrese 3 números, luego le daremos el promedio final.")

let notaUno = parseInt(prompt("Ingrese su primer valor:"))

let notaDos = parseInt(prompt("Ingrese su segundo valor:"))

let notaTres = parseInt(prompt("Ingrese su tercer valor:"))

let promedio = (notaUno + notaDos + notaTres) / 3

alert("¡Perfecto " + nombreUsuario + "! Tu promedio final es: " + promedio)