// Productos 
const productos = [
    //******************EQUIPOS ARGENTINOS***************************//
    {
        id: "Independiente-1987",
        titulo: "Camiseta  Bochini campeón 1987",
        imagen: "/imagenes/Img-productos/independiente 1987.png",
        imagenExtra: "/imagenes/Img-productos/independiente 1987 jugando.jpg",
        imagenExtra1: "/imagenes/Img-productos/independiente 1987 atras.png",
        imagenExtra2: "/imagenes/Img-productos/independiente 1987 atras 2.png",
        categoria: {
            nombre: "Equipos Argentinos",
            id: "Equipos-Argentinos",
        },
        precio: 30000
    },

    {
        id: "Boca-1998",
        titulo: "Camiseta  Riquelme campeón 1998",
        imagen: "/imagenes/Img-productos/riquelme 1998.png",
        imagenExtra: "/imagenes/Img-productos/riquelme jugando.webp",
        imagenExtra1: "/imagenes/Img-productos/riquelme 1998 atras.png",
        imagenExtra2: "/imagenes/Img-productos/riquelme 1998 atras 2.png",
        categoria: {
            nombre: "Equipos Argentinos",
            id: "Equipos-Argentinos",
        },
        precio: 30000
    },

    {
        id: "River-1995",
        titulo: "Camiseta River Adidas 1995",
        imagen: "/imagenes/Img-productos/river 1995.png",
        imagenExtra: "/imagenes/Img-productos/river 1995 jugando.webp",
        imagenExtra1: "/imagenes/Img-productos/river 1995 atras.png",
        imagenExtra2: "/imagenes/Img-productos/river 1995 atras 2.png",
        categoria: {
            nombre: "Equipos Argentinos",
            id: "Equipos-Argentinos",
        },
        precio: 30000
    },
    {
        id: "Boca-2001",
        titulo: "Boca Juniors Titular 2001",
        imagen: "/imagenes/Img-productos/boca 2001.png",
        imagenExtra: "/imagenes/Img-productos/boca 2001 jugando.webp",
        imagenExtra1: "/imagenes/Img-productos/boca 2001 atras.png",
        imagenExtra2: "/imagenes/Img-productos/boca 2001 atras 2.png",
        categoria: {
            nombre: "Equipos Argentinos",
            id: "Equipos-Argentinos",
        },
        precio: 30000
    },
    {
        id: "Racing-1993",
        titulo: "Camiseta Racing 1993",
        imagen: "/imagenes/Img-productos/racing 1993.png",
        imagenExtra: "/imagenes/Img-productos/racing 1993 jugando.jpg",
        imagenExtra1: "/imagenes/Img-productos/racing 1993 atras.png",
        imagenExtra2: "/imagenes/Img-productos/racing 1993 atras 2.png",
        categoria: {
            nombre: "Equipos Argentinos",
            id: "Equipos-Argentinos",
        },
        precio: 30000
    },
    {
        id: "Maradona-1994",
        titulo: "Camiseta Maradona 1994",
        imagen: "/imagenes/Img-productos/maradona 1994.png",
        imagenExtra: "/imagenes/Img-productos/maradona 1994 jugando.jpg",
        imagenExtra1: "/imagenes/Img-productos/maradona 1994 atras.png",
        imagenExtra2: "/imagenes/Img-productos/maradona 1994 atras 2.png",
        categoria: {
            nombre: "Equipos Argentinos",
            id: "Equipos-Argentinos",
        },
        precio: 30000
    },
    {
        id: "Rosario-1995",
        titulo: "Camiseta Rosario Central 1995",
        imagen: "/imagenes/Img-productos/rosario central 1995.png",
        imagenExtra: "/imagenes/Img-productos/rosario central 1995 jugando.jpg",
        imagenExtra1: "/imagenes/Img-productos/rosario central 1995 atras 2.png",
        imagenExtra2: "/imagenes/Img-productos/rosario central 1995 atras.png",
        categoria: {
            nombre: "Equipos Argentinos",
            id: "Equipos-Argentinos",
        },
        precio: 30000
    },
    {
        id: "Lanus-1927",
        titulo: "Camiseta Lanús 1927",
        imagen: "/imagenes/Img-productos/lanus 1927.png",
        imagenExtra: "/imagenes/Img-productos/lanus 1927 jugando.jpg",
        imagenExtra1: "/imagenes/Img-productos/lanus 1927 atras 2.png",
        imagenExtra2: "/imagenes/Img-productos/lanus 1927 atras.png",
        categoria: {
            nombre: "Equipos Argentinos",
            id: "Equipos-Argentinos",
        },
        precio: 30000
    },
    {
        id: "Belgrano-1998",
        titulo: "Camiseta Belgrano 1998",
        imagen: "/imagenes/Img-productos/belgrano 1998.png",
        imagenExtra: "/imagenes/Img-productos/belgrano 1998 jugando.jpg",
        imagenExtra1: "/imagenes/Img-productos/belgrano 1998 atras 2.png",
        imagenExtra2: "/imagenes/Img-productos/belgrano 1998 atras.png",
        categoria: {
            nombre: "Equipos Argentinos",
            id: "Equipos-Argentinos",
        },
        precio: 30000
    },
    //******************EQUIPOS EUROPEOS**********************//
    {
        id: "Liverpool-2006",
        titulo: "Camiseta Liverpool 2006",
        imagen: "/imagenes/Img-productos/liverpool 2006.png",
        imagenExtra: "/imagenes/Img-productos/liverpool 2006 jugando.webp",
        imagenExtra1: "/imagenes/Img-productos/liverpool 2006 atras 2.png",
        imagenExtra2: "/imagenes/Img-productos/liverpool 2006 atras.png",
        categoria: {
            nombre: "Equipos Europeos",
            id: "Equipos-Europeos",
        },
        precio: 30000
    },
    {
        id: "Chelsea-2008",
        titulo: "Camiseta Chelsea 2008",
        imagen: "/imagenes/Img-productos/chelsea 2008.png",
        imagenExtra: "/imagenes/Img-productos/chelsea 2008 jugando.jpg",
        imagenExtra1: "/imagenes/Img-productos/chelsea 2008 atras 2.png",
        imagenExtra2: "/imagenes/Img-productos/chelsea 2008 atras.png",
        categoria: {
            nombre: "Equipos Europeos",
            id: "Equipos-Europeos",
        },
        precio: 30000
    },
    {
        id: "Juventus-1997",
        titulo: "Camiseta Juventus 1997",
        imagen: "/imagenes/Img-productos/juventus 1997.png",
        imagenExtra: "/imagenes/Img-productos/juventus 1997 jugando.jpg",
        imagenExtra1: "/imagenes/Img-productos/juventus 1997 atras 2.png",
        imagenExtra2: "/imagenes/Img-productos/juventus 1997 atras.png",
        categoria: {
            nombre: "Equipos Europeos",
            id: "Equipos-Europeos",
        },
        precio: 30000
    },
    {
        id: "Madrid-2002",
        titulo: "Camiseta Real Madrid 2002",
        imagen: "/imagenes/Img-productos/madrid 2002.png",
        imagenExtra: "/imagenes/Img-productos/madrid 2002 jugando.jpg",
        imagenExtra1: "/imagenes/Img-productos/madrid 2002 atras 2.png",
        imagenExtra2: "/imagenes/Img-productos/madrid 2002 atras.png",
        categoria: {
            nombre: "Equipos Europeos",
            id: "Equipos-Europeos",
        },
        precio: 30000
    },
    {
        id: "Ronaldo-2007",
        titulo: "Camiseta Cristiano Ronaldo 2007",
        imagen: "/imagenes/Img-productos/ronaldo united.png",
        imagenExtra: "/imagenes/Img-productos/ronaldo united jugando.jpg",
        imagenExtra1: "/imagenes/Img-productos/ronaldo united atras 2.png",
        imagenExtra2: "/imagenes/Img-productos/ronaldo united atras.png",
        categoria: {
            nombre: "Equipos Europeos",
            id: "Equipos-Europeos",
        },
        precio: 30000
    },
    {
        id: "Kun-city",
        titulo: "Camiseta  Aguero Campeón 2011",
        imagen: "/imagenes/Img-productos/kun city.png",
        imagenExtra: "/imagenes/Img-productos/kun city jugando.jpg",
        imagenExtra1: "/imagenes/Img-productos/kun city atras 2.png",
        imagenExtra2: "/imagenes/Img-productos/kun city atras.png",
        categoria: {
            nombre: "Equipos Europeos",
            id: "Equipos-Europeos",
        },
        precio: 30000
    },
    {
        id: "Ronaldinho-2010",
        titulo: "Camiseta Ronaldinho 2010",
        imagen: "/imagenes/Img-productos/ronaldinho 2010.png",
        imagenExtra: "/imagenes/Img-productos/ronaldinho 2010 jugando.jpg",
        imagenExtra1: "/imagenes/Img-productos/ronaldinho 2010 atras 2.png",
        imagenExtra2: "/imagenes/Img-productos/ronaldinho 2010 atras.png",
        categoria: {
            nombre: "Equipos Europeos",
            id: "Equipos-Europeos",
        },
        precio: 30000
    },
    {
        id: "Nazario-1998",
        titulo: "Camiseta Ronaldo Nazario 1998",
        imagen: "/imagenes/Img-productos/nazario milan.png",
        imagenExtra: "/imagenes/Img-productos/nazario milan jugando.webp",
        imagenExtra1: "/imagenes/Img-productos/nazario milan atras 2.png",
        imagenExtra2: "/imagenes/Img-productos/nazario milan atras.png",
        categoria: {
            nombre: "Equipos Europeos",
            id: "Equipos-Europeos",
        },
        precio: 30000
    },
    {
        id: "Messi-2009",
        titulo: "Camiseta Messi 2009",
        imagen: "/imagenes/Img-productos/messi 2009.png",
        imagenExtra: "/imagenes/Img-productos/messi 2009 jugando.jpg",
        imagenExtra1: "/imagenes/Img-productos/messi 2009 atras 2.png",
        imagenExtra2: "/imagenes/Img-productos/messi 2009 atras.png",
        categoria: {
            nombre: "Equipos Europeos",
            id: "Equipos-Europeos",
        },
        precio: 30000
    },
    //******************SELECCION ARGENTINA**********************//
    {
        id: "Mundial-2006",
        titulo: "Camiseta Messi Mundial 2006",
        imagen: "/imagenes/Img-productos/messi 2006.png",
        imagenExtra: "/imagenes/Img-productos/messi 2006 jugando.jpg",
        imagenExtra1: "/imagenes/Img-productos/messi 2006 atras 2.png",
        imagenExtra2: "/imagenes/Img-productos/messi 2006 atras.png",
        categoria: {
            nombre: "Seleccion Argentina",
            id: "Seleccion-Argentina",
        },
        precio: 30000
    },
    {
        id: "Mundial-2014",
        titulo: "Camiseta Messi Mundial 2014",
        imagen: "/imagenes/Img-productos/messi 2014.png",
        imagenExtra: "/imagenes/Img-productos/messi 2014 jugando.png",
        imagenExtra1: "/imagenes/Img-productos/messi 2014 atras 2.png",
        imagenExtra2: "/imagenes/Img-productos/messi 2014 atras.png",
        categoria: {
            nombre: "Seleccion Argentina",
            id: "Seleccion-Argentina",
        },
        precio: 30000
    },
    {
        id: "Mundial-1986",
        titulo: "Camiseta Maradona Mundial 1986",
        imagen: "/imagenes/Img-productos/maradona 1986.png",
        imagenExtra: "/imagenes/Img-productos/maradona 1986 jugando.png",
        imagenExtra1: "/imagenes/Img-productos/maradona 1986 atras 2.png",
        imagenExtra2: "/imagenes/Img-productos/maradona 1986 atras.png",
        categoria: {
            nombre: "Seleccion Argentina",
            id: "Seleccion-Argentina",
        },
        precio: 30000
    },
    {
        id: "Scaloni-1994",
        titulo: "Camiseta Scaloni 1994",
        imagen: "/imagenes/Img-productos/scaloni 1994.png",
        imagenExtra: "/imagenes/Img-productos/scaloni 1994 jugando.webp",
        imagenExtra1: "/imagenes/Img-productos/scaloni 1994 atras 2.png",
        imagenExtra2: "/imagenes/Img-productos/scaloni 1994 atras.png",
        categoria: {
            nombre: "Seleccion Argentina",
            id: "Seleccion-Argentina",
        },
        precio: 30000
    },
    {
        id: "Messi-2022",
        titulo: "Camiseta Messi Campeon 2022",
        imagen: "/imagenes/Img-productos/messi 2022.png",
        imagenExtra: "/imagenes/Img-productos/messi 2022 jugando.png",
        imagenExtra1: "/imagenes/Img-productos/messi 2022 atras 2.png",
        imagenExtra2: "/imagenes/Img-productos/messi 2022 atras.png",
        categoria: {
            nombre: "Seleccion Argentina",
            id: "Seleccion-Argentina",
        },
        precio: 30000
    },
    {
        id: "Mundial-1978",
        titulo: "Camiseta Argentina Campeon 1978",
        imagen: "/imagenes/Img-productos/mundial 1978.png",
        imagenExtra: "/imagenes/Img-productos/mundial 1978 jugando.png",
        imagenExtra1: "/imagenes/Img-productos/mundial 1978 atras 2.png",
        imagenExtra2: "/imagenes/Img-productos/mundial 1978 atras.png",
        categoria: {
            nombre: "Seleccion Argentina",
            id: "Seleccion-Argentina",
        },
        precio: 30000
    },
    {
        id: "Mundial-2002",
        titulo: "Camiseta Argentina 2002",
        imagen: "/imagenes/Img-productos/mundial 2002.png",
        imagenExtra: "/imagenes/Img-productos/mundial 2002 jugando.png",
        imagenExtra1: "/imagenes/Img-productos/mundial 2002 atras 2.png",
        imagenExtra2: "/imagenes/Img-productos/mundial 2002 atras.png",
        categoria: {
            nombre: "Seleccion Argentina",
            id: "Seleccion-Argentina",
        },
        precio: 30000
    },
    {
        id: "Mundial-2010",
        titulo: "Camiseta Argentina 2010",
        imagen: "/imagenes/Img-productos/mundial 2010.png",
        imagenExtra: "/imagenes/Img-productos/mundial 2010 jugando.png",
        imagenExtra1: "/imagenes/Img-productos/mundial 2010 atras 2.png",
        imagenExtra2: "/imagenes/Img-productos/mundial 2010 atras.png",
        categoria: {
            nombre: "Seleccion Argentina",
            id: "Seleccion-Argentina",
        },
        precio: 30000
    },
    {
        id: "Argentina-1993",
        titulo: "Camiseta Argentina 1993",
        imagen: "/imagenes/Img-productos/argentina 1993.png",
        imagenExtra: "/imagenes/Img-productos/argentina 1993 jugando.png",
        imagenExtra1: "/imagenes/Img-productos/argentina 1993 atras 2.png",
        imagenExtra2: "/imagenes/Img-productos/argentina 1993 atras.png",
        categoria: {
            nombre: "Seleccion Argentina",
            id: "Seleccion-Argentina",
        },
        precio: 30000
    },
];

const numeritoCarrito = document.querySelector("#numerito");

let nuevoNumerito = 0;
function actualizarNumerito() {
    // Obengo los productos del carrito
    const productosEnCarrito = JSON.parse(localStorage.getItem('productos-en-carrito')) || [];
    nuevoNumerito = 0;

    // Recorre los productos en el carrito y suma las cantidades seleccionadas
    productosEnCarrito.forEach(producto => {
        nuevoNumerito += parseInt(producto.cantidadSeleccionada, 10) || 0;
    });

    numeritoCarrito.innerText = nuevoNumerito;

    localStorage.setItem("numerito-carrito", nuevoNumerito);

    const evento = new CustomEvent('actualizarNumerito', { detail: { nuevoNumerito } });
    document.dispatchEvent(evento);

    // Si el carrito está vacío, establecer el numerito en 0
    if (productosEnCarrito.length === 0) {
        numeritoCarrito.innerText = ``;
    }

}

actualizarNumerito();






if (window.location.href.includes('/index.html')) {

    const contenedorProducto = document.querySelector("#contenedor-productos");
    const botonesCategorias = document.querySelectorAll(".boton-categoria");
    const titulosPrincipal = document.querySelector("#tiulo-principal");

    function cargarProducto(productosElegidos) {

        contenedorProducto.innerHTML = "";

        productosElegidos.forEach(producto => {

            const div = document.createElement("div");
            div.classList.add("productos");
            // Crear enlace y agregar evento de clic
            const enlace = document.createElement("a");
            enlace.href = "/articulo.html";
            enlace.dataset.id = producto.id;
            enlace.addEventListener("click", (event) => {
                // Almacenar el ID del producto en localStorage al hacer clic
                localStorage.setItem("productoSeleccionado", event.currentTarget.dataset.id);
            });
            enlace.innerHTML = `
            <a href="/articulo.html" >
                <img src="${producto.imagen}" alt="${producto.titulo}" class="producto-imagen">
                <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <h4 class="precio-producto"> $${producto.precio}</h4>
            </a>
            `;
            div.appendChild(enlace);
            contenedorProducto.appendChild(div);
        })

    }

    cargarProducto(productos);

    botonesCategorias.forEach(boton => {
        boton.addEventListener("click", (e) => {

            if (e.currentTarget.id != "Todos") {
                const productoCategoria = productos.find(productos => productos.categoria.id === e.currentTarget.id);

                titulosPrincipal.innerText = productoCategoria.categoria.nombre;

                const productosboton = productos.filter(productos => productos.categoria.id === e.currentTarget.id);
                cargarProducto(productosboton);
            } else {
                titulosPrincipal.innerText = "Todos los Productos";
                cargarProducto(productos);

            }
        })
    });

    //BUSCADOR DE PRODUCTOS
    const buscador = document.querySelector("#buscador");
    const eslogan = document.querySelector(".eslogan");

    let seEscribioEnBuscador = false;

    const filtrar = () => {

        if (seEscribioEnBuscador) {
            eslogan.classList.add("disabled");
        }

        contenedorProducto.innerHTML = ``;

        const texto = buscador.value.toLowerCase();

        for (let producto of productos) {

            const div = document.createElement("div");
            const enlace = document.createElement("a");
            enlace.href = "/articulo.html";
            enlace.dataset.id = producto.id;
            enlace.addEventListener("click", (event) => {
                // Almacenar el ID del producto en localStorage al hacer clic
                localStorage.setItem("productoSeleccionado", event.currentTarget.dataset.id);
            });

            let nombre = producto.titulo.toLowerCase();
            if (nombre.indexOf(texto) !== -1) {

                enlace.innerHTML += `
            <div class="productos">
                <a href="/articulo.html" >
                    <img src="${producto.imagen}" alt="${producto.titulo}" class="producto-imagen">
                    <div class="producto-detalles">
                        <h3 class="producto-titulo">${producto.titulo}</h3>
                        <h4 class="precio-producto"> $${producto.precio}</h4>
                    </div>
                </a>
            </div>`;
                div.appendChild(enlace);
                contenedorProducto.appendChild(div);
            }
        }
        if (contenedorProducto.innerHTML === ``) {
            contenedorProducto.innerHTML += `<h3 class="producto-no-encontrado"> Producto no encontrado.</h3>`;
        }
    }

    const formularioBusqueda = document.querySelector("#formulario-busqueda");

    buscador.addEventListener('input', () => { //cuando empieza a escribir
        seEscribioEnBuscador = true;
        filtrar();
    });

    buscador.addEventListener('keyup', (event) => { //para escuchar el enter
        if (event.key === 'Enter') {
            event.preventDefault();
            filtrar();
        }
    });

    buscador.addEventListener('blur', () => { // cuando no escribe
        eslogan.classList.remove("disabled");
    });

    formularioBusqueda.addEventListener('submit', (event) => { // previene la accion del enter
        event.preventDefault();
        filtrar();
    });

    filtrar();

} else if (window.location.href.includes('/articulo.html')) {
    document.addEventListener('DOMContentLoaded', () => {
        actualizarNumerito();
    });

    let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

    if (productosEnCarritoLS && Array.isArray(JSON.parse(productosEnCarritoLS))) {
        productosEnCarrito = JSON.parse(productosEnCarritoLS);
    } else {
        productosEnCarrito = [];
    }

    const contenedorArticulo = document.querySelector("#contenedor-articulo");
    let botonesAgregar = document.querySelectorAll(".carrito-btn");
    const productId = localStorage.getItem("productoSeleccionado");
    const productoElegido = productos.find(producto => producto.id === productId);

    contenedorArticulo.innerHTML = "";

    if (productoElegido) {
        const div = document.createElement("div");
        div.classList.add("articulo");
        div.innerHTML = `
        <div class="articulo-datos">
            <img src="${productoElegido.imagen}" alt="" class="imagen-articulo">
            <div class="informacion-articulo">
                <h1 class="nombre-articulo">${productoElegido.titulo}</h1>
                <h3 class="precio-articulo">$${productoElegido.precio}</h3>
                <div class="talle-articulo">
                    <div class="tallas">
                        <label for="talle">Size:</label>
                        <div class="tallas-opciones">
                        <button class="talle-btn" value="XS" id="talle-XS">XS</button>
                        <button class="talle-btn" value="S" id="talle-S">S</button>
                        <button class="talle-btn" value="M" id="talle-M">M</button>
                        <button class="talle-btn" value="L" id="talle-L">L</button>
                        <button class="talle-btn" value="XL" id="talle-XL">XL</button>
                        <button class="talle-btn" value="XXL" id="talle-XXL">XXL</button>
                        </div>
                    </div>
                    <div class="cantidades">
                        <label for="cantidad">Cantidad: </label>
                        <input type="number" id="cantidad" name="cantidad" min="1" max="10" value="1" class="cantidad-numero">
                    </div>
                    <div class="botones">
                        <button class="comprar-btn boton">Comprar Ahora</button>
                        <button class="carrito-btn boton" id="${productoElegido.id}">Agregar al Carrito</button>
                    </div>
                </div>
            </div>
        </div>
        `;
        contenedorArticulo.appendChild(div);

        const imagenesExtrasContainer = document.createElement("div");

        imagenesExtrasContainer.classList.add("imagenes-extras-container");
        imagenesExtrasContainer.innerHTML = `
            <img src="${productoElegido.imagenExtra}" alt="" class="imagenes-extra">
            <img src="${productoElegido.imagenExtra1}" alt="" class="imagenes-extra">
            <img src="${productoElegido.imagenExtra2}" alt="" class="imagenes-extra">
        `;
        div.appendChild(imagenesExtrasContainer);
        contenedorArticulo.appendChild(div);
        actualizarBotones();

        

    } else {
        const contenedorArticulo = document.querySelector("#contenedor-articulo");
        contenedorArticulo.innerHTML = `<h3 class="producto-no-encontrado"> Producto no encontrado.</h3>`;
    }


    function actualizarBotones() {
        botonesAgregar = document.querySelectorAll(".carrito-btn");
        botonesAgregar.forEach(boton => {
            boton.addEventListener("click", agregarAlCarrito);
        })
    }

    function agregarAlCarrito(e) {
        const idBoton = e.currentTarget.id;
        let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");
        const cantidadSeleccionada = document.getElementById('cantidad').value;

        if (productosEnCarritoLS && !Array.isArray(JSON.parse(productosEnCarritoLS))) {
            console.log("entro 1");
            localStorage.removeItem("productos-en-carrito");
            productosEnCarrito = [];
        } else {
            console.log("entro 2");
            productosEnCarrito = JSON.parse(productosEnCarritoLS) || [];
        }
        const productoAgregado = productos.find(producto => producto.id === idBoton);
        const talleSeleccionado = obtenerTalleSeleccionado();
        if (!talleSeleccionado) {
            alert('Por favor, selecciona un talle antes de agregar al carrito.');
            return;
        }
        if (productosEnCarrito.some(producto => producto.id === idBoton && producto.talle === talleSeleccionado)) {
            console.log("entro 3");
            const index = productosEnCarrito.findIndex(producto => producto.id === idBoton && producto.talle === talleSeleccionado);
            // Sumar la nueva cantidad en lugar de incrementar en 1
            productosEnCarrito[index].cantidadSeleccionada += parseInt(cantidadSeleccionada, 10) || 0;
        } else {
            console.log("entro 4");
            productoAgregado.talle = talleSeleccionado;
            productoAgregado.cantidadSeleccionada = parseInt(cantidadSeleccionada, 10) || 0;
            productosEnCarrito.push(productoAgregado);
        }
        // Guarda los productos del carrito
        localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

        actualizarNumerito();
    }

    document.querySelectorAll('.talle-btn').forEach(boton => {
        boton.addEventListener('click', (event) => {
           
            // Resto del código...
        });
    });

    function obtenerTalleSeleccionado() {
        const botonesTalle = document.querySelectorAll('.talle-btn');
        for (const boton of botonesTalle) {
            if (boton.classList.contains('seleccionado')) {
                return boton.value;
            }
        }
        return '';
    }
    document.querySelectorAll('.talle-btn').forEach(boton => {
        boton.addEventListener('click', () => {
            document.querySelectorAll('.talle-btn').forEach(b => b.classList.remove('seleccionado'));
            boton.classList.add('seleccionado');
        });
    });

}

