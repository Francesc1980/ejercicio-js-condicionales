/**
 * Operador ternario: lee sobre otra manera de tomar decisiones en progrmación https://www.oscarlijo.com/blog/operador-ternario/
 * 
 */

// Pregunta 1. ANTES DE EJECUTAR. Que valro tomará la variable 'decision'. Porque?
// la variable decisicon tomara el valor tendre que trabajar ya que la segunda es falsa

let decision;
let soyRico = false;

decision = (soyRico)? 'Me voy al Caribe': 'Tendré que trabajar';

console.log("Decision: ", decision);

// Pregunta 2. Cambia el valor de las siguientes variables para obtener el mensaje por el terminal que diga 'Échame de comer, humano!'

let tengoHambre;
let mensaje = "Echames de comer humano";

mensaje = tengoHambre? 'Échame de comer, humano!': 'Miau!';

console.log("El gato dice: ", mensaje);


