const contenedorProductos = document.getElementById("contenedor-productos")
const contenedorCarrito = document.getElementById("contenedor-carrito")
const totalCarrito = document.getElementById("total-carrito")
const carrito = []

const agregarCarrito = (id) => {

    const productoAgregado = stockProductos.find(prod => prod.id === id)

    if (carrito.some(producto => producto.id === id)) {
        const index = carrito.findIndex(producto => producto.id === id)
        carrito[index].cantidad++
    } else {
        productoAgregado.cantidad = 1
        carrito.push(productoAgregado)
    }
}

const actualizarCarrito = () => {

    contenedorCarrito.innerHTML = ""
    carrito.forEach(elm => {

        const div = document.createElement("div")

        div.classList.add("producto")

        div.innerHTML = `
        <h3>${elm.nombre}</h3>
        <p>Precio: $${elm.precio}</p>
        <p>Cantidad: ${elm.cantidad}</p>
        <button id="borrar${elm.id}">Borrar</button>
        `
        contenedorCarrito.appendChild(div)

        const boton = document.getElementById(`borrar${elm.id}`)
        boton.addEventListener("click", () => {
            borrarDelCarrito(elm.id)
            actualizarCarrito()
        })
    })

    totalCarrito.innerText = `Total: $${carrito.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0)}`
}

const borrarDelCarrito = (id) => {

    const producto = carrito.find(prod => prod.id === id)
    const indiceProducto = carrito.indexOf(producto)

    carrito.splice(indiceProducto, 1)
}

stockProductos.forEach(elm => {

    const div = document.createElement("div")

    div.classList.add("producto")

    div.innerHTML = `
    <img src="${elm.img}">
    <hr>
    <h3>${elm.nombre}</h3>
    <p>Precio: $${elm.precio}</p>

    <button id="agregar${elm.id}">Comprar</button>
    `

    contenedorProductos.appendChild(div)

    const boton = document.getElementById(`agregar${elm.id}`)

    boton.addEventListener("click", () => {
        agregarCarrito(elm.id)
        actualizarCarrito()
    })
})

