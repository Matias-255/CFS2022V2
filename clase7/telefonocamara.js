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
var TelefonoconCamara = /** @class */ (function (_super) {
    __extends(TelefonoconCamara, _super);
    function TelefonoconCamara(estaPrendrido, bateriaActual, estadoCamara) {
        var _this = _super.call(this, estaPrendrido, bateriaActual) || this;
        _this.estadoCamara = estadoCamara;
        return _this;
    }
    TelefonoconCamara.prototype.sacarFoto = function () {
        var inspeccion = ReadlineSync.question("la camara funciona? (escribir si o no)");
        if (inspeccion === "si") {
            this.estadoCamara = true;
            console.log("sacando foto....");
        }
        else {
            this.estadoCamara = false;
            console.log("la camara no funciona, cancelando accion...");
        }
    };
    return TelefonoconCamara;
}(herencia_1.Telefono));
var camaras = new TelefonoconCamara(true, 20, true);
camaras.sacarFoto();
