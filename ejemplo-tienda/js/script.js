

const contenedorProductos = document.getElementById("contenedor-productos")

stockProductos.forEach((elm) => {

    const div = document.createElement("div")

    div.classList.add("producto")

    div.innerHTML = `
    <img src="${elm.img}" >
    <hr>
    <h3>${elm.nombre}</h3>
    <p>Precio: $${elm.precio}</p>

    <button>Comprar</button>
    `

    contenedorProductos.appendChild(div)
})






