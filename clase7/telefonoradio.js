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
var ReadlineSync = require("readline-sync");
var herencia_1 = require("./herencia");
var TelefonoconRadio = /** @class */ (function (_super) {
    __extends(TelefonoconRadio, _super);
    function TelefonoconRadio(estaPrendrido, bateriaActual, frecuenciaActual) {
        var _this = _super.call(this, estaPrendrido, bateriaActual) || this;
        _this.frecuenciaActual = frecuenciaActual;
        return _this;
    }
    TelefonoconRadio.prototype.setfrecuenciaActual = function () {
        this.frecuenciaActual = ReadlineSync.question("introduzca Frecuencia");
    };
    TelefonoconRadio.prototype.verfrecuenciaActual = function () {
        console.log(this.frecuenciaActual);
    };
    return TelefonoconRadio;
}(herencia_1.Telefono));
var radio = new TelefonoconRadio(true, 50, 100);
radio.setfrecuenciaActual();
radio.verfrecuenciaActual();
