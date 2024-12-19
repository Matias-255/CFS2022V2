"use strict";
exports.__esModule = true;
exports.Automovil = void 0;
var Automovil = /** @class */ (function () {
    function Automovil(velocidadActual, marca, año) {
        this.velocidadActual = velocidadActual;
        this.marca = marca;
        this.año = año;
    }
    Automovil.prototype.getMarca = function () {
        return this.marca;
    };
    Automovil.prototype.getAño = function () {
        return this.año;
    };
    Automovil.prototype.getVelocidadActual = function () {
        return this.velocidadActual;
    };
    Automovil.prototype.acelerar = function () {
        this.velocidadActual += 15;
    };
    return Automovil;
}());
exports.Automovil = Automovil;
