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
let imprimirTodosLosProductos = document.getElementById("imprimirTarjetasProductos");
let productosCarrito = document.getElementById("carrito-compras-imprimir");
const prendasSuperiores = document.getElementById("btn-prendas-superiores");
const prendasInferiores = document.getElementById("btn-prendas-inferiores");
const zapatos = document.getElementById("btn-zapatos");
const accesorios = document.getElementById("btn-accesorios");
const todos = document.getElementById("btn-productos-todos");
let montoCarrito = document.getElementById("total-carrito-compra")


////////////////////////////////////////////////////////////////////                            LLAMADA AJAX - API PRODUCTOS                     ////////////////////////////////////////////////////////////

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


////////////////////////////////////////////////////////////////////                            IMPRESION PRODUCTOS                     ////////////////////////////////////////////////////////////

listaTodosLosProductosNueva.forEach(element => {
    
    let indexOf = listaTodosLosProductosNueva.indexOf(element);
    let index = listaTodosLosProductosNueva[indexOf].id;

    imprimirTodosLosProductos.innerHTML += `
        
    <div class="producto-container">
        <img src="${element.image}">
        <h3 class="texto-productos">${element.name}</h3>
        <h4 class="texto-productos">$ ${element.price}</h4>
        <span><button class="btn-comprar" id="${element.id}" onclick="comprar(${index}) ">Agregar <i class="usuario__iconos fas fa-shopping-bag" aria-hidden="true"></i></button></span>
    </div>
    `
});


////////////////////////////////////////////////////////////////////                            FILTRAR PRODUCTOS                      ////////////////////////////////////////////////////////////

let listaFiltradaZapatos = listaTodosLosProductosNueva.filter(obj => obj.category === "zapatos");
let listaFiltradaAccesorios = listaTodosLosProductosNueva.filter(obj => obj.category === "accesorios");
let listaFiltradaSuperiores = listaTodosLosProductosNueva.filter(obj => obj.category === "superiores");
let listaFiltradaInferiores = listaTodosLosProductosNueva.filter(obj => obj.category === "pantalones");

// PRENDAS SUPERIORES

const mostrarPrendasSuperiores = prendasSuperiores.addEventListener("click", ()=>{
    imprimirTodosLosProductos.innerHTML = ` `

    listaFiltradaSuperiores.forEach(element => {
    
        let indexOf = listaTodosLosProductosNueva.indexOf(element);
        let index = listaTodosLosProductosNueva[indexOf].id;
    
    
        imprimirTodosLosProductos.innerHTML += `
            
        <div class="producto-container">
            <img src="${element.image}">
            <h3 class="texto-productos">${element.name}</h3>
            <h4 class="texto-productos">$ ${element.price}</h4>
            <span><button class="btn-comprar" id="btn-${element.id}" onclick="comprar(${index}) ">Agregar <i class="usuario__iconos fas fa-shopping-bag" aria-hidden="true"></i></button></span>
        </div>
        `
    });

})

// PRENDAS INFERIORES

const mostrarPrendasInferiores = prendasInferiores.addEventListener("click", ()=>{
    imprimirTodosLosProductos.innerHTML = ` `

    listaFiltradaInferiores.forEach(element => {
    
        let indexOf = listaTodosLosProductosNueva.indexOf(element);
        let index = listaTodosLosProductosNueva[indexOf].id;
    
    
        imprimirTodosLosProductos.innerHTML += `
            
        <div class="producto-container">
            <img src="${element.image}">
            <h3 class="texto-productos">${element.name}</h3>
            <h4 class="texto-productos">$ ${element.price}</h4>
            <span><button class="btn-comprar" id="btn-${element.id}" onclick="comprar(${index}) ">Agregar <i class="usuario__iconos fas fa-shopping-bag" aria-hidden="true"></i></button></span>
        </div>
        `
    });

});

// ZAPATOS

const mostrarZapatos = zapatos.addEventListener("click", ()=>{
    imprimirTodosLosProductos.innerHTML = ` `

    listaFiltradaZapatos.forEach(element => {
    
        let indexOf = listaTodosLosProductosNueva.indexOf(element);
        let index = listaTodosLosProductosNueva[indexOf].id;
    
    
        imprimirTodosLosProductos.innerHTML += `
            
        <div class="producto-container">
            <img src="${element.image}">
            <h3 class="texto-productos">${element.name}</h3>
            <h4 class="texto-productos">$ ${element.price}</h4>
            <span><button class="btn-comprar" id="btn-${element.id}" onclick="comprar(${index}) ">Agregar <i class="usuario__iconos fas fa-shopping-bag" aria-hidden="true"></i></button></span>
        </div>
        `
    });

});

// ACCESORIOS

const mostrarAccesorios = accesorios.addEventListener("click", ()=>{
    imprimirTodosLosProductos.innerHTML = ` `

    listaFiltradaAccesorios.forEach(element => {
    
        let indexOf = listaTodosLosProductosNueva.indexOf(element);
        let index = listaTodosLosProductosNueva[indexOf].id;
    
    
        imprimirTodosLosProductos.innerHTML += `
            
        <div class="producto-container">
            <img src="${element.image}">
            <h3 class="texto-productos">${element.name}</h3>
            <h4 class="texto-productos">$ ${element.price}</h4>
            <span><button class="btn-comprar" id="btn-${element.id}" onclick="comprar(${index}) ">Agregar <i class="usuario__iconos fas fa-shopping-bag" aria-hidden="true"></i></button></span>
        </div>
        `
    });

});

// TODOS LOS PRODUCTOS

const mostrarTodos = todos.addEventListener("click", ()=>{
    imprimirTodosLosProductos.innerHTML = ` `

    listaTodosLosProductosNueva.forEach(element => {
    
        let indexOf = listaTodosLosProductosNueva.indexOf(element);
        let index = listaTodosLosProductosNueva[indexOf].id;
    
        imprimirTodosLosProductos.innerHTML += `
            
        <div class="producto-container">
            <img src="${element.image}">
            <h3 class="texto-productos">${element.name}</h3>
            <h4 class="texto-productos">$ ${element.price}</h4>
            <span><button class="btn-comprar" id="${element.id}" onclick="comprar(${index}) ">Agregar <i class="usuario__iconos fas fa-shopping-bag" aria-hidden="true"></i></button></span>
        </div>
        `
    });

})



const comprar = (index) =>{


    if (localStorage.getItem("listaCarrito") == null) {
        listaProductosCarrito = [];
    
    } else {
        listaProductosCarrito = JSON.parse(localStorage.getItem("listaCarrito"))
    }

    listaProductosCarrito.push(listaTodosLosProductosNueva[index -1])
    localStorage.setItem("listaCarrito",JSON.stringify(listaProductosCarrito))
    sumaCompra();
    imprimirProductosCarrito();
    carritoShow();
    setTimeout(function(){
        carritoHide()
    } ,2000);
}


// Compra en carrito

const sumaCompra = ()=>{

    let monto = 0

    listaProductosCarrito.forEach(element => {
        monto += JSON.parse(element.price)
    });

    montoCarrito.textContent = `$ ${monto}`;
}





// Imprimir productos del carrito(localstorage)

const imprimirProductosCarrito = () =>{

    if (listaProductosCarrito.length != 0) {

        productosCarrito.innerHTML = `

        `;

        listaProductosCarrito.forEach(element =>{
    
            productosCarrito.innerHTML +=
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
            
        })
    } 
}


///////////////////////    Vaciar carrito    ///////////////////////////

document.getElementById("btn-vaciar-carrito").addEventListener("click",()=>{
    localStorage.removeItem('listaCarrito');

    productosCarrito.innerHTML = `
    
        `;

    monto = 0;
    montoCarrito.textContent = `$ ${monto}`;

    setTimeout(function(){
        carritoHide()
    } ,2000);
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
    $(".carrito-compras").css("top", "-1900px");
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
    $(".cuenta-usuario").css("top", "-1900px");
    localStorage.setItem("cuenta","hide")
}

$("#btn-cuenta-usuario").on("click", ()=>{
    if(localStorage.getItem("cuenta") === "show"){
        cuentaHide()
    } else {
        cuentaShow()
    }
});






///////////////////////// create element en lugar de usar inner Html
// const div = document.createElement("div");
// div.setAttribute("class","producto-container");

// const img = document.createElement("img");
// img.setAttribute("src", element.image);

// const h3 = document.createElement("h3");
// h3.classList.add("texto-productos");
// h3.textContent = element.name;

// const h4 = document.createElement("h4");
// h4.setAttribute("class","texto-productos");
// h4.textContent = "$ " + element.price;

// const span1 = document.createElement("span");
// const btn = document.createElement("button");
// btn.setAttribute("class","btn-comprar");
// btn.setAttribute("id","btn-"+element.id);
// btn.setAttribute("onclick", comprar());
// btn.textContent = "Agregar"

// const logoAgregar = document.createElement("i")
// logoAgregar.classList.add("usuario__iconos", "fas" , "fa-shopping-bag")

// span1.append(btn);
// btn.append(logoAgregar);

// div.append(img);
// div.append(h3);
// div.append(h4);
// div.append(span1);

// imprimirTodosLosProductos.append(div)