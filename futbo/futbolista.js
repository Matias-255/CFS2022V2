"use strict";
exports.__esModule = true;
exports.Futbolista = void 0;
var Futbolista = /** @class */ (function () {
    function Futbolista(nombre, equipo, edad, antiguedad, sueldo, posicion, lesion, numero, goles) {
        //super(nombre,equipo,edad,antiguedad, sueldo)
        this.posicion = posicion;
        this.lesion = lesion;
        this.numero = numero;
        this.goles = goles;
    }
    Futbolista.prototype.entrenar = function () {
        console.log("hora de entrenar");
    };
    Futbolista.prototype.hacerGol = function () {
        console.log("GOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOLLLLLLLLLLLLLLLLL");
    };
    Futbolista.prototype.jugar = function () {
        console.log("a jugar");
    };
    Futbolista.prototype.atajar = function (posicion) {
        console.log("voy al arco");
    };
    Futbolista.prototype.hacerFalta = function () {
        console.log("tirate al piso y llora");
    };
    return Futbolista;
}());
exports.Futbolista = Futbolista;
