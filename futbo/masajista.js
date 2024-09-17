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
var persona_1 = require("./persona");
var Masajista = /** @class */ (function (_super) {
    __extends(Masajista, _super);
    function Masajista(nombre, equipo, edad, sueldo, antiguedad) {
        var _this = _super.call(this, nombre, equipo, edad, sueldo, antiguedad) || this;
        var clientes;
        return _this;
    }
    Masajista.prototype.Masajear = function () {
        console.log("recuestese y deje que haga mi magia");
    };
    Masajista.prototype.Rehabilitar = function () {
        console.log("listo para volver");
    };
    return Masajista;
}(persona_1.Persona));
var Masaje = new Masajista("matias", "boca", 22, 100000, 5);
Masaje.Masajear();
Masaje.Rehabilitar();
