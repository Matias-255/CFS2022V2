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
var futbolista_1 = require("./futbolista");
var Entrenador = /** @class */ (function (_super) {
    __extends(Entrenador, _super);
    function Entrenador(nombre, edad, lista) {
        var _this = _super.call(this, nombre, equipo, edad, sueldo, antiguedad) || this;
        _this.jugador1 = new futbolista_1.Futbolista("Juan", "Argentina", 24, 5, 10000, "delantero", "saludable", 9, 5);
        _this.jugador2 = new futbolista_1.Futbolista("Alejandro", "Argentina", 21, 2, 95000, "arquero", "saludable", 24, 1);
        _this.jugador3 = new futbolista_1.Futbolista("Javier", "Argentina", 19, 1, 90000, "defensor", "lesionado", 3, 0);
        _this.listajugadores = [_this.jugador1, _this.jugador2, _this.jugador3];
        _this.jugadores = lista;
        return _this;
    }
    Entrenador.prototype.definirTitular = function () {
        console.log("sali de la banca");
    };
    Entrenador.prototype.Dirigir = function () {
        console.log("JUAN, METELE MAS GARRA!!!");
    };
    Entrenador.prototype.Entrenar = function () {
        console.log("comienza el entrenamiento");
    };
    Entrenador.prototype.Planifica = function () {
        console.log("este es el plan");
    };
    return Entrenador;
}(persona_1.Persona));
var trainer = new Entrenador();
trainer.hablar();
trainer.concentrarse();
trainer.Entrenar();
trainer.definirTitular();
trainer.Dirigir();
trainer.Planifica();
