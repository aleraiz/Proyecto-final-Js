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


////////////////////////      VARIABLES      ///////////////////////
let listaTodosLosProductosNueva;
let listaTodosLosProductos=[];
let listaProductosCarrito=[];
let imprimirTodosLosProductos = $(".contenidoProductosTarjetas");
let imprimirProductosCarrito = $("#carrito-compras-imprimir");

////////////////         LLAMADA AJAX - API PRODUCTOS      ////////////////////

const url = `https://618ac9e034b4f400177c48a4.mockapi.io/api/v1/products`

    $.get(url, (respuesta, estado) =>{

        if(estado == "success") {

            respuesta.forEach(element => {
                listaTodosLosProductos.push(element)
            });
        }

        localStorage.setItem("lista",JSON.stringify(listaTodosLosProductos))
    })


listaTodosLosProductosNueva = JSON.parse(localStorage.getItem("lista"));


listaTodosLosProductosNueva.forEach(element =>{

    let index = listaTodosLosProductosNueva.indexOf(element)
    
    
    imprimirTodosLosProductos.append(
        `
        <div class="producto-container">
            <img src="${element.image}">
            <h3 class="texto-productos">${element.name}</h3>
            <h4 class="texto-productos">$ ${element.price}</h4>
            <span><button class="btn-comprar" id="btn-${element.id}" onclick="comprar(${index}) ">Agregar <i class="usuario__iconos fas fa-shopping-bag" aria-hidden="true"></i></button></span>
        </div>
        `
    );
})


const comprar = (index) =>{


    if (localStorage.getItem("listaCarrito") == null) {
        listaProductosCarrito = [];
    } else {
        listaProductosCarrito = JSON.parse(localStorage.getItem("listaCarrito"))
    }

    listaProductosCarrito.push(listaTodosLosProductosNueva[index])
    localStorage.setItem("listaCarrito",JSON.stringify(listaProductosCarrito))
}




// Imprimir productos del carrito(localstorage) en carrito

if(localStorage.getItem("listaCarrito") == null){
    console.log("No hay productos para mostrar en el carrito");
} else {
    listaProductosCarrito = JSON.parse(localStorage.getItem("listaCarrito"))
}



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

// Vaciar carrito

document.getElementById("btn-vaciar-carrito").addEventListener("click",()=>{
    localStorage.removeItem('listaCarrito');
})


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