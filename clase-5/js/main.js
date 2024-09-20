// ============= Repaso ===========

// const array = [{ nombre: "Cama", precio: 23000 }, { nombre: "Silla", precio: 3000 }, { nombre: "Mesa", precio: 18000 }, { nombre: "Placard", precio: 15000 }]
// const numeros = [4, 6, 18, 23]

// const resultado = numeros[2] + numeros[3]

// console.log(resultado);

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// let totalCarrito = 0

// for (let producto of array) {
//     console.log("Producto:" + producto.nombre)
//     console.log("Precio:" + producto.precio);

//     totalCarrito += producto.precio
// }

// console.log("El total de su carrito es:" + totalCarrito)


// ========== Objetos =============
/*
const usuario = {
    nombre: "Marco",
    edad: 24,
    nacionalidad: "Argentino",
    hobbies: {
        hobbie: "musica",
        hobbie2: "viajar",
        hobbie3: "comer"
    },
    tieneHambre: true,

    saludar: function () {
        console.log("Hola!")
    }
}

console.log(usuario.nacionalidad);
usuario.nacionalidad = "Brasilero"

delete usuario.nacionalidad

console.log(usuario.nacionalidad);
usuario.curso = "Js"

console.log(usuario.curso);
*/

// const producto = {
//     nombre: "Remera",
//     precio: 2500,
//     desc: "Remera de algodón"
// }

// function Producto(nombre, precio, desc) {
//     this.nombre = nombre
//     this.precio = precio
//     this.desc = desc
// }

// const producto = new Producto("Remera", 8000, "desc")
/*
const producto = {  new Creo este objeto
    Acá opera Producto()
    this = producto
    this.nombre = producto.nombre
}
*/

// console.log(producto);


// ========== Clases ========

// function Prod(nombre, precio) {

//     this.nombre = nombre
//     this.precio = precio

//     this.restarStock = () => {
//         this.stock--
//     }

// }
/*
class Producto {

    constructor(nombre, precio, desc, stock) {
        this.nombre = nombre
        this.precio = precio
        this.desc = desc
        this.stock = stock
    }

    restarStock() {
        this.stock--
    }

    agregarStock(cantidad) {
        this.stock += cantidad
    }

}

const producto = new Producto("Remera", 5000, "Remera de algodón", 20)

producto.restarStock()
producto.agregarStock(20)
*/


// console.log("nombre" in producto);
// Operador In
// if ("nombre" in producto) {
//     console.log(producto.nombre);
// } else {
//     console.log("No hay nombre");
// }

// console.log(producto);
// Iterar sobre las propiedades de un objeto
// 1. propiedad = nombre
// 2. propiedad = precio
// 3. propiedad = desc
// 4. propiedad = stock
// for (let propiedad in producto) {
//     console.log(propiedad + ": " + producto[propiedad]);
// }

const texto = "Hola"

const texto2 = texto

console.log(texto2);

const usuario = { // 423
    nombre: "Marco",
    edad: 24
}

const usuario2 = usuario // se guarda la referencia al mismo objeto: 423

console.log(usuario);
console.log(usuario2);

usuario2.edad = 26

console.log(usuario);
console.log(usuario2);



class CuentaBancaria {

    constructor(nombre, saldo, tipo) {
        this.nombre = nombre
        this.saldo = saldo
        this.tipo = tipo
    }

    obtenerSaldo() {
        console.log("Su saldo es: $" + this.saldo);
        return this.saldo
    }

    depositar(cantidad) {
        if (cantidad > 0) {
            this.saldo += cantidad

            console.log("Depositado :" + cantidad + ". Nuevo saldo: $" + this.saldo)
        } else {
            console.log("La cantidad a depositar debe ser positiva.")
        }
    }

    retirar(cantidad) {

        if ((cantidad > 0) && (cantidad <= this.saldo)) {
            this.saldo -= cantidad
            console.log("Retirado: $" + cantidad + ". Nuevo saldo: $" + this.saldo)
        } else {
            console.log("Cantidad inválida o insuficiente saldo");
        }

    }

}


const cuenta = new CuentaBancaria("Marco", 5000, "Caja de Ahorro")

cuenta.obtenerSaldo()

cuenta.retirar(10000)

cuenta.depositar(4000)