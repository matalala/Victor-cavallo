

let botonFiltro = document.getElementById("cerrar-filtro");
let filtrado = document.getElementById('filtrado')
let contenedorPrinsipal = document.getElementById("contenedor-pricipal")
let botonBuscar = document.getElementById("boton-buscador")
let contenedorProductos = document.getElementById('contenedor-productos')

botonBuscar.onclick = (e) => {
    e.preventDefault()
    let producto = document.getElementById("buscador")
    console.log(producto.value)
    document.getElementById("productos").innerHTML = producto.value
    producto.value = ""
}

const cerrarFiltrado = () => {
    if (botonFiltro.innerHTML === "&gt;") {

        botonFiltro.innerHTML = "&lt;"
        contenedorPrinsipal.style.gridTemplateColumns = "20% 5% 75%"
        filtrado.style.display = "flex"
        filtrado.style.visibility = "visible"
        contenedorProductos.style.margin = "0px"
    }
    else {
        botonFiltro.innerHTML = "&gt;",
            contenedorPrinsipal.style.gridTemplateColumns = "0% 5% 75%"
        filtrado.style.display = "none"
        filtrado.style.visibility = "hidden"
        contenedorProductos.style.margin = "0px  0px 0px 100px"
    }
}
botonFiltro.onclick = cerrarFiltrado;

