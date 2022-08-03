"use strict";
exports.__esModule = true;
exports.Telefono = void 0;
var ReadlineSync = require("readline-sync");
var Telefono = /** @class */ (function () {
    function Telefono(estaPrendrido, bateriaActual) {
    }
    Telefono.prototype.mandarMensaje = function () {
        var mensaje = ReadlineSync.question("escriba su mensaje");
        console.log(mensaje);
    };
    Telefono.prototype.hacerLlamada = function () {
        console.log("llamando...");
    };
    Telefono.prototype.prenderApagar = function () {
        var switchONOFF = ReadlineSync.question("esta encendido o apagado?");
        if (switchONOFF === "encendido") {
            this.estaPrendrido = true;
        }
        else {
            this.estaPrendrido = false;
        }
    };
    return Telefono;
}());
exports.Telefono = Telefono;
var phone = new Telefono(true, 100);
phone.prenderApagar();
phone.mandarMensaje();
phone.hacerLlamada();
phone.prenderApagar();
