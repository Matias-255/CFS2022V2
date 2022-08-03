"use strict";
exports.__esModule = true;
exports.Colegio = void 0;
var alumno_1 = require("./alumno");
var profesor_1 = require("./profesor");
var Colegio = /** @class */ (function () {
    function Colegio(name) {
        this.alumno1 = new alumno_1.Alumno("andres", 7);
        this.alumno2 = new alumno_1.Alumno("paula", 6);
        this.alumnos = [this.alumno1, this.alumno2];
        this.profesores = [new profesor_1.Profesor("sandra"), new profesor_1.Profesor("alejandro"), new profesor_1.Profesor("jose")];
        this.nombre = name;
    }
    Colegio.prototype.agregarAlumno = function () {
        this.alumnos.push(alumno_1.Alumno);
    };
    Colegio.prototype.expulsarAlumno = function (alumno) {
        this.alumnos.splice(this.alumnos.indexOf(alumno));
    };
    return Colegio;
}());
exports.Colegio = Colegio;
