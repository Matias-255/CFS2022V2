"use strict";
exports.__esModule = true;
var Auto = /** @class */ (function () {
    function Auto() {
        this.cambioActual = 0;
        this.autoPrendido = false;
        this.cambioActual = 1;
    }
    Auto.prototype.getCambioActual = function () {
        return this.cambioActual;
    };
    Auto.prototype.subirCambio = function () {
        this.cambioActual = this.cambioActual + 1;
    };
    Auto.prototype.bajarCambio = function () {
        this.cambioActual = this.cambioActual - 1;
    };
    return Auto;
}());
var automovil = new Auto();
console.log(automovil.getCambioActual());
automovil.subirCambio();
automovil.bajarCambio();
automovil.subirCambio();
console.log(automovil.getCambioActual());
