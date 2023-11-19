const productos = [
    {
        id: 1,
        nombre: "511 SLIM FIT",
        precio: 69.900,
        categoria: ["jeans", "hombre"],
        img: ["https://levisarg.vtexassets.com/arquivos/ids/791724-800-auto?v=638296311027400000&width=800&height=auto&aspect=true", "https://levisarg.vtexassets.com/arquivos/ids/791725-800-auto?v=638296311042770000&width=800&height=auto&aspect=true", "https://levisarg.vtexassets.com/arquivos/ids/791726-800-auto?v=638296311053700000&width=800&height=auto&aspect=true"]
    },
    {
        id: 2,
        nombre: "MINI TEE FULL PRINT",
        precio: 34.900,
        categoria: ["remeras", "mujere"],
        img: ["https://levisarg.vtexassets.com/arquivos/ids/790325-800-auto?v=638295273212300000&width=800&height=auto&aspect=true", "https://levisarg.vtexassets.com/arquivos/ids/790326-800-auto?v=638295273224170000&width=800&height=auto&aspect=true", "https://levisarg.vtexassets.com/arquivos/ids/790327-800-auto?v=638295273237300000&width=800&height=auto&aspect=true"]
    },
    {
        id: 3,
        nombre: 'OVERSIZED CREW SWEATSHIRT "BATWING FLOWERS" kids',
        precio: 33.590,
        categoria: ["sweater", "kids"],
        img: ["https://levisarg.vtexassets.com/arquivos/ids/556973-800-auto?v=637965315606030000&width=800&height=auto&aspect=true", "https://levisarg.vtexassets.com/arquivos/ids/556974-800-auto?v=637965315613570000&width=800&height=auto&aspect=true"]
    },
    {
        id: 4,
        nombre: "MINI TEE FULL PRINT",
        precio: 34.900,
        categoria: ["remeras", "mujere"],
        img: ["https://levisarg.vtexassets.com/arquivos/ids/790325-800-auto?v=638295273212300000&width=800&height=auto&aspect=true", "https://levisarg.vtexassets.com/arquivos/ids/790326-800-auto?v=638295273224170000&width=800&height=auto&aspect=true", "https://levisarg.vtexassets.com/arquivos/ids/790327-800-auto?v=638295273237300000&width=800&height=auto&aspect=true"]
    },
    {
        id: 5,
        nombre: 'OVERSIZED CREW SWEATSHIRT "BATWING FLOWERS" kids',
        precio: 33.590,
        categoria: ["sweater", "kids"],
        img: ["https://levisarg.vtexassets.com/arquivos/ids/556973-800-auto?v=637965315606030000&width=800&height=auto&aspect=true", "https://levisarg.vtexassets.com/arquivos/ids/556974-800-auto?v=637965315613570000&width=800&height=auto&aspect=true"]
    },
    {
        id: 6,
        nombre: "511 SLIM FIT",
        precio: 69.900,
        categoria: ["jeans", "hombre"],
        img: ["https://levisarg.vtexassets.com/arquivos/ids/791724-800-auto?v=638296311027400000&width=800&height=auto&aspect=true", "https://levisarg.vtexassets.com/arquivos/ids/791725-800-auto?v=638296311042770000&width=800&height=auto&aspect=true", "https://levisarg.vtexassets.com/arquivos/ids/791726-800-auto?v=638296311053700000&width=800&height=auto&aspect=true"]
    },
    {
        id: 7,
        nombre: "MINI TEE FULL PRINT",
        precio: 34.900,
        categoria: ["remeras", "mujere"],
        img: ["https://levisarg.vtexassets.com/arquivos/ids/790325-800-auto?v=638295273212300000&width=800&height=auto&aspect=true", "https://levisarg.vtexassets.com/arquivos/ids/790326-800-auto?v=638295273224170000&width=800&height=auto&aspect=true", "https://levisarg.vtexassets.com/arquivos/ids/790327-800-auto?v=638295273237300000&width=800&height=auto&aspect=true"]
    },
    {
        id: 8,
        nombre: 'OVERSIZED CREW SWEATSHIRT "BATWING FLOWERS" kids',
        precio: 33.590,
        categoria: ["sweater", "kids"],
        img: ["https://levisarg.vtexassets.com/arquivos/ids/556973-800-auto?v=637965315606030000&width=800&height=auto&aspect=true", "https://levisarg.vtexassets.com/arquivos/ids/556974-800-auto?v=637965315613570000&width=800&height=auto&aspect=true"]
    },
    {
        id: 9,
        nombre: "MINI TEE FULL PRINT",
        precio: 34.900,
        categoria: ["remeras", "mujere"],
        img: ["https://levisarg.vtexassets.com/arquivos/ids/790325-800-auto?v=638295273212300000&width=800&height=auto&aspect=true", "https://levisarg.vtexassets.com/arquivos/ids/790326-800-auto?v=638295273224170000&width=800&height=auto&aspect=true", "https://levisarg.vtexassets.com/arquivos/ids/790327-800-auto?v=638295273237300000&width=800&height=auto&aspect=true"]
    },
    {
        id: 10,
        nombre: "511 SLIM FIT",
        precio: 69.900,
        categoria: ["jeans", "hombre"],
        img: ["https://levisarg.vtexassets.com/arquivos/ids/791724-800-auto?v=638296311027400000&width=800&height=auto&aspect=true", "https://levisarg.vtexassets.com/arquivos/ids/791725-800-auto?v=638296311042770000&width=800&height=auto&aspect=true", "https://levisarg.vtexassets.com/arquivos/ids/791726-800-auto?v=638296311053700000&width=800&height=auto&aspect=true"]
    },
    {
        id: 11,
        nombre: "MINI TEE FULL PRINT",
        precio: 34.900,
        categoria: ["remeras", "mujere"],
        img: ["https://levisarg.vtexassets.com/arquivos/ids/790325-800-auto?v=638295273212300000&width=800&height=auto&aspect=true", "https://levisarg.vtexassets.com/arquivos/ids/790326-800-auto?v=638295273224170000&width=800&height=auto&aspect=true", "https://levisarg.vtexassets.com/arquivos/ids/790327-800-auto?v=638295273237300000&width=800&height=auto&aspect=true"]
    },
    {
        id: 12,
        nombre: 'OVERSIZED CREW SWEATSHIRT "BATWING FLOWERS" kids',
        precio: 33.590,
        categoria: ["sweater", "kids"],
        img: ["https://levisarg.vtexassets.com/arquivos/ids/556973-800-auto?v=637965315606030000&width=800&height=auto&aspect=true", "https://levisarg.vtexassets.com/arquivos/ids/556974-800-auto?v=637965315613570000&width=800&height=auto&aspect=true"]
    },
    {
        id: 13,
        nombre: "MINI TEE FULL PRINT",
        precio: 34.900,
        categoria: ["remeras", "mujere"],
        img: ["https://levisarg.vtexassets.com/arquivos/ids/790325-800-auto?v=638295273212300000&width=800&height=auto&aspect=true", "https://levisarg.vtexassets.com/arquivos/ids/790326-800-auto?v=638295273224170000&width=800&height=auto&aspect=true", "https://levisarg.vtexassets.com/arquivos/ids/790327-800-auto?v=638295273237300000&width=800&height=auto&aspect=true"]
    },
    {
        id: 14,
        nombre: 'OVERSIZED CREW SWEATSHIRT "BATWING FLOWERS" kids',
        precio: 33.590,
        categoria: ["sweater", "kids"],
        img: ["https://levisarg.vtexassets.com/arquivos/ids/556973-800-auto?v=637965315606030000&width=800&height=auto&aspect=true", "https://levisarg.vtexassets.com/arquivos/ids/556974-800-auto?v=637965315613570000&width=800&height=auto&aspect=true"]
    },
    {
        id: 15,
        nombre: "511 SLIM FIT",
        precio: 69.900,
        categoria: ["jeans", "hombre"],
        img: ["https://levisarg.vtexassets.com/arquivos/ids/791724-800-auto?v=638296311027400000&width=800&height=auto&aspect=true", "https://levisarg.vtexassets.com/arquivos/ids/791725-800-auto?v=638296311042770000&width=800&height=auto&aspect=true", "https://levisarg.vtexassets.com/arquivos/ids/791726-800-auto?v=638296311053700000&width=800&height=auto&aspect=true"]
    },
    {
        id: 16,
        nombre: "MINI TEE FULL PRINT",
        precio: 34.900,
        categoria: ["remeras", "mujere"],
        img: ["https://levisarg.vtexassets.com/arquivos/ids/790325-800-auto?v=638295273212300000&width=800&height=auto&aspect=true", "https://levisarg.vtexassets.com/arquivos/ids/790326-800-auto?v=638295273224170000&width=800&height=auto&aspect=true", "https://levisarg.vtexassets.com/arquivos/ids/790327-800-auto?v=638295273237300000&width=800&height=auto&aspect=true"]
    },
    {
        id: 17,
        nombre: 'OVERSIZED CREW SWEATSHIRT "BATWING FLOWERS" kids',
        precio: 33.590,
        categoria: ["sweater", "kids"],
        img: ["https://levisarg.vtexassets.com/arquivos/ids/556973-800-auto?v=637965315606030000&width=800&height=auto&aspect=true", "https://levisarg.vtexassets.com/arquivos/ids/556974-800-auto?v=637965315613570000&width=800&height=auto&aspect=true"]
    },
    {
        id: 18,
        nombre: "MINI TEE FULL PRINT",
        precio: 34.900,
        categoria: ["remeras", "mujere"],
        img: ["https://levisarg.vtexassets.com/arquivos/ids/790325-800-auto?v=638295273212300000&width=800&height=auto&aspect=true", "https://levisarg.vtexassets.com/arquivos/ids/790326-800-auto?v=638295273224170000&width=800&height=auto&aspect=true", "https://levisarg.vtexassets.com/arquivos/ids/790327-800-auto?v=638295273237300000&width=800&height=auto&aspect=true"]
    },
    {
        id: 19,
        nombre: "MINI TEE FULL PRINT",
        precio: 34.900,
        categoria: ["remeras", "mujere"],
        img: ["https://levisarg.vtexassets.com/arquivos/ids/790325-800-auto?v=638295273212300000&width=800&height=auto&aspect=true", "https://levisarg.vtexassets.com/arquivos/ids/790326-800-auto?v=638295273224170000&width=800&height=auto&aspect=true", "https://levisarg.vtexassets.com/arquivos/ids/790327-800-auto?v=638295273237300000&width=800&height=auto&aspect=true"]
    },
]
let filtrado = document.getElementById('filtrado')
let botonBuscar = document.getElementById("boton-buscador")
let contenedorProductos = document.getElementById('contenedor-productos')
let btnImg = document.querySelectorAll('.btn-img')
let menuHamburgesa = document.getElementsByClassName('menu-hamburgesa')
let menus = document.querySelectorAll('#menu-boton')
let btnfiltrado = document.querySelectorAll(".btn-filtrado")
let buscador = document.getElementById("buscador")
let contenedorDetalle=document.getElementById("contenedor-detalle")
let btnLogeo=document.querySelector('.btn-logeo')
btnLogeo.onclick=()=>{alert("logeo")}

let betfiltradoactivado = ""

document.addEventListener('DOMContentLoaded', () => {
    if(window.location.search.substring(4)){
        mostrarDetalle(window.location.search.substring(4))
    }
    actualizarproductos("menu-carrito")
    actualizarproductos("menu-favoritos")
    btnfiltrado.forEach(e => { e.onclick = () => { filtrar(e.innerHTML.toLowerCase(), productos) } })
    if(contenedorProductos){
        mostrarProductos(productos)

    }
    window.addEventListener('resize', () => {
        if (document.documentElement.clientWidth > 988) {
            filtrado.style.height = "fit-content"
            filtrado.style.display = "flex"
            filtrado.style.visibility = 'visible'
        } else {
            filtrado.style.visibility = 'hidden'
            filtrado.style.height = '0px'
            filtrado.style.transition = "0s"
        }
    })
    menuHamburgesa[0].onclick = () => {
        menus.forEach(e => e.style.display = 'none')
        filtrado.style.visibility == 'visible' ?
            (filtrado.style.height = '0px', filtrado.style.visibility = 'hidden') :
            (filtrado.style.height = '300px', filtrado.style.visibility = 'visible', filtrado.style.display = 'flex')
    }
    btnImg.forEach((e) => {
        e.onclick = (e) => { abrirboton(e) }
    })

    botonBuscar.onclick = (e) => {
        e.preventDefault()
        if (!betfiltradoactivado.length) {
            buscador.value.length ?
                (mostrarProductos(productos.filter(elemento => elemento.nombre.toLowerCase().includes(buscador.value.toLowerCase())))
                    , buscador.value = "") :
                alert("ingresa algun nombre")
        } else {
            filtrar(betfiltradoactivado, productos.filter(elemento => elemento.nombre.toLowerCase().includes(buscador.value.toLowerCase())))
        }
    }


    const abrirboton = (elemento) => {
        menus.forEach((e) => {
            e.className === elemento.target.id ?
                e.style.display == 'flex' ?
                    e.style.display = 'none' : e.style.display = 'flex'
                : e.style.display = 'none'
        })
    }
})

const mostrarProductos = (producto) => {
    contenedorProductos.innerHTML = ""
    producto.length ?
        producto.forEach((e) => {
            const article = document.createElement('article')
            const img = document.createElement('img')
            const div = document.createElement('div')
            const h5 = document.createElement('h5')
            const a = document.createElement('a')
            const btnagregar = document.createElement('button')
            const btnfavorito = document.createElement('button')
            article.className = "card m-4"
            article.id = "cart"
            article.style.width = "250px"
            img.src = e.img[0]
            img.className = "card-img-top"
            div.className = "card-body"
            h5.className = "card-title"
            h5.innerHTML = e.nombre
            a.href="./page/detalle.html?id="+e.id
            a.appendChild(h5)
            btnagregar.className = "btn m-1 btn-primary"
            btnagregar.innerHTML = "Agregar al carrito"
            btnagregar.id = "menu-carrito"
            btnagregar.onclick = (elemento) => { actualizarcarrito(e.id, elemento.target.id) }
            btnfavorito.className = "btn m-1 btn-primary"
            btnfavorito.innerHTML = "Agregar al favoritos"
            btnfavorito.id = "menu-favoritos"
            btnfavorito.onclick = (elemento) => { actualizarfavorito(elemento.target.id,e.id) }
            div.appendChild(a)
            div.appendChild(btnagregar)
            div.appendChild(btnfavorito)
            article.appendChild(img)
            article.appendChild(div)
            
            contenedorProductos.appendChild(article)
        })
        :
        contenedorProductos.innerHTML = "<h1>No se encontraron los productos</h1>"

}

const filtrar = (e, productos) => {
    betfiltradoactivado = e
    mostrarProductos(productos.filter(elemento => elemento.categoria.includes(e)))
}

const consultarLocalStorage = (tipo) => {
    const local = JSON.parse(localStorage.getItem(tipo))
    if (!local?.length) {
        return []
    } else return local
}

const modificarLocalStorage = (tipo, obj) => {
    localStorage.setItem(tipo, JSON.stringify(obj))
}

const actualizarproductos = (tipo) => {
    const productos = consultarLocalStorage(tipo)
    const contenedor = document.getElementsByClassName(tipo)
    contenedor[0].innerHTML = ""
    if (tipo == "menu-carrito") {
        if (productos.length) {
            let total = 0
            const precioTotal = document.createElement('p')
            productos.forEach(e => {
                const cart = document.createElement('div')
                const nombre = document.createElement('spam')
                const contenedorCantidad = document.createElement("div")
                const img = document.createElement('img')
                const precio = document.createElement('spam')
                const cantidad = document.createElement('spam')
                const mas = document.createElement('buttom')
                mas.onclick=()=>{actualizarcarrito(e.id,tipo)}
                const menos = document.createElement('buttom')
                menos.onclick=()=>{restar(e.id,tipo)}
                const btneliminar = document.createElement('buttom')
                img.src = e.img[0]
                nombre.innerHTML = e.nombre
                precio.innerHTML = '$' + (e.precio * e.cantidad)
                cantidad.innerHTML = e.cantidad
                total = total + e.precio * e.cantidad
                mas.innerHTML = "+"
                menos.innerHTML = "-"
                btneliminar.innerHTML="borrar"
                btneliminar.onclick=()=>{eliminarLocal(e.id,tipo)}
                cart.appendChild(img)
                cart.appendChild(nombre)
                cart.appendChild(precio)
                cart.appendChild(btneliminar)
                contenedorCantidad.appendChild(mas)
                contenedorCantidad.appendChild(cantidad)
                console.log(cantidad)
                contenedorCantidad.appendChild(menos)
                cart.appendChild(contenedorCantidad)
                contenedor[0].appendChild(cart)
            })
            console.log(total)
            precioTotal.innerHTML = "$" + total
            contenedor[0].appendChild(precioTotal)
        }else{
            contenedor[0].innerHTML='<h4>no hay porductos en el carrito</h4>'
        }
    } else {
        if (productos.length) {
            productos.forEach(e => {
                const btnagregar = document.createElement('button')
                btnagregar.className = "btn m-1 btn-primary"
                btnagregar.innerHTML = "Agregar al carrito"
                btnagregar.id = "menu-carrito"
                const btneliminar = document.createElement('buttom')
                btnagregar.onclick = (elemento) => { actualizarcarrito(e.id, elemento.target.id) }
                const cart = document.createElement('div')
                const img = document.createElement('img')
                const nombre = document.createElement('spam')
                btneliminar.innerHTML="borrar"
                btneliminar.onclick=()=>{eliminarLocal(tipo,e.id)}
                img.src = e.img[0]
                nombre.innerHTML = e.nombre
                cart.appendChild(img)
                cart.appendChild(nombre)
                cart.appendChild(btnagregar)
                cart.appendChild(btneliminar)
                contenedor[0].appendChild(cart)
            })
        }else{
            contenedor[0].innerHTML='<h4>no hay porductos en el carrito</h4>'
        }
    }

}


const actualizarcarrito = (id, tipo) => {
    const productosL = consultarLocalStorage(tipo)
    let obj = []
    if (productosL.some(e => e.id == id)) {
        obj = productosL.map(element => {
            if (element.id == id) {
                return {
                    ...element,
                    cantidad: element.cantidad + 1
                }
            } else {
                return element
            }
        })
        console.log(obj)
    } else {
        let agregar = productos.filter(e => e.id == id)[0]
        obj = [...productosL, { ...agregar, cantidad: 1 }]
    }
    modificarLocalStorage(tipo, obj)
    actualizarproductos(tipo)
}

const actualizarfavorito = (tipo, id) => {
    const productosL = consultarLocalStorage(tipo)
    if (!productosL.some(e => e.id == id)) {
        console.log(productos.filter(e => e.id == id),id)
        let obj = [...productosL, ...productos.filter(e => e.id == id)]
        modificarLocalStorage(tipo, obj)
        actualizarproductos(tipo)
    }
}

const eliminarLocal=(tipo,id)=>{
    let productosL = consultarLocalStorage(tipo)
    productosL=productosL.filter(e=>e.id !=id)
    modificarLocalStorage(tipo, productosL)
    actualizarproductos(tipo)
}


const mostrarDetalle=(id)=>{
    let producto={...productos.filter(e=>e.id==id)[0]}
    
    console.log(producto)
    const div = document.createElement("div")
    div.className="imgContenedor"
    const divImgSecundaria = document.createElement("div")
    divImgSecundaria.className="imgsecundarias"
    const precio = document.createElement("h3")
    precio.className="precioDetalle"
    const nombre = document.createElement("h1")
    const btnagregar = document.createElement('button')
    const btnfavorito = document.createElement('button')
    const imgPrincipal = document.createElement('img')
    nombre.innerHTML=producto.nombre
    nombre.className="nombreDetalle"
    btnagregar.className = "btn m-1 btn-primary"
    btnagregar.innerHTML = "Agregar al carrito"
    btnagregar.id = "menu-carrito"
    btnagregar.onclick = (elemento) => { actualizarcarrito(id, elemento.target.id) }
    btnfavorito.className = "btn m-1 btn-primary"
    btnfavorito.innerHTML = "Agregar al favoritos"
    btnfavorito.id = "menu-favoritos"
    btnfavorito.onclick = (elemento) => { actualizarfavorito(elemento.target.id,id) }
    imgPrincipal.src=producto.img[0]
    imgPrincipal.className="imgPrincipal"
    precio.innerHTML="$"+producto.precio
    precio.className="precioDetalle"
    div.appendChild(imgPrincipal)
    producto.img.forEach(e=>{
        const img = document.createElement('img')
        img.className="imgSecundaria"
        img.src=e
        img.onclick=()=>{
            let div=document.getElementsByClassName("imgContenedor")
            div[0].childNodes[0].src=e
        }
        divImgSecundaria.appendChild(img)
    })

   contenedorDetalle.appendChild(nombre)
   div.appendChild(divImgSecundaria)
    contenedorDetalle.appendChild(div)
    contenedorDetalle.appendChild(precio)
    contenedorDetalle.appendChild(btnagregar)
    contenedorDetalle.appendChild(btnfavorito)
}

const restar=(id,tipo)=>{
    let productosL=consultarLocalStorage(tipo)
    let obj=[]
    productosL.forEach(e=>{
        if(e.id==id){
            if(e.cantidad>1){
                e.cantidad--
                obj.push(e)
            }
        }else{
            obj.push(e)
        }
    })
    modificarLocalStorage(tipo, obj)
    actualizarproductos(tipo)
    
}