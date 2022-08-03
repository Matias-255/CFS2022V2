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
var AutoCarreras = /** @class */ (function (_super) {
    __extends(AutoCarreras, _super);
    function AutoCarreras(marca, año, cambioActual, precio) {
        return _super.call(this, marca, año, cambioActual, precio) || this;
    }
    AutoCarreras.prototype.correrCarrera = function () {
        console.log("empieza la carrera");
    };
    return AutoCarreras;
}(autopadre_1.Mainauto));
var carr = new AutoCarreras("peugeot", 2005, 1, 1000000);
carr.subirCambio();
carr.subirCambio();
carr.getCambioActual();
carr.bajarCambio();
carr.getPrecio();
carr.correrCarrera();
