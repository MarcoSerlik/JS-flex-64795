const contenedorCarrito = document.getElementById("contenedor-carrito");
const totalCarrito = document.getElementById("total-carrito");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const cargarCarrito = () => {
    if (carrito.length > 0) {
        actualizarCarrito()
    } else {
        contenedorCarrito.innerHTML = `
        <p>El carrito está vacío.</p>
        `
    }
}

const actualizarCarrito = () => {

    contenedorCarrito.innerHTML = ""

    if (carrito.length === 0) {
        contenedorCarrito.innerHTML = `
        <p>El carrito está vacío</p>
        `
    } else {

        carrito.forEach(elm => {
            const div = document.createElement("div");
            div.classList.add("producto");


            div.innerHTML = `
            <h3>${elm.nombre}</h3>
            <p>Precio: $${elm.precio}</p>
            <p>Cantidad: ${elm.cantidad}</p>
            <button id="borrar${elm.id}">Borrar</button>
            `;
            contenedorCarrito.appendChild(div);

            const boton = document.getElementById(`borrar${elm.id}`)
            boton.addEventListener("click", () => {

                Swal.fire({
                    title: "Queres borrar el producto del carrito?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Si, borrar",
                    cancelButtonText: "Cancelar",
                }).then((result) => {
                    if (result.isConfirmed) {
                        borrarDelCarrito(elm.id)
                        actualizarCarrito()
                    }
                })
            })
        })

    }

    totalCarrito.innerText = `Total: $${carrito.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0)}`;
}

const borrarDelCarrito = (id) => {
    const productoIndex = carrito.findIndex(producto => producto.id === id)

    carrito.splice(productoIndex, 1)

    guardarCarrito()

}

const guardarCarrito = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};


cargarCarrito()