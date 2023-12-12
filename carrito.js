document.addEventListener("DOMContentLoaded", function () {

    let productosEnCarrito = localStorage.getItem("productos-en-carrito");
    productosEnCarrito = JSON.parse(productosEnCarrito);

    const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
    const contenedorCarritoProductos = document.querySelector("#carrito-productos");
    const contenedorCarritoComprado = document.querySelector("#contenedor-total-precio");
    /*********************************************************************** */
    const contenedorTodoElCarrito = document.querySelector("#contenedor-carrito");
    let botonRemoverCarrito = document.querySelectorAll(".remover-carrito");
    const carritoVaciar = document.querySelector(".boton-borrar");
    const CarritoComprado = document.querySelector(".carrito-comprado");
    const contenedorProductoCarrito = document.querySelector(".prueba");
    const botonVolver = document.querySelector(".boton-volver");

    function cargarProductosCarrito() {

        contenedorCarritoProductos.innerHTML = "";

        const totalPrecioExistente = document.querySelector(".total-precio");

        if (totalPrecioExistente) {
            totalPrecioExistente.remove();
        }

        if (productosEnCarrito && productosEnCarrito.length > 0) {

            contenedorCarritoVacio.classList.add("disabled");
            contenedorTodoElCarrito.classList.remove("disabled");

            productosEnCarrito.forEach(producto => {
                const div = document.createElement("div");
                div.classList.add("carrito-contenido");
                div.innerHTML = `
                            <div class="cont-carrito-contenido">
                                <img src="${producto.imagen}" class="img-carrito" alt="${producto.titulo}">
                                <div class="info-producto">
                                <div>
                                    <h2 class="nombre-carrito">${producto.titulo}</h2>
                                    <h3 class="talle-carrito">Talle: ${producto.talle}</h3>
                                    <button class="remover-carrito" id="${producto.id}" >Remover</button>
                                </div>
                                <div class="precio-y-cantidad">
                                    <h2 class="precio-carrito">$${producto.precio * producto.cantidadSeleccionada}</h2>
                                    <h3 class="cantidad-carrito">Cant: ${producto.cantidadSeleccionada}</h3>
                                </div>
                                </div>
                            </div>
                `;
                contenedorCarritoProductos.append(div);
            });

            document.addEventListener('actualizarNumerito', function (event) {
                const nuevoNumerito = event.detail.nuevoNumerito;
                const cantidadProductosSpan = document.querySelector(".productos");
                cantidadProductosSpan.innerHTML = `Productos(${nuevoNumerito})`;
            });

            const div = document.createElement("div");
            div.classList.add("total-precio");
            div.innerHTML = `
            <p class="resumen-de-compra">Resumen de Compra</p>
            <p class="productos">Productos(${nuevoNumerito})</p>
            <div class="envio-valor">
                <p class="envio">Envíos:</p>
                <p class="valor-envio">Gratis</p>
            </div>
            <div class="carrito-precio-y-total">
                <h3 class="total-carito">Total:</h3>
                <h3 class="precio-carrito-total"></h3>
            </div>
            <div class="pagar-carrito">
                <button class="pagar-carrito-boton">Pagar</button>
            </div>
            `;
            contenedorCarritoComprado.appendChild(div);

        } else {
            contenedorCarritoVacio.classList.remove("disabled");
            contenedorTodoElCarrito.classList.add("disabled");
        }


        actualizarBotoneRemover();
        actualizarTotal();
    }

    cargarProductosCarrito();

    function actualizarBotoneRemover() {
        botonRemoverCarrito = document.querySelectorAll(".remover-carrito");
        botonRemoverCarrito.forEach(boton => {
            boton.addEventListener("click", eliminarDelCarrito);
        })
    }

    function eliminarDelCarrito(e) {
        if (productosEnCarrito.length === 0) {
            vaciarCarrito();
        }
        const idBoton = e.currentTarget.id;
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito.splice(index, 1);
        localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
        cargarProductosCarrito();
        actualizarNumerito();

    }

    botonVolver.addEventListener("click", function() {
        // Redirige a la página index.html
        window.location.href = "/index.html";
    });

    carritoVaciar.addEventListener("click", vaciarCarrito);
    function vaciarCarrito() {
        productosEnCarrito.length = 0;
        localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
        cargarProductosCarrito();
        actualizarNumerito();
        if (contenedorCarritoComprado) {
            contenedorCarritoComprado.innerHTML = "";
        }
    }
    
    
        const botonComprar = document.querySelector(".pagar-carrito-boton");
    botonComprar.addEventListener("click", comprarCarrito);
    function comprarCarrito() {

        productosEnCarrito.length = 0;
        localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        CarritoComprado.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");
        contenedorProductoCarrito.classList.add("disabled");
        actualizarNumerito();

    }


    function actualizarTotal() {
        const carritoTotal = document.querySelector(".precio-carrito-total");
        if (carritoTotal) {
            const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidadSeleccionada), 0);
            carritoTotal.innerText = `$${totalCalculado}`;
        }
    }

});