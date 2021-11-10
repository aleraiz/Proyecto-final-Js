





const url = `https://618ac9e034b4f400177c48a4.mockapi.io/api/v1/products`

    $.get(url, (respuesta, estado) =>{

        if(estado == "success"){


            for(let i =0; i< respuesta.length; i++){

                $(".contenidoProductosTarjetas").append(
                    `
                    <div class="producto-container">
                        <img src="${respuesta[i].image}">
                        <h3 class="texto-productos">${respuesta[i].name}</h3>
                        <h4 class="texto-productos">${respuesta[i].price}</h4>
                        <span><button>Agregar</button></span>
                    </div>
                    `)
            }
        }
    })








// $(`#btn`).click( ()=>{

//     $.get(url, (respuesta, estado) =>{

//         if(estado == "success"){

//             console.log(respuesta[0])
//             $(".container-div").prepend(
//                 `
//                 <img src="${respuesta[0].image}">
//                 <p>${respuesta[0].name}</p>
//                 <p>${respuesta[0].price}</p>
//                 `)
//         }


//     })


// })