"use strict";

var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

var fetchData = function fetchData(urlApi) {
  return new Promise(function (resolve, reject) {
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', urlApi, true); // La propiedad onreadystatechange define una función que se ejecutará cuando cambie readyState

    xhttp.onreadystatechange = function () {
      /*
               0: request not initialized
               1: server connection established
               2: request received
               3: processing request
               4: request finished and response is ready
           */
      if (xhttp.readyState === 4) {
        // Valida que el estatus de la petición sea OK
        xhttp.status === 200 ? resolve(JSON.parse(xhttp.responseText)) : reject(new Error("Error code: ".concat(xhttp.status, " - ").concat(urlApi)));
      }
    }; // Envía la solicitud


    xhttp.send();
  });
};

module.exports = fetchData;