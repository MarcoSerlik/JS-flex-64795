const contenedorProductos = document.getElementById("contenedor-productos")
let carrito = JSON.parse(localStorage.getItem("carrito")) || []

const cargarProductos = async () => {

    try {

        const response = await fetch("./js/productos.json")
        const data = await response.json()

        renderizarProductos(data)

    } catch (error) {
        console.error("Error al cargar productos: ", error);

    }

}

const renderizarProductos = (array) => {

    array.forEach((elm) => {
        const div = document.createElement("div")

        div.classList.add("producto")

        div.innerHTML = `
        <img src="${elm.img}">
        <hr>
        <h3>${elm.nombre}</h3>
        <p>Precio: $${elm.precio}</p>
        <button id="agregar${elm.id}">Comprar</button>
        `

        contenedorProductos.append(div)

        const boton = document.getElementById(`agregar${elm.id}`)
        boton.addEventListener("click", () => {
            agregarProducto(elm.id, array)
            console.log(carrito);
            Toastify({
                text: `Se agregó ${elm.nombre}`,
                gravity: "bottom"
            }).showToast();
        })
    })
}

const agregarProducto = (id, productos) => {

    const productoAgregado = productos.find(prod => prod.id === id)

    if (carrito.some(producto => producto.id === id)) {
        const index = carrito.findIndex(producto => producto.id === id)
        carrito[index].cantidad++
    } else {
        productoAgregado.cantidad = 1
        carrito.push(productoAgregado)
    }

    guardarCarritoLs()

}

const guardarCarritoLs = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

cargarProductos()