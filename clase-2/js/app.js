
/* let usuario = prompt("Ingrese su nombre:").toLowerCase()


if (usuario === "marco") {
   alert("Bienvenido profesor Marco!")
} else if (usuario === "david") {
   alert("Bienvenido tutor David!")
} else {
   alert("Usted no puede ingresar")
} */


// ======

/*
let password = parseInt(prompt("Ingrese su clave númerica:"))

if (password !== 123456) {
    alert("La contraseña no es valida")
} else {
    alert("Bienvenido")
}
*/

//====

/*
let password = 123456
let usuario = prompt("Ingrese su usuario").toLowerCase()

if (usuario == "marco") {

    let passUsuario = parseInt(prompt("Ingrese la clave númerica:"))

    if (passUsuario === password) {
        alert("Logeado correctamente. Bienvenido!")
    } else {
        alert("Password incorrecta. Pruebe nuevamente.")
    }

} else {
    alert("Usuario incorrecto. Pruebe nuevamente.")
}
*/

// ========
/*
let edadUsuario = parseInt(prompt("Ingrese su edad:"))

if ((edadUsuario >= 18) && (edadUsuario < 99)) {
    alert("Bienvenido al sitio")
} else {
    alert("Lo lamento, usted no puede ingresar")
}

*/

// =======

/*
let nombreUsuario = prompt("Ingresar usuario:").toLowerCase()
let passUsuario = prompt("Ingresar password:")


if ((nombreUsuario === "carlos") && (passUsuario === "soycapo123")) {
    alert("Bienvenido")
} else {
    alert("Alguno de los datos no es correcto. Intente nuevamente.")
}
*/

// =====
/*
let rol = prompt("Ingrese su rol: ").toLowerCase()

if ((rol === "tutor") || (rol === "profesor")) {
    alert("Bienvenido, usted puede ingresar!")
} else {
    alert("Disculpe, usted no puede ingresar")
}

*/

// ==== Valores Falsy

/*       false, null, undefined, 0, ""    */
/*
let ingreso = prompt("Ingrese texto")

if (!ingreso) {
    alert("Usted no ingresó nada")
    ingreso = prompt("Ingrese un texto valido:")
}

*/

// ======== Ciclos ===============


// for (contador; condicion; actualización)
/*
for (let i = 0; i < 5; i++) {
    console.log("Hola N° " + i)
}
*/

/*
paso 1: Evaluar la condición
paso 2: Ejecutar el código dentro de las llaves
paso 3: Actualizar el contador
*/
/*
let numero = parseInt(prompt("Ingresar un numero:"))

for (let i = 1; i <= 10; i++) {
    let resultado = numero * i

    console.log(numero + " x " + i + "= " + resultado)
}
 */

// ===== Asignador de turnos


/*
for (let i = 1; i <= 20; i++) {
    let nombreUsuario = prompt("Ingresar un nombre:")

    console.log(`Turno N° ${i}. Nombre: ${nombreUsuario} `)
}
*/
/*
const numeroProhibido = 7

for (let i = 1; i <= 20; i++) {

    if (i === numeroProhibido) {
        console.log("Apareció el número prohibido")
        continue
    }

    console.log(i)
} */


// ===============
/*
let usuario = prompt("Ingrese su usuario:")

while (usuario !== "Marco") {
    alert("El usuario ingresado es incorrecto.")
    usuario = prompt("Ingrese su usuario:")
}

alert("Usted ingreso correctamente.")
*/
/*
let password = prompt("Ingrese la contraseña:")
let contadorUsuario = 1

while (password !== "soycapo123") {

    if (contadorUsuario === 3) {
        alert("Acceso bloqueado.")
        break
    }

    alert("La contraseña ingresada es incorrecta")
    usuario = prompt("Ingrese la contraseña:")

    contadorUsuario++
}
*/

// ======= Sentenca Do... While
/*
do {

} while (condicion)
*/
/*
let pass;

do {
    pass = parseInt(prompt("Ingrese la clave numerica:"))
} while (pass !== 1234)

alert("Usted ha logrado ingresar.")

*/

// ===== Switch =======

/*

let producto = prompt("Ingrese el nombre del producto por el cual desea consultar su valor:").toLowerCase()

switch (producto) {

    case "remera":
        alert("El valor de la remera es $5000")
        break

    case "pantalon":
        alert("El valor del pantalon es $10000")
        break

    case "buzo":
        alert("El valor de la remera es $20000")
        break

    default:
        alert("El valor ingresado no es correcto")
        break

}

*/


// ========== 

/*
. Remera: $8000
. Pantalón: $9000
. Campera: $13000
*/

let total = 0
let seleccionUsuario = prompt(
    `Bienvenido al simulador de compras. Los productos disponibles son:

. Remera: $8000
. Pantalón: $9000
. Campera: $13000

Ingrese el nombre del producto que desea comprar:
`)

while (seleccionUsuario != "comprar") {
    switch (seleccionUsuario) {

        case "remera":
            // total = total + 8000
            total += 8000
            seleccionUsuario = prompt(
                `Usted ha elegido una remera. Su nuevo total es de $ ${total}.
            
            ¿Desea comprar algo mas? Tenemos disponible:
            . Remera: $8000
            . Pantalón: $9000
            . Campera: $13000

            Si desea finalizar la compra ingrese la palabra "comprar", caso contrario ingrese el nombre del producto:
            `)
            break

        case "pantalon":
            total += 9000
            seleccionUsuario = prompt(
                `Usted ha elegido un pantalon. Su nuevo total es de $ ${total}.
            
            ¿Desea comprar algo mas? Tenemos disponible:
            . Remera: $8000
            . Pantalón: $9000
            . Campera: $13000

            Si desea finalizar la compra ingrese la palabra "comprar", caso contrario ingrese el nombre del producto:
            `)
            break

        case "campera":
            total += 13000
            seleccionUsuario = prompt(
                `Usted ha elegido una campera. Su nuevo total es de $ ${total}.
            
            ¿Desea comprar algo mas? Tenemos disponible:
            . Remera: $8000
            . Pantalón: $9000
            . Campera: $13000

            Si desea finalizar la compra ingrese la palabra "comprar", caso contrario ingrese el nombre del producto:
            `)
            break
        default:
            seleccionUsuario = prompt(`El valor ingresado no es valido. Los productos disponibles son:
                . Remera: $8000
                . Pantalón: $ 9000
                . Campera: $13000
                Si desea finalizar la compra ingrese la palabra "comprar", caso contrario ingrese el nombre del producto que desea elegir:
                `)
            break
    }
}

alert("El valor final de la compra es de: $" + total)