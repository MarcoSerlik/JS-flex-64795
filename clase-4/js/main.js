// ============ Funciones ===========
/*
let total = 0

function suma(a, b) {
    let total = a + b

    return total
}

console.log(suma(4, 5));


const resta = (a, b) => a - b
*/

// ============= Array ========

// const productos = ["cama", "mesa", "silla", "placard", "cama", "mesa", "silla", "placard"]

// const numeros = [22, 34, 565, 1235, 534]

const mixto = [true, 2324, "roberto", {}]

// console.log(productos);
// console.log(productos[6]);

// console.log(numeros[0] + numeros[2]);

/* 
Modificar el valor que está guardado en una posicion de mi Array
productos[3] = "Sillón"
*/

// log(22 +565 )

//  i = 0 / log(productos[0])
// i = 1 / log(productos[1])

// for (let i = 0; i < productos.length; i++) {
//     console.log(productos[i]);
// }


const numeros = [22, 34, 565, 1235, 534]
let total = 0

for (let i = 0; i < numeros.length; i++) {
    total = total + numeros[i]
    // console.log(numeros[i], total);
}

// console.log("El precio total de tus productos es: $" + total);

// ======== Ejemplo ========

/*
const usuariosRegistrados = ["roberto", "manuel", "sofia", "mailen", "rodrigo"]
let usuario

const validarUsuario = (user) => {
    for (let i = 0; i < usuariosRegistrados.length; i++) {
        if (user === usuariosRegistrados[i]) {
            return true
        }
    }
}

do {
    usuario = prompt("Ingrese su nombre:").toLowerCase()

    if (validarUsuario(usuario) === true) {
        alert("Usted es bienvenido")
    } else {
        alert("Acceso denegado")
    }
} while (validarUsuario(usuario) !== true)

*/

// ======== Metodos de arrays ======

//Pasar Array a String
// console.log(productos.toString());
// console.log(productos);

// Agregar elementos al Array en su última posición
// productos.push("Mesa de Luz")
// console.log(productos);

// Agregar elementos al Array en su primer posición
// productos.unshift("Mesa de Luz")
// console.log(productos);

// Eliminar elementos
// productos.pop() // Borrar ultimo elemento
// productos.shift() // Borrar el primer elemento

// console.log(productos);

// Unir todos los elementos del array con un caracter que los una
// console.log(productos.join(", "))

// Fusionar Arrays
// const productosUsados = ["cama", "mesa", "silla"]
// const productosOferta = ["escritorio", "banco", "silla",]

// const arrayNuevo = productosUsados.concat(productosOferta)

// console.log(arrayNuevo);
/* Retornar un Array nuevo con el corte de otro
    slice(inclusivo, excluyente)
*/
// const corte = arrayNuevo.slice(1)

// console.log(corte);

// Retornar un valor Booleano si un valor coincide con otro guardado en un array
// console.log(corte.includes("cama"));

// Retornar el índice de un elemento del Array
// console.log(corte.indexOf("banco"));


// ========== Objetos ========


// const nombre = " Marco "
// const edad = 24
// const trabajo = "profesor"
// const conocimientos = ["hmtl", "css", "js"]
// const tieneHambre = true
/*
const marco = {
    nombre: "Marco",
    edad: 24,
    trabajo: "Profesor",
    conocimientos: ["html", "css", "js"],
    tieneHambre: true
}

// console.log(marco.tieneHambre);
// console.log(marco["edad"]);

marco.tieneHambre = false
console.log(marco.tieneHambre);

marco.conocimientos.push("bootstrap")
console.log(marco.conocimientos);

marco.activo = true
console.log(marco);
*/
// =========== Clases ============
/*
const producto = {
   id: 1,
   nombre: "Remera",
   precio: 8000,
   desc: "Una remera hermosa"
}

class Producto {

   constructor(nombre, precio, desc) {
       this.nombre = nombre
       this.precio = precio
       this.desc = desc
   }

}

const producto2 = new Producto("pantalon", 9000, "Pantalon Levis")
console.log(producto2);

*/

// =========== Array y Objetos =======

// const productos = [
//     {
//         id: 1,
//         nombre: "Producto 1",
//         precio: 9000
//     },
//     {
//         id: 2,
//         nombre: "Producto 2",
//         precio: 4200
//     },
//     {
//         id: 3,
//         nombre: "Producto 3",
//         precio: 13000
//     },
// ]

// class Producto {

//     constructor(id, nombre, precio) {
//         this.id = id
//         this.nombre = nombre
//         this.precio = precio
//     }
// }


// const productosArray = [
//     new Producto(1, "Producto 1", 232344),
//     new Producto(2, "Producto 2", 23454),
//     new Producto(3, "Producto 3", 23134)
// ]

// productosArray.push(new Producto(4, "Producto 4", 12313))

// ===== Sentencia for ...of

// 1. elemento = productostArray[0]
// 2. elemento = productostArray[1]
// 3. elemento = productostArray[2]
// 4. elemento = productostArray[3]

// for (const elemento of productosArray) {
//     console.log("Nombre del producto: " + elemento.nombre);
// }


/// ================= EJEMPLO =============

//Clase constructora para nuestro productos

class Producto {
    constructor(nombre, precio, desc) {
        this.nombre = nombre
        this.precio = parseFloat(precio)
        this.desc = desc
    }
}

// Array de productos, "Base de Datos"
const productos = []

// Agregar productos al Array
const agregarProducto = () => {
    let nombre = prompt("Ingrese el nombre del producto:")
    let precio = prompt("Ingrese el precio del producto:")
    let desc = prompt("Ingrese una descripcion:")

    productos.push(new Producto(nombre, precio, desc))
}

// Función para mostrar los productos de la base y calcular el total
const mostrarProductos = () => {
    let total = 0
    let mensaje = "Productos agregados: \n"

    for (let producto of productos) {
        mensaje += `\nNombre: ${producto.nombre}\nDescripción: ${producto.desc}\nPrecio: $${producto.precio.toFixed(2)}\n`;

        total += producto.precio
    }

    alert(mensaje)

    alert("El precio total de todos los productos es: $" + total.toFixed(2))
}

const simulador = () => {
    let continuar = true

    while (continuar) {
        agregarProducto() // Llamamos a la funcion que agrega productos
        continuar = confirm("¿Desea agregar otro producto?")
    }

    mostrarProductos()
}

simulador()