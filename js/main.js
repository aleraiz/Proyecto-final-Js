class User {
    
    constructor (nombre, password){
        this.nombre = nombre;
        this.password = password
    }

}

const alejandro = new User("ale","hola")



// const confirmacionDeAcceso = () => {

//     let bucle = true

//     while (bucle) {
//         const nombre = prompt("Ingresa tu nombre");
//         const password = prompt("Ingresa tu pass");

//         if(nombre === alejandro.nombre && password === alejandro.password){

//             bucle = false
//             break;

//         } else {
//             alert("Usuario incorrecto");
//         }

//     }
// }

// confirmacionDeAcceso()
