/*

Operador: && https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison_and

https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_l%C3%B3gicos

1. Antes de ejecutar "node ex6.js"; razona: qué vamos a ver por el terminal? Por qué ?
 se cumplen las 2 porque el operador && lo que hace es que los 2 condicionales se cumplan ya que 4 es mayor que 3 y 6 mayor que 5 
 y en el de abajo 4 es mayor que 3 y -1 es mayor que 0
*/

if (4 > 3 && 6 > 5) {
    console.log("Esta condición se cumple");
}

if (4 > 3 && -1 > 0) {
    console.log("Esta condición también se cumple?");

}