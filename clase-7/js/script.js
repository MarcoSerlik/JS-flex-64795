// ======= Acceder a elementos ======

const titulo = document.getElementById("titulo")
const items = document.getElementsByClassName("item")
const etiquetaLi = document.getElementsByTagName("li")


titulo.innerText = "Soy un nuevo texto de titulo"

const texto = document.getElementById("texto")

// texto.innerText = "<p>Hola!</p>" --> No se interpreta como nuevo nodo

// texto.innerHTML = "<p>Hola!</p>" --> Accedemos al HTML interno de un elemento

// titulo.className = "texto-rojo" // Sobreescribir todos las clases

titulo.classList.add("texto-rojo") // Sumar una clase
titulo.classList.remove("texto") // Remover clase
titulo.classList.toggle("texto-rojo") // Alterna una clase

// === Creacion de nuevos nodos ===


const p = document.createElement("p")

p.className = "parrafo"
p.innerText = "Texto de Ejemplo"

// console.log(p);

// document.body.appendChild(p) // Lo agrega como ultimo elemento hijo
document.body.prepend(p) // Lo agrega como primer elemento hijo

p.remove() // Eliminar

// ========== EVENTOS ========

let boton = document.getElementById("btn")
const clickeado = () => console.log("Botón clickeado")

// boton.addEventListener("mouseover", clickeado)

// boton.onclick = () => {
//     alert("Botón clickeado")
// }

const modalContainer = document.getElementById("modal-container")
const cerrarModal = document.getElementById("cerrar-modal")

boton.addEventListener("click", () => {
    modalContainer.classList.toggle("modal-active")
})

cerrarModal.addEventListener("click", () => {
    modalContainer.classList.toggle("modal-active")
})

// const activarModal = () => {
//     modalContainer.classList.toggle("modal-active")
// }

// boton.onclick = activarModal
// cerrarModal.onclick = activarModal

const inputNombre = document.getElementById("nombre")
const inputApellido = document.getElementById("apellido")

inputNombre.addEventListener("change", () => {
    const valor = inputNombre.value

    // console.log(valor)
    if (valor.length < 3) {
        inputNombre.classList.add("invalido")
    } else {
        inputNombre.classList.remove("invalido")
    }

})

const form = document.getElementById("formulario")
const usuarios = []

form.addEventListener("submit", (e) => {

    e.preventDefault()

    const nombre = inputNombre.value
    const apellido = inputApellido.value

    const usuario = {
        nombre: nombre,
        apellido: apellido
    }

    usuarios.push(usuario)
    console.log(usuarios);

    form.reset()
})

// const botonRandom = document.getElementById("boton-form")

// botonRandom.addEventListener("click", (e) => {
//     console.log(e)

//     console.log(e.target);
//     console.log(e.x);

// })
