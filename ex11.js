/**
 * Si una variable no tiene valor, esta se evalua como false. Pero también sucede en muchos otros casos: https://developer.mozilla.org/en-US/docs/Glossary/Falsy
 * 
 */

// Pregunta 1: Contesta y razona: qué línea de código se va a ejecutar ? Ejecuta el código. Qué línea se ha ejecutado finalmente?
//no sale el nombre en el formulario porque no esta definido y  luego si pones tu nombre se muestra



let nombre = "Francisco"; // Un formulario nos pide que pongamos nuestro nombre

if (nombre) {
    console.log("tu nombre es " + nombre);
}

else {
    console.log("Me parece que te has olvidado de poner tu nombre...")
}

// Pregunta 2: Modifica el valor de las variables adecuadamente para que se muestre el siguiente console.log

let destino = ""; // donde me voy a de viaje?
destino="suiza"
let presupuesto=""; // cuanto dinero tengo para ello?
presupuesto ="1000"
let estoyPrearado = false; // lo tengo todo ya listo ?
estoyPreparado = false;

/**NO MODIFIQUES A PARTIR DE AQUI */

if (destino && presupuesto && estoyPrearado) {
    console.log("Me voy a de viaje a " + destino + " y me voy a gastar " + presupuesto + " €");
}