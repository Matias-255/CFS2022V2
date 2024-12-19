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
var Autociudad = /** @class */ (function (_super) {
    __extends(Autociudad, _super);
    function Autociudad(velocidadActual, marca, año, velocidadMaxima) {
        var _this = _super.call(this, velocidadActual, marca, año) || this;
        _this.velocidadMaxima = velocidadMaxima;
        return _this;
    }
    Autociudad.prototype.acelerar = function () {
        if (this.velocidadActual < this.velocidadMaxima) {
            this.velocidadActual += 15;
        }
        else {
            console.log("imposible acelerar, llegaste a la velocidad maxima disponible");
        }
    };
    Autociudad.prototype.getVelocidadActual = function () {
        return this.velocidadActual;
    };
    Autociudad.prototype.getMarca = function () {
        return this.marca;
    };
    Autociudad.prototype.getaño = function () {
        return this.año;
    };
    Autociudad.prototype.getVelocidadMaxima = function () {
        return this.velocidadMaxima;
    };
    return Autociudad;
}(automovil_1.Automovil));
