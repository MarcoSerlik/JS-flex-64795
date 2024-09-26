// ========= Clase 6 - Funciones de Orden Superior ==========

/*
Las funciones de orden superior son aquellas que reciben a otras
como argumento, retornan funciones o ambas.

.forEach() .find() .filter() .some() .map() .reduce() .sort()
*/

/*
const sumar = (a, b) => a + b
const restar = (a, b) => a - b
const multiplicar = (a, b) => a * b

const realizarOperacion = (operacion) => {

    let num1 = parseInt(prompt("Ingrese el primer numero:"))
    let num2 = parseInt(prompt("Ingrese el segundo numero:"))

    let resultado = operacion(num1, num2)

    return resultado

}
console.log(realizarOperacion(multiplicar))
*/


/*
// num ---> Va a tomar como valor cada elemento del Array
let numerosDobles = []
for (let num of numeros) {
    numerosDobles.push(num * 2)
    }
    console.log(numerosDobles)
*/

/*
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numerosDobles = (array) => {
    let dobles = []
    for (let num of array) {
        dobles.push(num * 2)
    }
    return dobles
}

console.log(numerosDobles(numeros))
*/

/*
const sumar = (a, b) => a + b
const restar = (a, b) => a - b
const multiplicar = (a, b) => a * b

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const porCadaUno = (array, fn) => {
    let arrayModificado = []

    // let elm = va a tomar el valor de cada uno de los elementos del array que se pase como argumento
    for (let elm of array) {
        let resultado = fn(elm)
        arrayModificado.push(resultado)
    }

    return arrayModificado
}
//                                                    sobre que | que es lo que hace
const arrayPorDos = porCadaUno(numeros, (pepe) => pepe * 2)
console.log(arrayPorDos);

const arrayPorDiez = porCadaUno(numeros, (num) => num * 10)
console.log(arrayPorDiez);
*/

/*
const porDiez = (num) => num * 10
const arrayPorDos = porCadaUno(numeros, porDos)
console.log(arrayPorDos);
const arrayPorDiez = porCadaUno(numeros, porDiez)
console.log(arrayPorDiez);
*/


// ========= Metodos ========
/*
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//                  elm = cada uno de los elementos del array
// numeros.forEach((elm) => console.log(elm))

let arrayModificado = []

numeros.forEach((elm) => {
    // Todo el codigo que quiera hacer
    arrayModificado.push(elm * 2)
})
console.log(arrayModificado);

// Acumulador
let total = 0
numeros.forEach((elm) => total += elm)
console.log(total);

numeros.forEach((elm, i) => {
    console.log(elm, i)
})
*/
// ====== Ejemplo =====
/*
class Mascota {
    constructor(nombre, tipo, edad) {
        this.nombre = nombre
        this.tipo = tipo
        this.edad = edad
    }

    cumplirAnios() {
        this.edad++
    }
}

const mascotas = []
mascotas.push(new Mascota("Roberto", "perro", 3))
mascotas.push(new Mascota("Nala", "perro", 12))
mascotas.push(new Mascota("Jorge", "gato", 8))
mascotas.push(new Mascota("Morgana", "gato", 9))

mascotas.forEach((elm) => {
    if (elm.nombre === "Morgana") {
        elm.cumplirAnios()
    }
}
)

// ====== Find  =======

const resultado = mascotas.find((elm) => elm.nombre.toLowerCase() === "roberto")
console.log(resultado);

*/

// ====== Filter ===========
/*
const productos = [
    { nombre: "Remera", precio: 10000 },
    { nombre: "Remera", precio: 20000 },
    { nombre: "Pantalon", precio: 15000 },
    { nombre: "Pantalon", precio: 17500 },
    { nombre: "Pantalon", precio: 20500 },
    { nombre: "Calzado", precio: 80000 },
    { nombre: "Calzado", precio: 90000 },
    { nombre: "Calzado", precio: 100000 },
    { nombre: "Buzo", precio: 50000 },
    { nombre: "Buzo", precio: 60000 },
    { nombre: "Buzo", precio: 45000 },
]

// Nos va a devolver todo un array nuevo con aquellos elementos que cumplan la condicion
// const filtrados = productos.filter((elm) => elm.nombre === "Buzo")
// const filtrados = productos.filter((elm) => elm.precio <= 40000)
// const filtrados = productos.filter((elm) => elm.precio <= 40000 && elm.nombre === "Pantalon")
// console.log(filtrados);

const buscar = (dato, array) => array.filter((elm) => elm.nombre === dato)

const filtrado = buscar("Calzado", productos)
console.log(filtrado);

*/
// ========= Map ========

// let numeros = [1, 2, 3, 4, 5, 6]

// let dobles = numeros.map((elm) => elm * 2)
// console.log(dobles)

const productos = [
    { nombre: "Remera", precio: 10000 },
    { nombre: "Remera", precio: 20000 },
    { nombre: "Pantalon", precio: 15000 },
    { nombre: "Pantalon", precio: 17500 },
    { nombre: "Pantalon", precio: 20500 },
    { nombre: "Calzado", precio: 80000 },
    { nombre: "Calzado", precio: 90000 },
    { nombre: "Calzado", precio: 100000 },
    { nombre: "Buzo", precio: 50000 },
    { nombre: "Buzo", precio: 60000 },
    { nombre: "Buzo", precio: 45000 },
]

const nuevoStock = productos.map(
    (elm, indice) => {
        return {
            id: indice + 1,
            nombre: elm.nombre,
            precio: elm.precio * 1.20
        }
    }
)
console.log(nuevoStock);

const nombres = productos.map((elm) => elm.nombre)
console.log(nombres);

// ====== Some ======

console.log(productos.some((elm) => elm.nombre === "Campera"))

let personas = [
    { nombre: "Manuel", edad: 28 },
    { nombre: "Sofia", edad: 17 },
    { nombre: "Adriana", edad: 63 }
]
// Some devuelve un valor booleano, por lo cual lo puedo utilizar en una estructura If 
if (personas.some((elm) => elm.edad < 18)) {
    console.log("Hay un menor, usted no puede ingresar");
} else {
    console.log("No hay menores en el grupo, puede ingresar");
}

// =========  Reduce ========

const productos2 = [
    { nombre: "Remera", precio: 10000 },
    { nombre: "Remera", precio: 20000 },
    { nombre: "Pantalon", precio: 15000 },
    { nombre: "Pantalon", precio: 17500 },
    { nombre: "Pantalon", precio: 20500 },
    { nombre: "Calzado", precio: 80000 },
    { nombre: "Calzado", precio: 90000 },
    { nombre: "Calzado", precio: 100000 },
    { nombre: "Buzo", precio: 50000 },
    { nombre: "Buzo", precio: 60000 },
    { nombre: "Buzo", precio: 45000 },
]
// Con .forEach()
// let totalProductos = 0 // Funciona como acumulador
// productos2.forEach((elm) => totalProductos += elm.precio)

// Con .reduce( fn, acumulador )
let costoEnvio = 5000
let totalProductos = productos2.reduce((acumulador, producto) => acumulador + producto.precio, costoEnvio)
console.log(totalProductos);


// ======== Sort ===========

let numeros = [67, 18, 83, 13, 17, 18, 55, 23, 64, 28]

numeros.sort((a, b) => b - a) // Mayor a menor
/*
Primera iteración: a = 28 y b = 64 (64 - 23 = 36 ) ----> si da positivo, deja como está,
Segunda iteración: a = 64 y b = 23 (23 - 64 = -41 ) ---> Si da negativo entonces cambia de lugar
*/
numeros.sort((a, b) => a - b) // Menor a Mayor
// console.log(numeros);

productos2.sort((a, b) => b.precio - a.precio)
// console.log(productos2);

// Para ordenar alfabeticamente en base a Strings
productos2.sort((a, b) => {
    if (a.nombre > b.nombre) {
        return -1
    }
    if (a.nombre < b.nombre) {
        return 1
    }
    return 0
})
console.log(productos2);
