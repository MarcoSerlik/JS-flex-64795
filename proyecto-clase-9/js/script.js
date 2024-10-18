
// ====== Promesas =======

// const promesa = new Promise((resolve, reject) => {

//     const exito = false

//     if (exito) {
//         resolve("La operación fue exitosa")
//     } else {
//         reject("La operación salió mal")
//     }

// })

// mensaje === resolve()
// promesa.then((mensaje) => {
//     console.log(mensaje)
// }).catch((error) => {
//     console.log(error);
// })
/*
const baseDeDatos = [
    {
        id: 1,
        nombre: "Producto 1",
        precio: 5000,
        descripcion: "Remera",
        img: "https://prd.place/200"
    },
    {
        id: 2,
        nombre: "Producto 2",
        precio: 10000,
        descripcion: "Pantalon",
        img: "https://prd.place/201"
    },
    {
        id: 3,
        nombre: "Producto 3",
        precio: 30000,
        descripcion: "Buzo",
        img: "https://prd.place/202"
    },
    {
        id: 4,
        nombre: "Producto 4",
        precio: 80000,
        descripcion: "Zapatillas",
        img: "https://prd.place/203"
    },
    {
        id: 5,
        nombre: "Producto 5",
        precio: 25000,
        descripcion: "Vestido",
        img: "https://prd.place/204"
    },
    {
        id: 6,
        nombre: "Producto 6",
        precio: 90000,
        descripcion: "Botas",
        img: "https://prd.place/205"
    }
]

const contenedorProductos = document.getElementById("contenedor-productos")
let productos = []

const pedirProductos = () => new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve(baseDeDatos)
    }, 3000)

})

const mostrarProductos = (array) => {

    array.forEach(element => {
        const div = document.createElement("div")

        div.innerHTML = `
        <p>${element.nombre}</p>
        `

        contenedorProductos.append(div)
    });

}

pedirProductos().then((res) => {
    productos = res

    mostrarProductos(productos)
})
*/


// ======== Async / Await =========

// Async ---> Indica función asincronica
// await ---> marca que debemos esperar a que algo se resuelva para poder continuar

/*
const obtenerDatos = async () => {
    try {
        const resultado = await new Promise((resolve, reject) => {
            setTimeout(() => reject("No Se devuelven datos"), 2000)
        })
        console.log(resultado);
    }
    catch (error) {
        console.log("Capturamos un error: ", error);
    }
}

obtenerDatos()
*/

// ======= fetch() =======


// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log("Error en la petición: ", error))

// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify({
//         title: "post 101",
//         body: "lorem lorem lorem",
//         userId: 1,
//     }),
//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     }
// })
//     .then((response) => response.json())
//     .then((data) => console.log(data))


// ======== Local Storage ======

// localStorage.setItem("usuario", "Marco")

// let usuario = localStorage.getItem("usuario")

// localStorage.setItem("numeros", 1234)

// const numbers = localStorage.getItem("numeros")

// if (usuario !== null) {
//     alert("Bienvenido " + usuario)
// } else {
//     usuario = prompt("Ingrese su nombre de usuario")
//     localStorage.setItem("usuario", usuario)
//     alert("Bienvenido " + usuario)
// }

// localStorage.removeItem("usuario")
// localStorage.clear()

const usuario = {
    nombre: "Marco",
    edad: 24,
    rol: "profesor"
}

const array = [
    {
        nombre: "Marco",
        edad: 24,
        rol: "profesor"
    },
    {
        nombre: "David",
        edad: 30,
        rol: "tutor"
    }
]

const arrayDocentes = JSON.stringify(array)

localStorage.setItem("array", arrayDocentes)

const arrayDeLS = localStorage.getItem("array")

console.log(arrayDeLS);

const arrayParseado = JSON.parse(arrayDeLS)
console.log(arrayParseado);
