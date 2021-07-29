let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://rickandmortyapi.com/api/character/';

function fetchData(urlApi, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', urlApi, true);
    // La propiedad onreadystatechange define una función que se ejecutará cuando cambie readyState
    xhttp.onreadystatechange = function (event) {
        /*
            0: request not initialized
            1: server connection established
            2: request received
            3: processing request
            4: request finished and response is ready
        */
        if(xhttp.readyState === 4) {
            // Valida que el estatus de la petición sea OK
            if(xhttp.status === 200) {
                // retornar los datos de la API
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                // Crea un error correspondiente al estado de la solicitud
                const error = new Error(`Error code: ${xhttp.status} - ${urlApi}`);
                // Regresa el callback con el error, creado anteriormente
                return callback(error, null);
            }
        }
    }
    // Envía la solicitud
    xhttp.send();
}

// Evitar esta estructura - callback hell
fetchData(API, function(error1, data1) {
    if (error1) return console.error(error1);
    fetchData(`${API}${data1.results[0].id}`, function (error2, data2) {
        if (error2) return console.error(error2);
        fetchData(data2.origin.url, function (error3, data3) {
            if (error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    });
});