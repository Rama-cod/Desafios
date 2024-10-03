let nombreProducto ="Pizza muzzarella";
let precioUnitario = 8500;

function mostrarPrompt() {
    let cantidadDeseada = prompt("¿Cuantas desea comprar?");
    let resultado = cantidadDeseada * precioUnitario;
        alert(`El precio a pagar por la cantidad de ${cantidadDeseada} es de $${resultado}`);
    }

