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
exports.AutoCiudad = void 0;
var AutoCiudad = /** @class */ (function () {
    function AutoCiudad() {
        this.velocidadActual = 0;
        this.marca = "volkswagen";
        this.año = 2010;
    }
    AutoCiudad.prototype.getMarca = function () {
        return this.marca;
    };
    AutoCiudad.prototype.getAño = function () {
        return this.año;
    };
    return AutoCiudad;
}());
exports.AutoCiudad = AutoCiudad;
var Superauto = /** @class */ (function (_super) {
    __extends(Superauto, _super);
    function Superauto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Superauto.prototype.acelerar = function () {
        this.velocidadActual += 15;
    };
    return Superauto;
}(AutoCiudad));
