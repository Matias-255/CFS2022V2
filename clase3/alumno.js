"use strict";
exports.__esModule = true;
exports.Alumno = void 0;
var Alumno = /** @class */ (function () {
    function Alumno(nom, not) {
        this.nombre = nom;
        this.nota = not;
    }
    Alumno.prototype.setBuenaNota = function () {
        this.nota = 7;
    };
    Alumno.prototype.setMalaNota = function () {
        this.nota = 5;
    };
    Alumno.prototype.setNombre = function () {
        this.nombre = "matias";
        console.log("el nombre es", this.nombre);
    };
    Alumno.prototype.aprobar = function () {
        if (this.nota > 7) {
            this.aprobado = true;
            console.log("aprobado");
        }
        else {
            this.aprobado = false;
            console.log("desaprobado");
        }
    };
    return Alumno;
}());
exports.Alumno = Alumno;
