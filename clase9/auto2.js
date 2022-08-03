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
var autopadre_1 = require("./autopadre");
var Auto = /** @class */ (function (_super) {
    __extends(Auto, _super);
    function Auto(marca, año, precio, cambioActual) {
        return _super.call(this, marca, año, precio, cambioActual) || this;
    }
    Auto.prototype.getPrecio = function () {
        console.log(this.precio);
        return this.precio;
    };
    Auto.prototype.getAño = function () {
        console.log(this.año);
        return this.año;
    };
    Auto.prototype.getMarca = function () {
        console.log(this.marca);
        return this.marca;
    };
    return Auto;
}(autopadre_1.Mainauto));
var auto1 = new Auto("peugeot", 1, 2005, 70000);
auto1.getAño();
auto1.getMarca();
auto1.getPrecio();
