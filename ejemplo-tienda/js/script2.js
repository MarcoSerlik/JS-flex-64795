const contenedorProductos = document.getElementById("contenedor-productos");
const contenedorCarrito = document.getElementById("contenedor-carrito");
const totalCarrito = document.getElementById("total-carrito");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Función para obtener productos desde un archivo JSON
const cargarProductos = async () => {
    try {
        const response = await fetch('productos.json'); // Ruta al archivo JSON
        const data = await response.json();
        renderizarProductos(data);
    } catch (error) {
        console.error("Error al cargar productos:", error);
    }
};

// Renderiza los productos en la página
const renderizarProductos = (productos) => {
    productos.forEach(elm => {
        const div = document.createElement("div");
        div.classList.add("producto");

        div.innerHTML = `
        <img src="${elm.img}">
        <hr>
        <h3>${elm.nombre}</h3>
        <p>Precio: $${elm.precio}</p>
        <button id="agregar${elm.id}">Comprar</button>
        `;
        contenedorProductos.appendChild(div);

        const boton = document.getElementById(`agregar${elm.id}`);
        boton.addEventListener("click", () => {
            agregarCarrito(elm.id, productos);
            actualizarCarrito();
        });
    });
};

// Agregar producto al carrito
const agregarCarrito = (id, productos) => {
    const productoAgregado = productos.find(prod => prod.id === id);

    if (carrito.some(producto => producto.id === id)) {
        const index = carrito.findIndex(producto => producto.id === id);
        carrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        carrito.push(productoAgregado);
    }

    guardarCarrito();
};

// Actualiza el carrito en el HTML y en LocalStorage
const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = "";
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

        const boton = document.getElementById(`borrar${elm.id}`);
        boton.addEventListener("click", () => {
            borrarDelCarrito(elm.id);
            actualizarCarrito();
        });
    });

    totalCarrito.innerText = `Total: $${carrito.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0)}`;
};

// Borra un producto del carrito
const borrarDelCarrito = (id) => {
    carrito = carrito.filter(prod => prod.id !== id);
    guardarCarrito();
};

// Guarda el carrito en LocalStorage
const guardarCarrito = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

// Cargar carrito desde LocalStorage cuando se inicia la página
const cargarCarrito = () => {
    if (carrito.length > 0) {
        actualizarCarrito();
    }
};

// Ejecutar funciones cuando se carga la página
cargarProductos();
cargarCarrito();

