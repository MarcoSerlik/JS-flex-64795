
// Operadores ternarios

// condición ? expresiónTrue : expresiónFalse

// let edad = 16

// let mensaje = (edad >= 18) ? "Sos mayor de edad" : "Sos menor de edad"

// console.log(mensaje);

// === Desestructurar Arrays ===

// a = 10
// b = 20 
// c = 30

// const numeros = [10, 20, 30]
// const numeros = [10, 20, 30, 40, 50]

// Asignar los valores del array a constantes
// const [roberto, b, c] = numeros

// const [, b] = numeros
// const [primero, , tercero, , quinto] = numeros

// console.log(b);

// console.log(numeros[0]); // Otra forma de acceder sin desestructurar

// === Desestructurar Objetos ===

const persona = {
    nombre: "Marco",
    edad: 24,
    pais: "Argentina"
}

const { nombre: nombreUsuario, edad, pais } = persona

// console.log(nombreUsuario);
// console.log(edad);
// console.log(pais);

const docentes = [
    { nombre: "Marco", rol: "Profesor" },
    { nombre: "David", rol: "Tutor" }
]

const [{ nombre: nombreMarco }, { nombre: nombreDavid }] = docentes

// console.log(nombreMarco);
// console.log(nombreDavid);

// === Parámetros por Defecto ===

function crearUsuario(nombre = "Anónimo", edad = 18, pais = "Desconocido") {

    console.log(`Nombre: ${nombre}, Edad: ${edad}, Pais: ${pais} `);

}

// crearUsuario("Marco", 24, "Argentina")
// crearUsuario()
// crearUsuario("Roberto", 35)

// === Spread Operator ===

const numeros = [1, 2, 3]
const nuevosNumeros = [...numeros, 4, 5, 6]
// nuevosNumeros = [1, 2, 3, 4, 5, 6]

console.log(nuevosNumeros);

// === Combinar Arrays ===

const frutas = ["manzana", "banana"]
const verduras = ["tomate", "zanahoria"]

const productos = [...frutas, ...verduras]

console.log(productos);

// === Spread Operator en Objetos ===

const usuario = {
    nombre: "Martin",
    edad: 27
}

const datosCompletos = { ...usuario, pais: "Argentina" }

console.log(datosCompletos);


// ==== 