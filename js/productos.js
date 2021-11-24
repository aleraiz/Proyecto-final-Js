// ENTIDADES

class AñadirProductoCarrito{

    constructor ({name,category,price,image,id}){

        this.name = name;
        this.category = category;
        this.price = price;
        this.image = image;
        this.id = id;
    }  
}


//CLASES
//VARIABLES
//FUNCIONES
//LOGICA

////////////////////////      VARIABLES      ///////////////////////

let arrayProductos=[];
let lista=[];
let listaTodosLosProductos;
let listaProductosCarrito=[];
let imprimirTodosLosProductos = $(".contenidoProductosTarjetas");
let imprimirProductosCarrito = $("#carrito-compras-imprimir");




////////////////         LLAMADA AJAX - API PRODUCTOS      ////////////////////

const url = `https://618ac9e034b4f400177c48a4.mockapi.io/api/v1/products`

    $.get(url, (respuesta, estado) =>{

        if(estado == "success") {
            // console.log(respuesta);
            
            respuesta.forEach(element => {
                // console.log(element.id);

            });
            arrayProductos.push(respuesta)
        localStorage.setItem("listaTodosLosProductos",JSON.stringify(arrayProductos[0]));
            // console.log(arrayProductos[0]);
        }
    })
    
    

if(localStorage.getItem("listaTodosLosProductos") == null){
    console.log("No hay productos para mostrar");
} else {
    listaTodosLosProductos = JSON.parse(localStorage.getItem("listaTodosLosProductos"))
}

// console.log(listaTodosLosProductos);

listaTodosLosProductos.forEach(element => {

    let index = listaTodosLosProductos.indexOf(element)
    // console.log(index);

    imprimirTodosLosProductos.append(
        `
        <div class="producto-container">
            <img src="${element.image}">
            <h3 class="texto-productos">${element.name}</h3>
            <h4 class="texto-productos">$ ${element.price}</h4>
            <span><button class="btn-comprar" onclick="comprar(${index})">Agregar <i class="usuario__iconos fas fa-shopping-bag" aria-hidden="true"></i></button></span>
        </div>
        `
    );
})



// Comprar productos - Agregar productos al carrito

const comprar = (index) =>{
    if (listaProductosCarrito.lenght == null) {
        listaProductosCarrito = [];
    } else {
        listaProductosCarrito = JSON.parse(localStorage.getItem("listaCarrito"))
    }
    console.log(listaProductosCarrito);
    listaProductosCarrito.push(listaTodosLosProductos[index])
    localStorage.setItem("listaCarrito",JSON.stringify(listaProductosCarrito))
}

// Imprimir productos del carrito(localstorage) en carrito

if(localStorage.getItem("listaCarrito") == null){
    console.log("No hay productos para mostrar");
} else {
    listaProductosCarrito = JSON.parse(localStorage.getItem("listaCarrito"))
}

// console.log(listaProductosCarrito);

if (listaProductosCarrito.length != 0) {
    listaProductosCarrito.forEach(element =>{

        imprimirProductosCarrito.append(
            `
            <div class="producto-carrito">
                <div>
                    <img src="${element.image}">
                </div>
                <div class="producto-carrito-info">
                    <p>${element.name}</p>
                    <p>$ ${element.price}</p>
                    <i class="fas fa-times" id="btn-eliminar-producto-carrito"></i>
                </div>
            </div>
            
            `
        )
    })
} else {
    imprimirProductosCarrito.append(
        `
        <div class="producto-carrito">
            <div class="producto-carrito-info">
                <p>Carrito vacío</p>
            </div>
        </div>
        
        `
    )
}

// Compra en carrito

const finalizarCompra = ()=>{

    let monto = 0

    listaProductosCarrito.forEach(element => {
        monto += JSON.parse(element.price)
    });

    document.getElementById("total-carrito-compra").textContent = `$ ${monto}`;
}

finalizarCompra()



////////////////////////////    DARK MODE     /////////////////////////


const darkMode = () => {
    document.getElementById("linkTheme").href = "../estilos/darkMode/darkMode.css"
    localStorage.setItem("theme", "dark")
}

const lightMode = () => {
    document.getElementById("linkTheme").href = "../estilos/main.css"
    localStorage.setItem("theme", "light")
}

document.getElementById("btn-darkMode").addEventListener("click", ()=>{
    if(localStorage.getItem("theme") === "dark"){
        lightMode()
    } else {
        darkMode()
    }
})

////////////////////////////   SHOW/HIDE CARRITO DE COMPRAS     /////////////////////////

const carritoShow = () =>{
    $(".carrito-compras").css("top", "60px");
    localStorage.setItem("carrito","show")
}

const carritoHide = () =>{
    $(".carrito-compras").css("top", "-900px");
    localStorage.setItem("carrito","hide")
}

$("#btn-carrito-compras").on("click", ()=>{
    if(localStorage.getItem("carrito") === "show"){
        carritoHide()
    } else {
        carritoShow()
    }
});

//////////////////////////   SHOW/HIDE ingresar-cuenta     /////////////////////////

const cuentaShow = () =>{
    $(".cuenta-usuario").css("top", "60px");
    localStorage.setItem("cuenta","show")
}

const cuentaHide = () =>{
    $(".cuenta-usuario").css("top", "-900px");
    localStorage.setItem("cuenta","hide")
}

$("#btn-cuenta-usuario").on("click", ()=>{
    if(localStorage.getItem("cuenta") === "show"){
        cuentaHide()
    } else {
        cuentaShow()
    }
});