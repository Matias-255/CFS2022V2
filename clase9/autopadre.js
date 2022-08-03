"use strict";
exports.__esModule = true;
exports.Mainauto = void 0;
var Mainauto = /** @class */ (function () {
    function Mainauto(marca, cambioActual, precio, año) {
        this.marca = marca;
        this.cambioActual = cambioActual;
        this.precio = precio;
        this.año = año;
    }
    Mainauto.prototype.getCambioActual = function () {
        return this.cambioActual;
    };
    Mainauto.prototype.getPrecio = function () {
        return this.precio;
    };
    Mainauto.prototype.subirCambio = function () {
        this.cambioActual = this.cambioActual + 1;
    };
    Mainauto.prototype.bajarCambio = function () {
        this.cambioActual = this.cambioActual - 1;
    };
    return Mainauto;
}());
exports.Mainauto = Mainauto;
