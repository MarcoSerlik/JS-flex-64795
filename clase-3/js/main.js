/*if (condicion) {

} else if (condicion) {

}else{

} */

/*
== igual a otro
=== estrictamente igual a otro (tipo de dato)
!= diferente a otro
!== estrictamente diferente a otro
< menor a otro
> mayor a otro
<= menor o igual
>= mayor o igual

Operadores lógicos: && (and, y), || (or), ! (not)

falsy:  "", 0, null, undefined
*/
/*
switch (datoAEvaluar) {
    case "hola":
        instruccion
        break // frenar ciclos
    default:
        break;
}

for (contador; condicion; actualización) {

}

for (let i = 0; i < 5; i++) {

}

while (sucedeAlgo) {
    instrucciones
}

do{

}while()
    */

// ========= Funciones =====


// function saludarUsuario() {
//     let nombreUsuario = prompt("Ingrese su nombre:")
//     alert("Bienvenido " + nombreUsuario)
// }

// Declaración != llamado


// saludarUsuario()

// let num1 = 10
// let num2 = 20

// let resultado

// function sumar() {
//     resultado = num1 + num2
// }

// sumar()

// console.log(resultado)

// function saludar(nombre) {
//     alert("Hola! Bienvenido " + nombre)
// }

// saludar("Roberto")

// let resultado

// function sumar(a, b) {
//     return a + b
// }

// resultado = sumar(20, 30)

// console.log(resultado);

// ======== Ejemplo 1 =======

/*
let resultadoFinal

//Función para solicitar un número al usuario y retornarlo

function solicitarNumero() {
    let numero = prompt("Por favor, ingresar un número:")

    if (numero.toLowerCase() === "salir") {
        return "salir"
    }

    numero = parseInt(numero)

    return numero
}

function solicitarOperador() {
    let operador = prompt("Ingrese el operador con el cual desea que trabajemos:")

    if (operador.toLowerCase() === "salir") {
        return "salir"
    }

    return operador
}

function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;
        case "-":
            return primerNumero - segundoNumero;
        case "*":
            return primerNumero * segundoNumero;
        case "/":
            return primerNumero / segundoNumero;
        default:
            return 0;
    }
}


//Función par sumar dos números
function programa() {
    //Solicitamos un primer número
    let numero1 = solicitarNumero()

    // Si el usuario ingresó salir, retornamos "salir" para terminar el programa
    if (numero1 === "salir") {
        return "salir";
    }

    // Solicitamos un segundo número
    let numero2 = solicitarNumero()

    if (numero2 === "salir") {
        return "salir"
    }

    let operador = solicitarOperador()

    if (numero2 === "salir") {
        return "salir"
    }

    return calculadora(numero1, numero2, operador)
}


do {
    resultadoFinal = programa()

    // sumar() = resultado o "salir"

    if (resultadoFinal === "salir") {
        alert("El programa ha terminado")
    } else {
        alert("Su resultado final es: " + resultadoFinal)
    }
} while (resultadoFinal !== "salir")

    */


// ===== Scope =====

/*
let nombre = "Marco"

function saludar() {
    let nombre = "David"
    console.log(nombre)
}

function saludarOtraVez() {
    console.log(nombre)
}

saludar()
saludarOtraVez()
console.log(nombre);
*/

// ====== Funciones Anonimas / Flecha
/*
const sumar = (a, b) => {
    return a + b
}

const resta = (a, b) => a - b

console.log(sumar(20, 50))
console.log(resta(20, 50))

*/

// ===== Ejemplo 2

const IVA = 1.21
let resultadoFinal

const calcularPrecioConIva = (precioSinIva) => precioSinIva * IVA

const mostrarResultado = (precioFinal) => alert("El precio final es: " + precioFinal)

const pedirPrecio = () => {

    let precio = prompt("Ingrese el precio de su producto o ingrese 'salir' para terminar el programa: ").toLowerCase()

    if (precio === "salir") {
        return "salir"
    }

    while ((precio === "") || (precio === null) || (isNaN(precio) || precio <= 0)) {
        precio = prompt("Dato Invalido. Ingrese el precio de su producto o 'salir' para terminar el programa: ")
    }

    return parseInt(precio)
}

const calculadoraIVA = () => {

    let precioConIva

    let precioUsuario = pedirPrecio()

    if (precioUsuario === "salir") {
        return "salir"
    }

    precioConIva = calcularPrecioConIva(precioUsuario)

    precioConIva = precioConIva.toFixed(2)

    return precioConIva

}

do {
    resultadoFinal = calculadoraIVA()

    if (resultadoFinal === "salir") {
        alert("El programa se ha terminado")
    } else {
        mostrarResultado(resultadoFinal)
    }
} while (resultadoFinal !== "salir")


