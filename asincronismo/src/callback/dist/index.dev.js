"use strict";

// Ejemplo 1 - Suma
function sum(num1, num2) {
  return num1 + num2;
}
/*
    callback hace referencia a una función que retorna algo,
    en este caso una suma entre dosnúmeros.
*/


function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(5, 7, sum)); // Ejemplo 2 - Obtener una fecha con timeOut
// Recibe como parametro una función, en este caso "printDate", para imprimir la fecha por consola

function date(callback) {
  console.log(new Date()); // Función que refleja el contenido, luego de pasar 3 seg

  setTimeout(function () {
    // Variable que almacena la fecha actual
    var date = new Date(); // llama a la función pasada por parámetro y le entrega la fecha obtenida en la varianle "date"

    callback(date);
  }, 3000);
}

function printDate(dateNow) {
  // Imprime la fecha actual
  console.log(dateNow);
} // Llama la función date y pasa como parámetro la función printdate


date(printDate);