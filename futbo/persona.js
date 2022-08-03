"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, equipo, edad, sueldo, antiguedad) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.edad = edad;
        this.sueldo = sueldo;
        this.antiguedad = antiguedad;
    }
    Persona.prototype.hablar = function () {
        console.log("hablando...");
    };
    Persona.prototype.concentrarse = function () {
        console.log("concentrandonos para empezar el partido");
    };
    return Persona;
}());
exports.Persona = Persona;
