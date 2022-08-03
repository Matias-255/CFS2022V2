"use strict";
exports.__esModule = true;
exports.Libro = void 0;
var ReadlineSync = require("readline-sync");
var Libro = /** @class */ (function () {
    function Libro(name) {
        this.nombre = name;
    }
    Libro.prototype.getBook = function () {
        var confirmarLibro = ReadlineSync.question("Nombre del libro?");
    };
    return Libro;
}());
exports.Libro = Libro;
