const basedatos = [
    {
        id: 1,
        nombre: "Patata",
        precio: 10,
        descripcion: "Papas Blancas de Tierra Negra",
        imagen: './assets/1.jpg'
    },
    {
        id: 2,
        nombre: 'Cebolla',
        precio: 1.2,
        descripcion: "Blanca de Veracruz",
        imagen: './assets/2.jpg'
    },
    {
        id: 3,
        nombre: 'Calabacin',
        precio: 2.1,
        descripcion: "Fresco y Tierno",
        imagen: './assets/3.jpg'
    },
    {
        id: 4,
        nombre: 'Fresas',
        precio: 0.6,
        descripcion: "De la huerta a su mesa",
        imagen: './assets/4.jpg'
    }
];

let carrito = [];

const divisa = '$';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');

//Funciones

//Funcion agregar los elemetos del Json a productos

function renderizarProductos(){
    basedatos.forEach((info) => {
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-4');
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');
        // Titulo
        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info.nombre;
        // Subtitulo
        const miNodoSubTitle = document.createElement('h6');
        miNodoSubTitle.classList.add('card-subtitle');
        miNodoSubTitle.textContent = info.descripcion;
        // Imagen
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info.imagen);
        // Precio
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = `${divisa}${info.precio}`;
        // Boton 
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = '+ Agregar';
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);

        // Insertamos
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoSubTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);
    });
}

function anyadirProductoAlCarrito(evento) {
    // Anyadimos el Nodo a nuestro carrito
    carrito.push(evento.target.getAttribute('marcador'))
    // Actualizamos el carrito 
    renderizarCarrito();
}

function renderizarCarrito(){
 // Vaciamos todo el html
 DOMcarrito.textContent = '';
 // Quitamos los duplicados
 const carritoSinDuplicados = [...new Set(carrito)];
 // Generamos los Nodos a partir de carrito
 carritoSinDuplicados.forEach((item) => {
     // Obtenemos el item que necesitamos de la variable base de datos
     const miItem = basedatos.filter((itemBaseDatos) => {
         // ¿Coincide las id? Solo puede existir un caso
         return itemBaseDatos.id === parseInt(item);
     });
     // Cuenta el número de veces que se repite el producto
     const numeroUnidadesItem = carrito.reduce((total, itemId) => {
         // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
         return itemId === item ? total += 1 : total;
     }, 0);
     // Creamos el nodo del item del carrito
     const miNodo = document.createElement('li');
     miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
     miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
     // Boton de borrar
     const miBoton = document.createElement('button');
     miBoton.classList.add('btn', 'btn-danger', 'mx-5');
     miBoton.textContent = 'X';
     miBoton.style.marginLeft = '1rem';
     miBoton.dataset.item = item;
     miBoton.addEventListener('click', borrarItemCarrito);
     // Mezclamos nodos
     miNodo.appendChild(miBoton);
     DOMcarrito.appendChild(miNodo);
 });
// Renderizamos el precio total en el HTML
//DOMtotal.textContent = calcularTotal();
}

function borrarItemCarrito(evento) {
    // Obtenemos el producto ID que hay en el boton pulsado
    const id = evento.target.dataset.item;
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    // volvemos a renderizar
    renderizarCarrito();
}