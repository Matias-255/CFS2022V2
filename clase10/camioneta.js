"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var automovil_1 = require("./automovil");
var Camioneta = /** @class */ (function (_super) {
    __extends(Camioneta, _super);
    function Camioneta(velocidadActual, marca, año, pesoActual, pesoMaximo) {
        var _this = _super.call(this, velocidadActual, marca, año) || this;
        _this.pesoActual = pesoActual;
        _this.pesoMaximo = pesoMaximo;
        return _this;
    }
    Camioneta.prototype.acelerar = function () {
        this.velocidadActual += 10;
    };
    Camioneta.prototype.getVelocidadActual = function () {
        return this.velocidadActual;
    };
    Camioneta.prototype.getMarca = function () {
        return this.marca;
    };
    Camioneta.prototype.getAño = function () {
        return this.año;
    };
    Camioneta.prototype.subirPeso = function () {
        if (this.pesoActual < this.pesoMaximo) {
            this.pesoActual += 10;
        }
        else {
            console.log("imposible, la camioneta llego al limite de peso");
        }
    };
    Camioneta.prototype.bajarPeso = function () {
        if (this.pesoActual > 0) {
            this.pesoActual -= 10;
        }
        else {
            console.log("la camioneta no esta cargada, no hay nada que bajar");
        }
    };
    Camioneta.prototype.getPesoActual = function () {
        return this.pesoActual;
    };
    return Camioneta;
}(automovil_1.Automovil));
var camioneta1 = new Camioneta(220, "chevrolet", 1995, 500, 520);
camioneta1.acelerar();
camioneta1.acelerar();
console.log(camioneta1.getVelocidadActual());
console.log(camioneta1.getAño());
console.log(camioneta1.getMarca());
camioneta1.subirPeso();
camioneta1.subirPeso();
camioneta1.subirPeso();
console.log(camioneta1.getPesoActual());
camioneta1.bajarPeso();
console.log(camioneta1.getPesoActual());
