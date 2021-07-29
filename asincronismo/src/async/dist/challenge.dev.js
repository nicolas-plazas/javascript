"use strict";

var fetchData = require('../utils/fetchData');

var API = 'https://rickandmortyapi.com/api/character/';

var anotherFunction = function anotherFunction(urlApi) {
  var data, character, origin;
  return regeneratorRuntime.async(function anotherFunction$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetchData(urlApi));

        case 3:
          data = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(fetchData("".concat(urlApi).concat(data.results[0].id)));

        case 6:
          character = _context.sent;
          _context.next = 9;
          return regeneratorRuntime.awrap(fetchData(character.origin.url));

        case 9:
          origin = _context.sent;
          console.log(data.info.count);
          console.log(character.name);
          console.log(origin.dimension);
          _context.next = 18;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 15]]);
};

console.log('Before');
anotherFunction(API);
console.log('After');